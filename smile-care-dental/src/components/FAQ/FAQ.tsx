"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend a routine check-up and cleaning every 6 months to maintain optimal oral health and catch potential issues early."
  },
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans. Our team can help you verify your coverage before your appointment."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "If you have a dental emergency, call our office immediately. We offer 24/7 emergency support and will fit you in as soon as possible."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening is completely safe when performed under the supervision of a dentist. We use high-quality, controlled whitening agents."
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Everything you need to know about our services and policies.</p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`${styles.item} ${openIdx === idx ? styles.open : ""}`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className={styles.question}>
                <span>{faq.question}</span>
                <span className={styles.icon}>{openIdx === idx ? "−" : "+"}</span>
              </div>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
