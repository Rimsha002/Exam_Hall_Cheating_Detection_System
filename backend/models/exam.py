from sqlalchemy import Column, Integer, String, Date, Time
from database import Base

class Exam(Base):
    __tablename__ = "exams"

    id = Column(Integer, primary_key=True, index=True)
    exam_name = Column(String, nullable=False)
    exam_code = Column(String, unique=True, nullable=False)
    description = Column(String)

    exam_date = Column(Date, nullable=False)
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)
    duration = Column(Integer)

    room = Column(String)
    max_students = Column(Integer)

    created_by = Column(Integer) 
