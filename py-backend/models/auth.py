from pydantic import BaseModel, EmailStr, field_validator

class UserLogin(BaseModel):
    email: EmailStr
    password: str
    
    @field_validator('password')
    @classmethod
    def validate_password(cls, value:str)-> str:
        password: str = value.strip()
        assert len(password) >= 6, 'password lenght must be at least 6 characters long.'
        return value


class NewUser(BaseModel):
    name: str
    email: EmailStr
    password: str
    
    @field_validator('password')
    @classmethod
    def validate_password(cls, value:str)-> str:
        password: str = value.strip()
        assert len(password) >= 6, 'password lenght must be at least 6 characters long.'
        return value