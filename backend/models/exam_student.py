from sqlalchemy import Column, Integer, ForeignKey, DateTime
from database import Base

class ExamStudent(Base):
    __tablename__ = "exam_students"

    id = Column(Integer, primary_key=True, index=True)
    exam_id = Column(Integer, ForeignKey("exams.id"), nullable=False)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False)
    attended_at = Column(DateTime, nullable=True)
