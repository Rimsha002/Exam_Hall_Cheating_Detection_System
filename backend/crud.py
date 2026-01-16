from sqlalchemy.orm import Session
from models.user import User
from passlib.context import CryptContext

# password context (NO bcrypt)
pwd_context = CryptContext(
    schemes=["pbkdf2_sha256"],
    deprecated="auto"
)

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(password: str, hashed: str):
    return pwd_context.verify(password, hashed)



def create_user(db: Session, name: str, email: str, phone: str, password: str, role: str):
    hashed_pw = hash_password(password)
    user = User(
        name=name,
        email=email,
        phone=phone,     # ✅ NEW
        password=hashed_pw,
        role=role
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def authenticate_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()
    if user and verify_password(password, user.password):
        return user
    return None
