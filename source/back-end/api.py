from typing import Union
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi import FastAPI

from RAG import RAG, format_sources

import nest_asyncio
nest_asyncio.apply()

origins = ["*"]

app = RAG()

app_api = FastAPI()
app_api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app_api.get("/")
def read_root():
    return "API RAG"

@app_api.get("/chat")
async def chat(message: str):
    if message:
        print(message)
        answer, sources = app.response(message)
        sources = [
            [node.metadata['file_name'], node.text]
            for node in sources
        ]
        
        docs, context = format_sources(sources)
        
        return JSONResponse(content=jsonable_encoder(
            {"message": answer.text, "docs": docs, "context": context})
            )
    return None
