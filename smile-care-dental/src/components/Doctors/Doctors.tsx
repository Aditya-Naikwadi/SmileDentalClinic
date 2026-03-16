"use client";

import Image from "next/image";
import styles from "./Doctors.module.css";
import ScrollReveal from "../ScrollReveal";

const doctors = [
  {
    name: "Dr. Alexander Knight",
    specialty: "Senior Orthodontist",
    image: "/dentist_male_1.png",
    bio: "With over 15 years of experience in reconstructive dentistry and modern orthodontics."
  },
  {
    name: "Dr. Sarah Chen",
    specialty: "Cosmetic Specialist",
    image: "/dentist_female_1.png",
    bio: "Expert in aesthetic transformations and advanced porcelain veneer applications."
  },
  {
    name: "Dr. Michael Ross",
    specialty: "Pediatric Dentist",
    image: "/dentist_male_2.png",
    bio: "Dedicated to making dental visits a fun and educational experience for children."
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className={styles.doctors}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <h2 className={styles.title}>Meet Our Specialists</h2>
          <p className={styles.subtitle}>
            A team of world-class professionals dedicated to your clinical excellence 
            and emotional comfort.
          </p>
        </ScrollReveal>
        
        <div className={styles.grid}>
          {doctors.map((doctor, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={doctor.image} 
                    alt={doctor.name} 
                    fill 
                    className={doctor.name === "Dr. Alexander Knight" ? styles.knightImage : ""}
                  />
                  <div className={styles.overlay}>
                    <p className={styles.bio}>{doctor.bio}</p>
                  </div>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{doctor.name}</h3>
                  <p className={styles.specialty}>{doctor.specialty}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
