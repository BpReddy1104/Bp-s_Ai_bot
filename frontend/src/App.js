import React, { useState } from "react";
import "./App.css";
import ChatBubble from "./ChatBubble";

function App() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const sendPrompt = async () => {
    if (!prompt.trim()) return;

    const userMessage = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");

    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    const botMessage = { role: "bot", content: data.response };
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendPrompt();
  };

  return (
    <div className="app-container">
      <div className="chat-window">
        <div className="chat-header">Pro Stack Academy! 🤖</div>
        <div className="messages">
          {messages.map((msg, index) => (
            <ChatBubble key={index} role={msg.role} content={msg.content} />
          ))}
        </div>
        <div className="input-area-inside">
          <input
            type="text"
            placeholder="Type your message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendPrompt}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
