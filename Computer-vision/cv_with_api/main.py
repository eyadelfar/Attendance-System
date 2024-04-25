#!/usr/bin/env python
# coding: utf-8

# In[5]:


from fastapi import FastAPI
from pydantic import BaseModel
import cv2
import numpy as np
from Recognition import Recognition
import mysql.connector


# In[6]:


app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Welcome to your FastAPI application!"}
    
db_smp = mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="e@123321xzX",
        port=3306,
        database="attendance")

session_id = 1  # Example session ID
course_id = 1  # Example course ID

# Define a request model for retrain endpoint
class RetrainRequest(BaseModel):
    augment: bool = False
    save_augments: bool = False
    n_samples: int = 2

# Initialize Recognition object
recognition = Recognition(db=db_smp, session_id=session_id, course_id=course_id)  # You need to provide your database connection and session/course IDs

@app.post("/retrain/")
async def retrain(request: RetrainRequest):
    recognition.retrain(augment=request.augment, save_augments=request.save_augments, n_samples=request.n_samples)
    return {"message": "Retraining completed successfully."}

@app.get("/recognize/")
async def recognize(max_images: int = 0, cap_cam: int = 0):
    # Perform face recognition
    recognition.recognize(max_images=max_images, cap_cam=cap_cam)
    return {"message": "Face recognition completed."}


# In[ ]:




