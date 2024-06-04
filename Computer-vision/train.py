from imports import *


import logging
class Trainer:
    def __init__(self, db_folder='F:\\GP\\Repo\\Attendance-System\\Computer-vision\\last_for_deploy\\db'):
        self.target_image_count = 25
        self.db_folder = db_folder
        self.load_encodings()

    def load_encodings(self):
        if os.path.exists('F:\\GP\Repo\\Attendance-System\\Computer-vision\\last_for_deploy\\known_encodings.pkl'):
            with open('F:\\GP\Repo\\Attendance-System\\Computer-vision\\last_for_deploy\\known_encodings.pkl', 'rb') as f:
                self.results = pickle.load(f)
                self.known_encodings = [result[1] for result in self.results]
                self.file_paths = [result[0] for result in self.results]
        else:
            self.results = []
            self.known_encodings = []
            self.file_paths = []

    def augment_image(self, img):
        if img is None:
            raise ValueError("The image read is None, check the file path.")
        seq = iaa.Sequential([
            iaa.Affine(rotate=(-15, 15)),  # Random rotation
            iaa.Fliplr(0.5),  # Horizontal flip
            iaa.MultiplyBrightness((0.4, 1.5)),  # Random brightness
            iaa.GammaContrast((0.5, 1.5)),  # Gamma contrast
            iaa.Affine(scale={"x": (0.9, 1.1), "y": (0.9, 1.1)}),  # Random scaling
            iaa.Affine(shear=(-7, 7))  # Random shear
        ])
        augmented_img = seq(image=img)
        return augmented_img

    def process_folder(self, student_folder):
        image_files = [os.path.join(student_folder, file) for file in os.listdir(student_folder) if file.lower().endswith(('.png', '.jpg', '.jpeg'))]
        encodings = []
        images = []
        
        for img_path in image_files:
            img = cv2.imread(img_path)
            if img is None:
                print(f"Warning: Failed to read image at {img_path}")
                continue
            images.append((img_path, img))
            if len(images) >= self.target_image_count:
                break

        # Process original images
        for img_path, img in images:
            encoding = DeepFace.represent(img, model_name='Facenet', enforce_detection=False)
            if encoding:
                encodings.append((img_path, encoding[0]['embedding']))
            if len(encodings) >= self.target_image_count:
                return encodings

                # Augment if necessary
        while len(encodings) < self.target_image_count:
            img_path, img = random.choice(images)
            augmented_img = self.augment_image(img)
            augmented_img_path = os.path.join(student_folder, f"augmented_{len(encodings)}.jpg")
            cv2.imwrite(augmented_img_path, augmented_img)
            augmented_encoding = DeepFace.represent(augmented_img, model_name='Facenet', enforce_detection=False)
            if augmented_encoding:
                encodings.append((augmented_img_path, augmented_encoding[0]['embedding']))

        return encodings[:self.target_image_count]

    def train(self):
        student_folders = [os.path.join(self.db_folder, folder) for folder in os.listdir(self.db_folder) if os.path.isdir(os.path.join(self.db_folder, folder))]

        self.results = []
        for student_folder in student_folders:
            self.results.extend(self.process_folder(student_folder))

        # Save computed embeddings and corresponding file paths
        with open('F:\\GP\Repo\\Attendance-System\\Computer-vision\\last_for_deploy\\known_encodings.pkl', 'wb') as f:
            pickle.dump(self.results, f)

        self.load_encodings()
        return {"status": "success", "message": "Training completed"}
