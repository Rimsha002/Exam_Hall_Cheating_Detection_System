from typing import Optional
from pydantic import BaseModel
from datetime import date, time

class UserCreate(BaseModel):
    name: str
    email: str
    phone: str | None = None 
    password: str
    role: str  # admin / invigilator

class UserLogin(BaseModel):
    email: str
    password: str
    role: str  # "admin" or "invigilator"

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: str | None = None
    role: str

    class Config:
        orm_mode = True


class ExamCreate(BaseModel):
    exam_name: str
    exam_code: str
    description: str | None = None
    exam_date: date
    start_time: time
    end_time: time
    duration: int
    room: str
    max_students: int
    
    
class StudentCreate(BaseModel):
    student_id: str
    name: str
    email: str

class StudentUpdate(BaseModel):
    name: Optional[str]
    email: Optional[str]

class StudentResponse(BaseModel):
    id: int
    student_id: str
    name: str
    email: str
    enrolled_exams: int
    last_exam: Optional[str]

    class Config:
        from_attributes = True
