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
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn} aria-label="Close Chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
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
            <button type="submit" className={styles.sendBtn} aria-label="Send Message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      ) : (
        <button className={`${styles.launcher} glass-effect`} onClick={() => setIsOpen(true)} aria-label="Open AI Assistant">
          <span className={styles.icon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </span>
          <span className={styles.badge}>AI</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
