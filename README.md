# AI-Based Exam Hall Cheating Detection System

## Overview
This project focuses on building a complete data annotation and behaviour classification pipeline for classroom video analysis. The goal is to detect and classify student activities (including cheating behaviours) using AI.

## Problem
Manual monitoring of classroom exams is inefficient and prone to errors. Large-scale video data requires structured and high-quality annotated datasets for training AI models.

## Solution
Developed a pipeline that:
- Detects and tracks students in classroom videos
- Extracts per-student sequences
- Annotates and labels behavioural data
- Prepares structured datasets for training deep learning models

## Tools & Technologies
- Python
- OpenCV
- YOLOv8 (Object Detection & Tracking)
- CVAT (Video & Image Annotation)
- Roboflow (Dataset Management & Annotation)
- NumPy, Pandas
- Google Colab

## Data Annotation Work 
- Annotated video and image datasets using CVAT and Roboflow and sometimes manually too
- Created 5 behaviour classes:
  - cheating_copying
  - cheating_gesture_share
  - cheating_mobile_use
  - cheating_notes
  - normal
- Defined and labeled human keypoints for pose-based analysis
- Maintained annotation consistency across large datasets
- Performed quality assurance and validation of labeled data
- Handled missing/occluded keypoints and edge cases

##  Pipeline
1. Video Input
2. Student Detection (YOLO)
3. Tracking & Cropping
4. Clip Generation
5. Annotation (CVAT / Roboflow / manually)
6. Dataset Preparation
7. Model Training & Evaluation

## Workflow
Classroom Video ⟶
YOLO Detection + Tracking
⟶ Student Cropping
⟶
Frame Sequence Creation
⟶
Clip Formation (32 Frames)
⟶
Preprocessing (Data Annotation/Labeling)
⟶
Deep Learning Model
⟶
Behavior Prediction
⟶
Smoothing
⟶
CSV Logging
⟶
Annotated Video Output

## Key Skills Demonstrated
- Data Annotation (Image & Video)
- Dataset Cleaning & Validation
- Annotation Quality Control (QA)
- Computer Vision Pipeline Development

##  Future Improvements
- Increase dataset size
- Improve annotation automation
- Integrate a real-time detection system


## Conclusion

This project demonstrates how computer vision and deep learning can be applied to automate classroom monitoring. By combining detection, tracking, and temporal modeling, the system provides a scalable solution for identifying suspicious behavior and improving exam integrity.

---

## Author

- Final Year BS IT Student  
- Focus: Computer Vision & AI Systems  

---

## 📌 Note
This project is developed for academic and research purposes.

### 📌 Currently, it is in the building process. So, detailed content and files have not been uploaded yet
