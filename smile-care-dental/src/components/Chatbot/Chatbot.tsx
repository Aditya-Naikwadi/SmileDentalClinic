"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Chatbot.module.css";

const AI_REPLY = "I'm your SmileCare AI assistant. How can I help you today? I can assist with booking, service info, or general dental advice.";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "ai", text: AI_REPLY }]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate AI thinking
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "ai", text: "That sounds like a great question. Let me check our availability for you or provide more details on our personalized treatments!" }]);
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      {isOpen ? (
        <div className={`${styles.chatWindow} glass-effect`}>
          <div className={styles.header}>
            <h3>SmileCare AI</h3>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>×</button>
          </div>
          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
                <div className={styles.bubble}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className={styles.inputArea} onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.sendBtn}>➤</button>
          </form>
        </div>
      ) : (
        <button className={`${styles.launcher} glass-effect`} onClick={() => setIsOpen(true)}>
          <span className={styles.icon}>💬</span>
          <span className={styles.badge}>AI</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
