import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} glass-effect`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.smile}>Smile</span>
            <span className={styles.care}>Care</span>
            <span className={styles.dental}>Dental</span>
          </Link>
        </div>
        
        <ul className={styles.navLinks}>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#doctors">Doctors</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
          <li><Link href="#pricing">Pricing</Link></li>
          <li><Link href="#faq">FAQ</Link></li>
        </ul>

        <div className={styles.actions}>
          <Link href="#booking" className={styles.bookingBtn}>
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
