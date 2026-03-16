import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={styles.badge}>Next Generation Dental Care</div>
          <h1 className={styles.title}>
            Experience the <span className={styles.highlight}>Future of Dentistry</span> Today
          </h1>
          <p className={styles.subtitle}>
            Premium care, cutting-edge technology, and a soothing environment 
            designed to give you the perfect smile you&apos;ve always wanted.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="#booking" className={styles.primaryBtn}>
              Schedule Appointment
            </Link>
            <Link href="#services" className={styles.secondaryBtn}>
              Explore Services
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15k+</span>
              <span className={styles.statLabel}>Happy Patients</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Expert Doctors</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12</span>
              <span className={styles.statLabel}>Awards Won</span>
            </div>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.heroImage}>
            <Image 
              src="/hero.png" 
              alt="SmileCare Dental Modern Clinic" 
              width={600} 
              height={700} 
              priority
              className={styles.mainImg}
            />
            <div className={`${styles.floatingCard} glass-effect`}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>✨</div>
                <div>
                  <h4>Modern Tech</h4>
                  <p>AI-Driven Diagnosis</p>
                </div>
              </div>
            </div>
            <div className={`${styles.floatingCard2} glass-effect`}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>🏥</div>
                <div>
                  <h4>Full Care</h4>
                  <p>24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bgGlow}></div>
    </section>
  );
};

export default Hero;
