from fastapi import APIRouter
from fastapi.params import Body
from fastapi.responses import JSONResponse
from models.auth import NewUser, UserLogin

router = APIRouter(prefix = "/api/auth")

@router.post('')
async def user_login(body: UserLogin):
    content = {"ok": True, "msg": 'user_login', **body.model_dump()}
    return JSONResponse(content=content, status_code=200)

@router.post('/new')
async def create_new_user(body: NewUser):
    content = {"ok": True, "msg": 'user_login', **body.model_dump()}
    return JSONResponse(content=content, status_code=201)

@router.get('/refresh')
async def refresh_token():
    return {"ok": True, "msg": 'refresh_token'}
