from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pathlib import Path

public_path = Path(__file__).parent.parent / 'public'

app = FastAPI()

@app.get("/pote")
async def root():
    return {"message": "Hello World"}

app.mount("/", StaticFiles(directory=public_path, html=True), name="static")