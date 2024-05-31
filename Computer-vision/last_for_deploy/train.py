from imports import *
import numpy as np

class Trainer:
    def __init__(self, augment=False, save_augments=False, n_samples=2):
        self.augment = augment
        self.save_augments = save_augments
        self.n_samples = n_samples

    def load_encodings(self):
        if os.path.exists('known_encodings.pkl'):
            with open('known_encodings.pkl', 'rb') as f:
                self.results = pickle.load(f)
                self.known_encodings = [result[1] for result in self.results]
                self.file_paths = [result[0] for result in self.results]
        else:
            self.results = []
            self.known_encodings = []
            self.file_paths = []

    def augment_image(self, img):
        seq = iaa.Sequential([
            iaa.Affine(rotate=(-15, 15)),  # Random rotation
            iaa.Fliplr(0.5),  # Horizontal flip
            iaa.MultiplyBrightness((0.4, 1.5)),  # Random brightness
            iaa.GammaContrast((0.5, 1.5)),  # Gamma contrast
            iaa.Affine(scale={"x": (0.9, 1.1), "y": (0.9, 1.1)}),  # Random scaling
            iaa.Affine(shear=(-7, 7))  # Random shear
        ])
        if self.augment:
            augmented_img = seq.augment_image(img)
            return augmented_img
        else:
            return img

    def process_folder(self, student_folder):
        student_id = os.path.basename(student_folder)
        image_files = [os.path.join(student_folder, file) for file in os.listdir(student_folder) if file.lower().endswith(('.png', '.jpg', '.jpeg'))]
        encodings = []
        for img_path in image_files:
            img = cv2.imread(img_path)
            if self.augment:
                augmented_images = [img]  # Include original image
                for _ in range(self.n_samples):  # Generate additional samples
                    augmented_images.append(self.augment_image(img))
            else:
                augmented_images = [img]

            for idx, augmented_img in enumerate(augmented_images):
                encoding = DeepFace.represent(augmented_img, model_name='Facenet', enforce_detection=False)
                if encoding:
                    encodings.append((img_path, encoding[0]['embedding']))
                    if self.save_augments and self.augment:  # Save augmented images if enabled
                        filename = os.path.splitext(os.path.basename(img_path))[0]
                        augmented_filename = f"augmented_{filename}_{idx}.jpg"
                        cv2.imwrite(os.path.join(student_folder, augmented_filename), augmented_img)

        return encodings

    def train(self, db_folder='db'):
        student_folders = [os.path.join(db_folder, folder) for folder in os.listdir(db_folder) if os.path.isdir(os.path.join(db_folder, folder))]

        self.results = []
        for student_folder in student_folders:
            self.results.extend(self.process_folder(student_folder))

        # Save computed embeddings and corresponding file paths
        with open('known_encodings.pkl', 'wb') as f:
            pickle.dump(self.results, f)

        self.load_encodings()
        return {"status": "success", "message": "Training completed"}
