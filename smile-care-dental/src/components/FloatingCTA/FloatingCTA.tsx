import Link from "next/link";
import styles from "./FloatingCTA.module.css";

const FloatingCTA = () => {
  return (
    <div className={styles.ctaWrapper}>
      <Link href="#booking" className={`${styles.cta} glass-effect`}>
        <span className={styles.icon}>📅</span>
        <span className={styles.text}>Book Now</span>
      </Link>
    </div>
  );
};

export default FloatingCTA;
