from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.student import Student
from models.exam import Exam
from models.exam_student import ExamStudent
from schemas import StudentCreate, StudentUpdate, StudentResponse
from fastapi.responses import StreamingResponse
import csv, io

router = APIRouter(tags=["Students"])

# ---------------- ADMIN ONLY (TEMP) ----------------
def admin_only(current_user: str = "admin"):
    if current_user != "admin":
        raise HTTPException(status_code=403, detail="Admin only access")
    return current_user


# ---------------- CREATE STUDENT ----------------
@router.post("/admin/students", response_model=StudentResponse)
def create_student(
    student: StudentCreate,
    db: Session = Depends(get_db),
    current_user=Depends(admin_only)
):
    existing = db.query(Student).filter(
        (Student.student_id == student.student_id) |
        (Student.email == student.email)
    ).first()

    if existing:
        raise HTTPException(status_code=400, detail="Student already exists")

    new_student = Student(**student.dict())
    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return build_student_response(db, new_student)


# ---------------- LIST STUDENTS (PUBLIC) ----------------
@router.get("/students", response_model=list[StudentResponse])
def list_students(db: Session = Depends(get_db)):
    students = db.query(Student).all()
    return [build_student_response(db, s) for s in students]


# ---------------- UPDATE STUDENT ----------------
@router.put("/admin/students/{id}", response_model=StudentResponse)
def update_student(
    id: int,
    updates: StudentUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(admin_only)
):
    student = db.query(Student).get(id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")

    for key, value in updates.dict(exclude_unset=True).items():
        setattr(student, key, value)

    db.commit()
    db.refresh(student)
    return build_student_response(db, student)


# ---------------- DELETE STUDENT ----------------
@router.delete("/admin/students/{id}")
def delete_student(
    id: int,
    db: Session = Depends(get_db),
    current_user=Depends(admin_only)
):
    student = db.query(Student).get(id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")

    db.delete(student)
    db.commit()
    return {"message": "Student deleted successfully"}


# ---------------- EXPORT CSV ----------------
@router.get("/admin/students/export")
def export_students(db: Session = Depends(get_db)):
    students = db.query(Student).all()

    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["student_id", "name", "email"])

    for s in students:
        writer.writerow([s.student_id, s.name, s.email])

    output.seek(0)
    return StreamingResponse(
        output,
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=students.csv"}
    )


# ---------------- HELPER ----------------
def build_student_response(db: Session, student: Student):
    exam_links = db.query(ExamStudent).filter(
        ExamStudent.student_id == student.id
    ).all()

    enrolled_exams = len(exam_links)

    last_exam = None
    if exam_links:
        last_exam_obj = db.query(Exam).get(exam_links[-1].exam_id)
        last_exam = last_exam_obj.exam_name if last_exam_obj else None

    return {
        "id": student.id,
        "student_id": student.student_id,
        "name": student.name,
        "email": student.email,
        "enrolled_exams": enrolled_exams,
        "last_exam": last_exam
    }
