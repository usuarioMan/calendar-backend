from fastapi import APIRouter
router = APIRouter(prefix = "/api/auth")

@router.post('')
async def user_login():
    return {"msg": 'user_login'}

@router.post('/new')
async def create_new_user():
    return {"msg": 'create_new_user'}

@router.get('/refresh')
async def refresh_token():
    return {"msg": 'refresh_token'}
