from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import engine, get_db
import models.user as user_model
import models.exam as exam_model
import models.student as student_model
import models.exam_student as exam_student_model
import models.cheating_log as cheating_log_model
import models.result as result_model
from crud import create_user, authenticate_user
from schemas import UserCreate, UserLogin, UserResponse
from routes import admin
from routes import student



app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables
from database import Base
Base.metadata.create_all(bind=engine)

user_model.Base.metadata.create_all(bind=engine)
student_model.Base.metadata.create_all(bind=engine)
exam_model.Base.metadata.create_all(bind=engine)

# Register
@app.post("/auth/register", response_model=UserResponse)
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):
    existing = db.query(user_model.User).filter(
        user_model.User.email == user.email
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    return create_user(
        db,
        user.name,
        user.email,
        user.phone,
        user.password,
        user.role
    )

# Login
@app.post("/auth/login", response_model=UserResponse)
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):
    db_user = authenticate_user(db, user.email, user.password)

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if db_user.role != user.role:
        raise HTTPException(
            status_code=403,
            detail="Role mismatch"
        )

    return db_user

# Admin routes
app.include_router(admin.router)

# Student routes
app.include_router(student.router)