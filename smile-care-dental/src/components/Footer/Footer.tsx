import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.smile}>Smile</span>
              <span className={styles.care}>Care</span>
              <span className={styles.dental}>Dental</span>
            </div>
            <p className={styles.description}>
              Dedicated to providing the most advanced, comfortable, and personalized dental care in the city.
            </p>
          </div>

          <div className={styles.linksGroup}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#doctors">Meet the Doctors</Link></li>
              <li><Link href="#pricing">Pricing Plans</Link></li>
              <li><Link href="#booking">Book Now</Link></li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h3>Our Services</h3>
            <ul>
              <li><Link href="#cleaning">Basic Cleaning</Link></li>
              <li><Link href="#ortho">Orthodontics</Link></li>
              <li><Link href="#cosmetic">Cosmetic Dentistry</Link></li>
              <li><Link href="#implants">Dental Implants</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Contact Us</h3>
            <p>123 Dental Street, Medical Plaza</p>
            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p className={styles.phone}>+1 (555) 000-1234</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} SmileCare Dental. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
