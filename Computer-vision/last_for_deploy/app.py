from flask import Flask, request, redirect, url_for, jsonify
from werkzeug.utils import secure_filename
import os
import mysql.connector
from flask_cors import CORS
from train import Trainer  # Ensure you have the Trainer class implemented

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Enable CORS for all routes from the specified origin

app.config['UPLOAD_FOLDER'] = 'F:\\GP\\Repo\\Attendance-System\\Computer-vision\\last_for_deploy\\db'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

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

    cursor = db.cursor()
    cursor.execute("INSERT INTO student_details (roll_no, fullname, phone_no, password, level) VALUES (%s, %s, %s, %s, %s)", 
                   (roll_no, fullname, phone_no, password, level))
    db.commit()

    cursor.execute("SELECT student_id FROM student_details WHERE roll_no = %s", (roll_no,))
    student_id = cursor.fetchone()[0]
    cursor.close()

    return jsonify({"status": "success", "student_id": student_id}), 201

@app.route('/train', methods=['POST'])
def train():
    # You can keep the trainer instantiation and training process as it is
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

    if not all([semester_id, course_id, lecture_id, status, video_source]):
        return {"status": "error", "message": "Missing required parameters"}, 400

    recognizer = Recognizer(db, semester_id, course_id, lecture_id, status)
    recognizer.recognize(video_source)
    return {"status": "success", "message": "Recognition completed"}
    
if __name__ == '__main__':
    app.run(debug=True)
