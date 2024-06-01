from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import mysql.connector
from flask_cors import CORS
from train import Trainer
from recognize import Recognizer

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

app.config['UPLOAD_FOLDER'] = 'F:\\GP\\Repo\\Attendance-System\\Computer-vision\\last_for_deploy\\db'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# Database connection (replace with your own configuration)
db = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="e@123321xzX",
    database="attendance"
)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({"status": "error", "message": "No file part"}), 400
    file = request.files['file']
    student_id = request.form['student_id']
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        student_folder = os.path.join(app.config['UPLOAD_FOLDER'], student_id)
        if not os.path.exists(student_folder):
            os.makedirs(student_folder)
        file.save(os.path.join(student_folder, filename))
        return jsonify({"status": "success", "message": "File uploaded successfully"}), 200
    return jsonify({"status": "error", "message": "Invalid file type"}), 400

@app.route('/students', methods=['POST'])
def create_student():
    data = request.json
    roll_no = data['roll_no']
    fullname = data['fullname']
    phone_no = data['phone_no']
    password = data['password']
    level = data['level']
    
    print(f"Data received: {data}")  # Debugging statement

    cursor = db.cursor()
    query = "INSERT INTO student_details (roll_no, fullname, phone_no, password, level) VALUES (%s, %s, %s, %s, %s)"
    values = (roll_no, fullname, phone_no, password, level)
    
    print(f"Executing query: {query} with values {values}")  # Debugging statement

    try:
        cursor.execute(query, values)
        db.commit()

        cursor.execute("SELECT student_id FROM student_details WHERE roll_no = %s", (roll_no,))
        student_id = cursor.fetchone()[0]
        cursor.close()
        
        return jsonify({"status": "success", "student_id": student_id}), 201
    except Exception as e:
        print(f"Error: {e}")  # Debugging statement
        db.rollback()
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/train', methods=['POST'])
def train():
    trainer = Trainer()
    result = trainer.train()
    return jsonify(result), 200

@app.route('/recognize', methods=['POST'])
def recognize():
    data = request.get_json()
    semester_id = data.get('semester_id')
    course_id = data.get('course_id')
    lecture_id = data.get('lecture_id')
    status = data.get('attendance_type')
    video_source = data.get('video_source')
    
    recognizer = Recognizer(db, semester_id, course_id, lecture_id, status)
    recognizer.recognize(video_source)
    
    return jsonify({"status": "recognition process started"})
    
if __name__ == '__main__':
    app.run(debug=True)
