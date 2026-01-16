from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models.user as user_model
from crud import create_user, authenticate_user
from schemas import UserCreate, UserLogin, UserResponse

# FastAPI app
app = FastAPI()
origins = [
    "http://localhost:3000",  # React dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # allow your frontend
    allow_credentials=True,
    allow_methods=["*"],        # GET, POST, OPTIONS etc
    allow_headers=["*"],        # Content-Type etc
)

# Tables create
user_model.Base.metadata.create_all(bind=engine)

# DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Register Endpoint
@app.post("/auth/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(user_model.User).filter(user_model.User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    return create_user(db, user.name, user.email, user.phone, user.password, user.role)

# Login Endpoint
@app.post("/auth/login", response_model=UserResponse)
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = authenticate_user(db, user.email, user.password)
    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return db_user
