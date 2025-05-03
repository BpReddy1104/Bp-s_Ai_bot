import React from "react";
import "./ChatBubble.css";

function ChatBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`bubble-row ${isUser ? "user" : "bot"}`}>
      <div className="bubble">{content}</div>
    </div>
  );
}

export default ChatBubble;
