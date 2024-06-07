# Face Recognition Attendance System

This project is a comprehensive face recognition attendance system that leverages advanced deep learning models, data augmentation techniques, and a user-friendly web interface to provide a robust and efficient solution for tracking attendance in various contexts, such as educational institutions and corporate environments.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features

- **Advanced Facial Recognition**: Utilizes DeepFace, FaceNet, and MTCNN for accurate face detection and recognition.
- **Data Augmentation**: Implements various augmentation techniques to improve model robustness.
- **Real-Time Recognition**: Processes and recognizes faces in real-time with immediate feedback.
- **Web-Based Interface**: Provides an intuitive and user-friendly web interface for easy interaction.
- **Secure Data Handling**: Ensures the privacy and security of user data.
- **Scalability**: Designed to handle large datasets and a growing number of users.
- **Seamless Database Integration**: Integrates with existing databases for secure and accessible data storage.

## Technologies Used

- **Deep Learning Models**: DeepFace, FaceNet, MTCNN
- **Data Augmentation**: imgaug library
- **Backend**: Flask
- **Database**: MySQL
- **Frontend**: HTML, CSS (Bootstrap)
- **Programming Languages**: Python, HTML, CSS
- **Other Libraries**: OpenCV, NumPy, pickle, datetime

## Installation

### Prerequisites

- Python 3.7+
- MySQL
- Required Python packages (listed in `requirements.txt`)

### Steps

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/face-recognition-attendance-system.git
   cd face-recognition-attendance-system
   ```

2. **Install Dependencies**

   ```sh
   pip install -r requirements.txt
   ```

3. **Configure Database**

   Set up a MySQL database and update the connection details in `app.py`.

4. **Run the Application**

   ```sh
   python app.py
   ```

5. **Access the Web Interface**

   Open your browser and go to `http://127.0.0.1:5000/`.

## Usage

### Upload Student Images

1. Go to the "Upload Student Images" section.
2. Select an image file and enter the student ID.
3. Click "Upload" to save the image to the server.

### Train the Model

1. Go to the "Train Images" section.
2. Configure augmentation and the number of samples.
3. Click "Train" to start the training process.

### Start Recognition

1. Go to the "Start Recognition" section.
2. Enter the semester ID, course ID, lecture ID, and status.
3. Click "Start Recognition" to begin the real-time face recognition process.

## Project Structure

```plaintext
face-recognition-attendance-system/
│
├── app.py                  # Main Flask application
├── train.py                # Training module
├── recognize.py            # Recognition module
├── templates/
│   └── index.html          # HTML template for the web interface
├── static/
│   └── styles.css          # CSS for the web interface
├── db/                     # Directory to store uploaded images
├── requirements.txt        # List of Python dependencies
└── README.md               # Project documentation
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
- The Flask community for their comprehensive web framework.

---

Feel free to reach out if you have any questions or suggestions. Your feedback is valuable to us!

---

### Contact

- **Email**: eyadamen588@gmail.com
- **GitHub**: [EyadELfar](https://github.com/eyadelfar)
