import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.subtitle}>We&apos;re here to help you achieve your best smile. Visit us or reach out via any channel.</p>
            
            <div className={styles.details}>
              <div className={styles.item}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>123 Dental Street, Medical Plaza, Suite 405</p>
                </div>
              </div>
              <div className={styles.item}>
                <span className={styles.icon}>📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 000-1234</p>
                </div>
              </div>
              <div className={styles.item}>
                <span className={styles.icon}>✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>care@smilecaredental.com</p>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <a href="#" className={styles.whatsapp}>Chat on WhatsApp</a>
            </div>
          </div>

          <div className={styles.map}>
            <div className={styles.mapPlaceholder}>
              <p>Map Placeholder - Medical Plaza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
