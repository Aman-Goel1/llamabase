from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/create_my_embedder")
async def fetchembedders():
    return {"message": "Hello World"}