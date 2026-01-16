from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    phone: str | None = None 
    password: str
    role: str  # admin / invigilator

class UserLogin(BaseModel):
    email: str
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: str | None = None
    role: str

    class Config:
        orm_mode = True
