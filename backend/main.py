
from fastapi import FastAPI
from pydantic import BaseModel
from langchain_groq import ChatGroq
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SYSTEM_PROMPT = """
Whenever the user says anything, respond in the following way:
1. Give correct answer.
Style:
• More formal .
"""

class ChatRequest(BaseModel):
    prompt: str

@app.get("/")
def root():
    return {
        "message": "BP's Dev API is running! Use POST /chat with JSON body { 'prompt': 'your question' }"
    }

@app.post("/chat")
async def chat(request: ChatRequest):
    llm = ChatGroq(api_key=os.getenv("GROQ_API_KEY"), model="llama-3.3-70b-versatile")
    full_prompt = f"{SYSTEM_PROMPT}\nUser: {request.prompt}"
    response = llm.invoke(full_prompt)
    return {"response": response.content}
