import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoWrapper}>
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.footerLogo}>
                <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30Z" fill="var(--white)" />
                <path d="M20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12ZM20 24C17.7909 24 16 22.2091 16 20C16 17.7909 17.7909 16 20 16C22.2091 16 24 17.7909 24 20C24 22.2091 22.2091 24 20 24Z" fill="var(--secondary)" />
              </svg>
              <h2 className={styles.logoText}>SmileCare<span>.</span></h2>
            </div>
            <p className={styles.tagline}>
              Elite Dental Excellence <br />
              BKC, Mumbai
            </p>
            <p className={styles.description}>
              Dedicated to providing the most advanced, comfortable, and personalized dental care in the heart of Mumbai.
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
            <p>12th Floor, Elite Tower, BKC</p>
            <p>Mumbai, 400051</p>
            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p className={styles.phone}>+91 22 5550 1234</p>
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
