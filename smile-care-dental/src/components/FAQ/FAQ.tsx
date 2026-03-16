"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import ScrollReveal from "../ScrollReveal";

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
        <ScrollReveal className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Everything you need to know about our services and policies.</p>
        </ScrollReveal>

        <div className={styles.list}>
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div 
                className={`${styles.item} ${openIdx === idx ? styles.open : ""} glass-effect`}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <div className={styles.question}>
                  <span>{faq.question}</span>
                  <div className={styles.iconWrapper}>
                    <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
