# Attendance-System

Graduation project for helwan university

This project is a comprehensive Attendance System that integrates backend, computer vision, database, and frontend components to provide an efficient and reliable solution for managing attendance through facial recognition technology.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Facial Recognition**: Uses DeepFace, FaceNet, and MTCNN for accurate face detection and recognition.
- **Data Augmentation**: Implements augmentation techniques to enhance the robustness of the model.
- **Real-Time Recognition**: Capable of processing and recognizing faces in real-time.
- **Web-Based Interface**: User-friendly web interface for managing the system.
- **Secure and Scalable**: Ensures privacy and security while being scalable to handle large datasets.
- **Seamless Integration**: Integrates with existing databases for secure and accessible data storage.

## Technologies Used

- **Backend**: Node.js, Express
- **Computer Vision**: Python, DeepFace, FaceNet, MTCNN, OpenCV
- **Database**: MySQL
- **Frontend**: HTML, CSS (Bootstrap)
- **Other Libraries**: NumPy, pickle, datetime

## Installation

### Prerequisites

- Node.js and npm
- Python 3.7+
- MySQL
- Required Python packages (listed in `requirements.txt`)

### Steps

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/attendance-system.git
   cd attendance-system
   ```

2. **Install Backend Dependencies**

   ```sh
   cd backend
   npm install
   ```

3. **Install Computer Vision Dependencies**

   ```sh
   cd ../computervision/last_for_deploy
   pip install -r requirements.txt
   ```

4. **Configure Database**

   Set up a MySQL database and import the schema from `database/db.sql`.

5. **Run the Backend**

   ```sh
   cd backend
   npm start
   ```

6. **Run the Computer Vision Server**

   ```sh
   cd ../computervision/last_for_deploy
   python app.py
   ```

7. **Access the Web Interface**

   Open your browser and go to `http://127.0.0.1:5000/`.

## Usage

### Upload Student Images

1. Navigate to the "Upload Student Images" section.
2. Select an image file and enter the student ID.
3. Click "Upload" to save the image to the server.

### Train the Model

1. Navigate to the "Train Images" section.
2. Configure augmentation and the number of samples.
3. Click "Train" to start the training process.

### Start Recognition

1. Navigate to the "Start Recognition" section.
2. Enter the semester ID, course ID, lecture ID, and status.
3. Click "Start Recognition" to begin the real-time face recognition process.

## Project Structure

```plaintext
Attendance System/
├── backend/
│   ├── controllers/
│   │   ├── allotmentController.js
│   │   ├── attendanceController.js
│   │   ├── courseController.js
│   │   ├── lectureController.js
│   │   ├── registrationController.js
│   │   ├── semesterController.js
│   │   └── userController.js
│   ├── db/
│   │   ├── dbConnection.js
│   │   └── dbQuery.js
│   ├── middleware/
│   │   ├── authentication.js
│   │   └── authorization.js
│   ├── models/
│   │   ├── allotment.js
│   │   ├── attendance.js
│   │   ├── course.js
│   │   ├── lecture.js
│   │   ├── professor.js
│   │   ├── registration.js
│   │   ├── semester.js
│   │   ├── student.js
│   │   └── user.js
│   ├── routes/
│   │   ├── allotmentRouter.js
│   │   ├── attendanceRouter.js
│   │   ├── courseRouter.js
│   │   ├── filelistRouter.txt
│   │   ├── lectureRouter.js
│   │   ├── professorRouter.js
│   │   ├── registrationRouter.js
│   │   ├── semesterRouter.js
│   │   ├── studentRouter.js
│   │   └── userRouter.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── computervision/
│   └── last_for_deploy/
│       ├── app.py
│       ├── db/
│       │   ├── 1/
│       │   │   └── 1.jpg
│       │   ├── 2/
│       │   │   └── 2.jpg
│       │   └── 3/
│       │       └── 3.jpg
│       ├── imports.py
│       ├── known_encodings.pkl
│       ├── recognition-class-Copy2.ipynb
│       ├── recognize.py
│       └── train.py
├── database/
│   ├── db.sql
│   └── export
└── frontend/
    ├── package.json
    └── package-lock.json
```

## Contributing

We welcome contributions from the community. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


## Acknowledgements

- The developers of DeepFace, FaceNet, and MTCNN for their powerful facial recognition tools.
- The Node.js and Flask communities for their comprehensive frameworks.
- All contributors who helped in making this project possible.
- Main collaborators "Ali Hamza & Bedo Hazem & Ehab Youssef & Mahmoud Ragab & Youssef Swilam"

---

Feel free to reach out if you have any questions or suggestions. Your feedback is valuable to us!

---

### Contact

- **Email**: eyadamen588@gmail.com
- **GitHub**: [Eyad Elfar](https://github.com/eyadelfar)
