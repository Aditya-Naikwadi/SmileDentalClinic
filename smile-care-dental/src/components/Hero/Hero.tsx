"use client";

import Link from "next/link";
import styles from "./Hero.module.css";
import ScrollReveal from "../ScrollReveal";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.glow} delay-100`}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <ScrollReveal>
              <span className={styles.badge}>Award Winning Practice 2024</span>
              <h1 className={styles.title}>
                Luxury Dental Care <br />
                <span>For Your Best Smile</span>
              </h1>
              <p className={styles.description}>
                Redefining dental excellence in India. Discover a sanctuary of oral wellness where cutting-edge technology meets world-class hospitality.
              </p>
              <div className={styles.actions}>
                <Link href="#booking" className={styles.primaryBtn}>
                  Book Consultation
                </Link>
                <Link href="#services" className={styles.secondaryBtn}>
                  Explore Services
                </Link>
              </div>

              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15k+</span>
                  <span className={styles.statLabel}>Happy Smiles</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>25+</span>
                  <span className={styles.statLabel}>Specialists</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15y+</span>
                  <span className={styles.statLabel}>Experience</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300} className={styles.visual}>
            <div className={styles.imageWrapper}>
              <img 
                src="/hero.png" 
                alt="Luxury Dental Clinic" 
                className={styles.heroImage} 
              />
              <div className={`${styles.floatingCard} glass-effect`}>
                <div className={styles.cardHeader}>
                  <div className={styles.icon}>⭐</div>
                  <div>
                    <h4>4.9/5 Rating</h4>
                    <p>Google Reviews</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.floatingCard2} glass-effect`}>
                <div className={styles.cardHeader}>
                  <div className={styles.icon}>🛡️</div>
                  <div>
                    <h4>Safe & Sterile</h4>
                    <p>US-FDA Certified</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bgGlow}></div>
          </ScrollReveal>
        </div>
    </section>
  );
};

export default Hero;
