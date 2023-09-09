from typing import Any
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# CORS.
origins = [
    # Local Lit.
    "http://localhost:8000",
    "https://cuddly-meme-xr9jp4vq42979j-8000.app.github.dev/",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
async def root() -> dict[str, str]:
    return {'message': 'Hello World'}
