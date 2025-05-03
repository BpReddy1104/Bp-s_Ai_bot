# 🤖 BP's Dev AI Project

A full-stack chatbot application built using **FastAPI** for the backend and **React** for the frontend. This project provides an interactive UI where users can chat with an AI-powered assistant.

---

---

## 🚀 Features

- 💬 Chat interface styled like ChatGPT
- ⚡ Real-time prompt-response interaction
- 🔌 REST API with FastAPI
- 🎨 Styled React frontend with chatbot UI

---

## 🧠 Tech Stack

| Layer      | Technology       |
|------------|------------------|
| Frontend   | React, CSS       |
| Backend    | FastAPI, Python  |
| Protocol   | REST (JSON)      |
| Styling    | Custom CSS       |

---

## ⚙️ Setup Instructions

1. Clone the Repository


git clone https://github.com/your-username/bps-dev-ai-project.git
cd bps-dev-ai-project


2. Backend Setup (FastAPI)

cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

3. Frontend Setup (React)
cd frontend
npm install
npm start
The frontend will run at: http://localhost:3000

📬 API Endpoint
POST /chat

Request Body:
json
{
  "prompt": "Your message here"
}

Response:
{
  "response": "AI's reply"
}

Backend (FastAPI) + Frontend (React) chatbot project.

✨ Author
M Bhanuprakash Reddy (BP)
📧 bpreddy0011@gmail.com




   


 





