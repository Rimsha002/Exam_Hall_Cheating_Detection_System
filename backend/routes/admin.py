from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.exam import Exam
from schemas import ExamCreate

router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)

@router.post("/exams")
def create_exam(
    exam: ExamCreate,
    db: Session = Depends(get_db)
):
    existing = db.query(Exam).filter(
        Exam.exam_code == exam.exam_code
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Exam code already exists"
        )

    new_exam = Exam(**exam.model_dump())
    db.add(new_exam)
    db.commit()
    db.refresh(new_exam)

    return {
        "message": "Exam created successfully",
        "exam_id": new_exam.id
    }
