from imports import *
import threading, logging, contextlib, sys,warnings

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
tf.get_logger().setLevel(logging.ERROR)
warnings.filterwarnings(action='ignore')

class DummyFile(object):
    def write(self, x): pass
    def flush(self): pass

class Recognizer:
    def __init__(self, db, semester_id, course_id, lecture_id, status, confidence_threshold=0.6, consistency_threshold=5, frame_skip=3):
        self.db = db
        self.semester_id = semester_id
        self.course_id = course_id
        self.lecture_id = lecture_id
        self.status = status
        self.confidence_threshold = confidence_threshold
        self.consistency_threshold = consistency_threshold
        self.frame_skip = frame_skip
        self.load_encodings()
        self.recognition_counts = {}
        self.frame_count = 0

    def load_encodings(self):
        if os.path.exists('F:\\GP\\Repo\\Attendance-System\\Computer-vision\\last_for_deploy\\known_encodings.pkl'):
            with open('F:\\GP\\Repo\\Attendance-System\\Computer-vision\\last_for_deploy\\known_encodings.pkl', 'rb') as f:
                self.results = pickle.load(f)
                self.known_encodings = [result[1] for result in self.results]
                self.file_paths = [result[0] for result in self.results]
        else:
            self.results = []
            self.known_encodings = []
            self.file_paths = []

    def mark_attendance(self, student_id):
        try:
            # Check if the MySQL connection is available
            if not self.db.is_connected():
                self.db.reconnect()

            cursor = self.db.cursor()

            # Check if semester_id exists in semester_details table
            sql = "SELECT COUNT(*) FROM semester_details WHERE semester_id = %s"
            cursor.execute(sql, (self.semester_id,))
            result = cursor.fetchone()
            if result and result[0] == 0:
                print(f"Invalid semester_id: {self.semester_id}")
                return

            # Fetch student name (optional)
            sql = "SELECT fullname FROM student_details WHERE student_id = %s"
            cursor.execute(sql, (student_id,))
            result = cursor.fetchone()
            if result:
                student_name = result[0]
            else:
                print(f"Student ID {student_id} not found")
                return

            # Check if attendance record already exists for this session and student
            sql = "SELECT * FROM attendance WHERE student_id = %s AND course_id = %s AND semester_id = %s AND lecture_id = %s AND status = %s"

            cursor.execute(sql, (student_id, self.course_id, self.semester_id, self.lecture_id, self.status))
            result = cursor.fetchone()
            if result:
                print("Attendance already marked for this session")
                return

            # Insert attendance record
            sql = "INSERT INTO attendance (course_id, semester_id, lecture_id, timestamp, status, student_id) VALUES (%s, %s, %s, %s, %s, %s)"
            val = (self.course_id, self.semester_id, self.lecture_id, datetime.now(), self.status, student_id)
            cursor.execute(sql, val)
            self.db.commit()
            print("Attendance marked successfully")
        except mysql.connector.Error as err:
            print(f"Database error: {err}")
        finally:
            if 'cursor' in locals() and cursor:
                cursor.close()

    def recognize_faces(self, img, faces):
        for (x, y, w, h) in faces:
            face_img = img[y:y + h, x:x + w]
            if face_img.shape[0] > 0 and face_img.shape[1] > 0:
                self.process_face(face_img, x, y, w, h, img)

    def process_face(self, face_img, x, y, w, h, img):
        try:
            # Suppress stdout and stderr during DeepFace call
            with contextlib.redirect_stdout(DummyFile()), contextlib.redirect_stderr(DummyFile()):
                face_encoding = DeepFace.represent(face_img, model_name='Facenet', enforce_detection=False, detector_backend='mtcnn')
            
            if face_encoding:
                face_encoding = face_encoding[0]['embedding']
                best_match_id = None
                confidence = 0.0
                for j, known_encoding in enumerate(self.known_encodings):
                    if len(known_encoding) == len(face_encoding):
                        with contextlib.redirect_stdout(DummyFile()), contextlib.redirect_stderr(DummyFile()):
                            result = DeepFace.verify(known_encoding, face_encoding, model_name='Facenet', enforce_detection=False, distance_metric='cosine')
                        
                        if result['verified'] and result['distance'] < self.confidence_threshold:
                            best_match_id = os.path.basename(os.path.dirname(self.file_paths[j]))
                            confidence = 1 - result['distance']
                            break

                if best_match_id:
                    # Update the recognition count
                    if best_match_id not in self.recognition_counts:
                        self.recognition_counts[best_match_id] = 0
                    self.recognition_counts[best_match_id] += 1

                    if self.recognition_counts[best_match_id] >= self.consistency_threshold:
                        self.mark_attendance(best_match_id)
                        cv2.putText(img, f"Recognized: {best_match_id}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
            cv2.putText(img, "Face Detected", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)
        except Exception as e:
            print(f"Error processing face: {e}")
            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
            cv2.putText(img, "Face Not Detected", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 0, 255), 2)
    def recognize(self, video_source):
        if video_source.isdigit():
            video_source = int(video_source)
        cap = cv2.VideoCapture(video_source)
        face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

        # Create a separate window to display recognized student information
        cv2.namedWindow("Recognized Student", cv2.WINDOW_NORMAL)

        while True:
            ret, img = cap.read()
            if not ret:
                break

            self.frame_count += 1
            if self.frame_count % self.frame_skip == 0:
                gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
                faces = face_cascade.detectMultiScale(gray, 1.3, 5)
                self.recognize_faces(img, faces)

            # Display the camera feed
            cv2.imshow('Face Recognition', img)

            # Check if there's any recognized student and display their information in a separate window
            if self.recognition_counts:
                recognized_info = ""
                for student_id, count in self.recognition_counts.items():
                    # Fetch student name instead of ID
                    cursor = self.db.cursor()
                    sql = "SELECT fullname FROM student_details WHERE student_id = %s"
                    cursor.execute(sql, (student_id,))
                    result = cursor.fetchone()
                    if result:
                        student_name = result[0]
                        recognized_info += f"Student Name: {student_name}, Count: {count}\n"

                # Show the student information only in the separate window
                if recognized_info:
                    recognized_img = np.zeros((800, 450, 3), dtype=np.uint8)
                    recognized_info_lines = recognized_info.split('\n')  # Split the lines
                    y_offset = 35  # Initial y-offset for text
                    for info_line in recognized_info_lines:
                        cv2.putText(recognized_img, info_line, (10, y_offset), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
                        y_offset += 25  # Increment y-offset for next line
                    cv2.imshow("Recognized Student", recognized_img)
            else:
                # If no recognized student, show an empty window
                cv2.imshow("Recognized Student", np.zeros((200, 400, 3), dtype=np.uint8))

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

        cap.release()
        cv2.destroyAllWindows()
