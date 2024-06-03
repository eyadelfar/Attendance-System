from imports import *
from collections import Counter
from datetime import datetime

class Recognizer:
    def __init__(self, db, semester_id, course_id, lecture_id, status, confidence_threshold=0.9, buffer_size=3):
        self.db = db
        self.semester_id = semester_id
        self.course_id = course_id
        self.lecture_id = lecture_id
        self.status = status
        self.confidence_threshold = confidence_threshold
        self.buffer_size = buffer_size
        self.predictions_buffer = []
        self.last_marked_time = {}
        self.mark_interval = 300  # 5 minutes interval
        self.load_encodings()

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
            cursor = self.db.cursor()
            sql = "SELECT fullname FROM student_details WHERE student_id = %s"
            val = (student_id,)
            print(1)
            cursor.execute(sql, val)
            print(2)

            result = cursor.fetchone()
            if result:
                student_name = result[0]
            sql = "SELECT * FROM attendance WHERE student_id = %s AND course_id = %s AND semester_id = %s AND lecture_id = %s"
            val = (student_id, self.course_id, self.semester_id, self.lecture_id)
            print(3)

            cursor.execute(sql, val)
            print(4)

            result = cursor.fetchone()
            if result:
                return
            else:
                sql = "INSERT INTO attendance (course_id, semester_id, lecture_id, timestamp, status, student_id) VALUES (%s, %s, %s, %s, %s, %s)"
                val = (self.course_id, self.semester_id, self.lecture_id, datetime.now(), self.status, student_id)
                print(5)

                cursor.execute(sql, val)
                print(6)
                self.db.commit()
                print(7)

                cursor.close()
        except mysql.connector.Error as err:
            print(f"Database error: {err}")

    def recognize(self, video_source):
        start_time = time.time()
        fps = 0
        frames = 0

        if video_source.isdigit():
            video_source = int(video_source)
        cap = cv2.VideoCapture(video_source)
        print('A')
        face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
        consecutive_detections = 0

        while True:
            ret, img = cap.read()
            if not ret:
                break
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            faces = face_cascade.detectMultiScale(gray, 1.3, 5)
            for (x, y, w, h) in faces:
                face_img = img[y:y + h, x:x + w]
                if face_img.shape[0] > 0 and face_img.shape[1] > 0:
                    try:
                        print('B')

                        face_encoding = DeepFace.represent(face_img, model_name='Facenet', enforce_detection=False, detector_backend='mtcnn')
                        print('C')
                        if face_encoding:
                            face_encoding = face_encoding[0]['embedding']
                            best_match_id = None
                            confidence = 0.0
                            print('DD')

                            for j, known_encoding in enumerate(self.known_encodings):
                                print('CC')

                                if len(known_encoding) == len(face_encoding):
                                    print('D')

                                    result = DeepFace.verify(known_encoding, face_encoding, model_name='Facenet', enforce_detection=False, distance_metric='cosine')
                                    print('E')

                                    if result['verified'] and result['distance'] < self.confidence_threshold:
                                        best_match_id = os.path.basename(os.path.dirname(self.file_paths[j]))
                                        confidence = 1 - result['distance']
                                        break
                                    
                            if best_match_id:
                                print('F')

                                self.predictions_buffer.append(best_match_id)
                                consecutive_detections += 1

                                if consecutive_detections >= self.buffer_size:
                                    print('G')

                                    most_common_prediction = Counter(self.predictions_buffer).most_common(1)[0][0]
                                    cursor = self.db.cursor()
                                    sql = "SELECT fullname FROM student_details WHERE student_id = %s"
                                    val = (most_common_prediction,)
                                    cursor.execute(sql, val)
                                    result = cursor.fetchone()
                                    if result:
                                        student_name = result[0]
                                    self.mark_attendance(most_common_prediction)
                                    consecutive_detections = 0
                                    self.predictions_buffer.clear()
                                    cv2.putText(img, f"Recognized: {student_name}", (x, y + h + 20), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

                            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
                            cv2.putText(img, "Face Detected", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)
                        else:
                            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
                            cv2.putText(img, "Face Not Detected", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 0, 255), 2)
                    except Exception as e:
                        print(f"Error processing face: {e}")
                else:
                    cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
                    cv2.putText(img, "Invalid Face Region", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 0, 255), 2)

            frames += 1
            if frames % 10 == 0:
                end_time = time.time()
                fps = 10 / (end_time - start_time)
                start_time = end_time
            cv2.putText(img, f"FPS: {fps:.2f}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)
            cv2.imshow('Face Recognition', img)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

        cap.release()
        cv2.destroyAllWindows()
