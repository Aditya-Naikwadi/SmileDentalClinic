"use client";

import { useState } from "react";
import styles from "./Intake.module.css";
import ScrollReveal from "../ScrollReveal";

const steps = ["Personal Info", "Medical History", "Consent"];

const Intake = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className={styles.intake}>
        <div className="container">
          <ScrollReveal>
            <div className={`${styles.success} glass-effect`}>
              <div className={styles.successIcon}>✓</div>
              <h3>Form Submitted Successfully!</h3>
              <p>Thank you for choosing SmileCare Dental. Our team will review your information shortly.</p>
              <button onClick={() => setSubmitted(false)} className={styles.submitBtn}>New Form</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="intake" className={styles.intake}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <h2 className={styles.title}>Digital Patient Intake</h2>
          <p className={styles.subtitle}>
            Save time at your first visit. Fill out your details securely online.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <form className={`${styles.form} glass-effect`} onSubmit={handleSubmit}>
            <div className={styles.stepper}>
              {steps.map((s, i) => (
                <div key={i} className={`${styles.step} ${i <= step ? styles.active : ""}`}>
                  <div className={styles.circle}>{i + 1}</div>
                  <span className={styles.stepName}>{s}</span>
                </div>
              ))}
            </div>

            <div className={styles.content}>
              {step === 0 && (
                <div className={styles.fields}>
                  <div className={styles.fieldGroup}>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required className={styles.input} />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label>Date of Birth</label>
                    <input type="date" required className={styles.input} aria-label="Date of Birth" />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required className={styles.input} />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className={styles.fields}>
                  <div className={styles.fieldGroup}>
                    <label>Any known allergies?</label>
                    <textarea placeholder="List any allergies..." className={styles.textarea}></textarea>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label>Current Medications</label>
                    <textarea placeholder="List current medications..." className={styles.textarea}></textarea>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label>Last Dental Visit</label>
                    <input type="text" placeholder="e.g. March 2024" className={styles.input} aria-label="Last Dental Visit" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className={styles.consent}>
                  <h3>Terms and Conditions</h3>
                  <div className={styles.termsBox}>
                    <p>I hereby consent to dental treatment and agree to the privacy policy regarding my health data...</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <label className={styles.checkbox}>
                    <input type="checkbox" required />
                    <span>I agree to the terms and data processing policy.</span>
                  </label>
                </div>
              )}
            </div>

            <div className={styles.actions}>
              {step > 0 && <button type="button" onClick={() => setStep(step - 1)} className={styles.backBtn}>Back</button>}
              <button type="submit" className={styles.submitBtn}>
                {step === steps.length - 1 ? "Submit Details" : "Next Step"}
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Intake;
