"use client";

import styles from "./Contact.module.css";
import ScrollReveal from "../ScrollReveal";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h2 className={styles.title}>Get in Touch</h2>
              <p className={styles.subtitle}>
                We&apos;re here to answer any questions you may have about our 
                services or your upcoming visit.
              </p>
              
              <div className={styles.details}>
                <div className={styles.item}>
                  <div className={styles.icon}>📞</div>
                  <div className={styles.text}>
                    <h4>Phone</h4>
                    <p>+91 22 5550 1234</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}>✉️</div>
                  <div className={styles.text}>
                    <h4>Email</h4>
                    <p>hello@smilecare.com</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h4>Visit Our Clinic</h4>
                  <p>12th Floor, Elite Tower, BKC, Mumbai 400051</p>
                </div>
              </div>
              </div>
            </div>

            <ScrollReveal delay={200} className={styles.map}>
              <div className={`${styles.mapPlaceholder} glass-effect`}>
                <p>Interactive Map Integration</p>
                <span>(Load Google Maps)</span>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
