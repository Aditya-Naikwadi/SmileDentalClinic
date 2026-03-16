"use client";

import { useState } from "react";
import styles from "./Booking.module.css";
import ScrollReveal from "../ScrollReveal";

const steps = ["Select Service", "Choose Date", "Your Details"];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <section id="booking" className={styles.booking}>
      <div className="container">
        <ScrollReveal>
          <div className={`${styles.wrapper} glass-effect`}>
            <div className={styles.sidebar}>
              <div>
                <h2>Book Your Visit</h2>
                <p>Start your journey to a perfect smile today.</p>
              </div>
              <div className={styles.steps}>
                {steps.map((s, i) => (
                  <div key={i} className={`${styles.step} ${step === i + 1 ? styles.stepActive : ""}`}>
                    <div className={styles.stepNumber}>{i + 1}</div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.formContent}>
              {step === 1 && (
                <div className={styles.formInner}>
                  <h3>What can we help you with?</h3>
                  <div className={styles.options}>
                    {["General Checkup", "Teeth Whitening", "Orthodontics", "Dental Implants"].map((s) => (
                      <button 
                        key={s} 
                        className={`${styles.option} ${formData.service === s ? styles.optionActive : ""}`}
                        onClick={() => {
                          setFormData({...formData, service: s});
                          nextStep();
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className={styles.formInner}>
                  <h3>Pick a Date & Time</h3>
                  <div className={styles.inputs}>
                    <input 
                      type="date" 
                      className={styles.input}
                      aria-label="Select Appointment Date"
                      title="Select Appointment Date"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                    <div className={styles.timeGrid}>
                      {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map((t) => (
                        <button 
                          key={t}
                          className={`${styles.timeBtn} ${formData.time === t ? styles.timeActive : ""}`}
                          onClick={() => setFormData({...formData, time: t})}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={styles.footer}>
                    <button onClick={prevStep} className={styles.backBtn}>Back</button>
                    <button onClick={nextStep} className={styles.nextBtn} disabled={!formData.date || !formData.time}>Next</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className={styles.formInner}>
                  <h3>Almost there!</h3>
                  <div className={styles.inputs}>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className={styles.input}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className={styles.input}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className={styles.footer}>
                    <button onClick={prevStep} className={styles.backBtn}>Back</button>
                    <button className={styles.submitBtn} onClick={() => alert("Appointment Requested!")}>Confirm Booking</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Booking;
