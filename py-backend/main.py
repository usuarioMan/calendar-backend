import uvicorn
import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from routes.auth import router as auth_router

public_path = Path(__file__).parent.parent / 'public'

api = FastAPI()

@api.get("/pote")
async def root():
    return {"message": "Hello World"}


api.include_router(auth_router)
api.mount("/", StaticFiles(directory=public_path, html=True), name="static")


if __name__ == "__main__":
    load_dotenv()
    host = os.environ.get("HOST")
    port = int(os.environ.get("PORT"))
    uvicorn.run("main:api", host=host, port=port, log_level="info", reload=True)
