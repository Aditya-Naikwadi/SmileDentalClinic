"use client";

import { useState } from "react";
import styles from "./Booking.module.css";

const steps = ["Select Service", "Choose Date", "Your Details"];

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: ""
  });

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <section id="booking" className={styles.booking}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h2 className={styles.title}>Ready for a Brighter Smile?</h2>
            <p className={styles.subtitle}>
              Book your appointment in less than 2 minutes. Our team will contact 
              you to confirm the details.
            </p>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <span className={styles.bIcon}>✔️</span>
                <span>Instant Confirmation</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.bIcon}>✔️</span>
                <span>Flexible Scheduling</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.bIcon}>✔️</span>
                <span>Top-tier Specialists</span>
              </div>
            </div>
          </div>

          <div className={`${styles.card} glass-effect`}>
            <div className={styles.progress}>
              {steps.map((step, idx) => (
                <div key={idx} className={`${styles.step} ${idx <= currentStep ? styles.active : ""}`}>
                  <div className={styles.stepCircle}>{idx + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className={styles.formContent}>
              {currentStep === 0 && (
                <div className={styles.stepContent}>
                  <h3>What service do you need?</h3>
                  <div className={styles.options}>
                    {["Check-up", "Cleaning", "Orthodontics", "Cosmetic"].map(s => (
                      <button 
                        key={s} 
                        className={`${styles.option} ${formData.service === s ? styles.selected : ""}`}
                        onClick={() => setFormData({...formData, service: s})}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className={styles.stepContent}>
                  <h3>When would you like to visit?</h3>
                  <input 
                    type="date" 
                    className={styles.input}
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    aria-label="Select Date"
                    title="Choose your appointment date"
                  />
                  <div className={styles.times}>
                    {["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"].map(t => (
                      <button 
                        key={t} 
                        className={`${styles.timeSlot} ${formData.time === t ? styles.selected : ""}`}
                        onClick={() => setFormData({...formData, time: t})}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className={styles.stepContent}>
                  <h3>Almost there!</h3>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className={styles.input}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className={styles.input}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className={styles.input}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              )}
            </div>

            <div className={styles.controls}>
              {currentStep > 0 && <button onClick={handleBack} className={styles.backBtn}>Back</button>}
              <button 
                onClick={currentStep === 2 ? () => alert("Sent!") : handleNext} 
                className={styles.nextBtn}
              >
                {currentStep === 2 ? "Confirm Booking" : "Next Step"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
