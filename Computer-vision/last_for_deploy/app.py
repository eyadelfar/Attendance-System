from flask import Flask, request, render_template, redirect, url_for
from werkzeug.utils import secure_filename
import os
import mysql.connector
from train import Trainer
from recognize import Recognizer

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'db'
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

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return redirect(request.url)
    file = request.files['file']
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        student_id = request.form['student_id']
        student_folder = os.path.join(app.config['UPLOAD_FOLDER'], student_id)
        if not os.path.exists(student_folder):
            os.makedirs(student_folder)
        file.save(os.path.join(student_folder, filename))
    return redirect(url_for('index'))

@app.route('/train', methods=['POST'])
def train():
    augment = request.form.get('augment', 'false').lower() == 'true'
    save_augments = request.form.get('save_augments', 'false').lower() == 'true'
    n_samples = int(request.form.get('n_samples', 2))
    trainer = Trainer(augment=augment, save_augments=save_augments, n_samples=n_samples)
    result = trainer.train()
    return result

@app.route('/recognize', methods=['POST'])
def recognize():
    semester_id = request.form['semester_id']
    course_id = request.form['course_id']
    lecture_id = request.form['lecture_id']
    status = request.form['status']
    video_source = request.form['video_source']
    recognizer = Recognizer(db, semester_id, course_id, lecture_id, status)
    recognizer.recognize(video_source)
    return {"status": "success", "message": "Recognition completed"}

if __name__ == '__main__':
    app.run(debug=True)
