import Image from "next/image";
import styles from "./Doctors.module.css";

const doctors = [
  {
    name: "Dr. James Sterling",
    role: "Cosmetic Dentist",
    image: "/doc1.png",
    rating: 5.0,
    reviews: 124,
    bio: "Excellence in aesthetic smile transformations with over 15 years of experience."
  },
  {
    name: "Dr. Sarah Miller",
    role: "Orthodontist",
    image: "/doc2.png",
    rating: 4.9,
    reviews: 98,
    bio: "Specializing in advanced Invisalign and modern teeth alignment techniques."
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className={styles.doctors}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Experts</h2>
          <p className={styles.subtitle}>
            A team of world-class specialists dedicated to your dental health and aesthetic goals.
          </p>
        </div>
        
        <div className={styles.grid}>
          {doctors.map((doctor, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageArea}>
                <Image 
                  src={doctor.image} 
                  alt={doctor.name} 
                  width={400} 
                  height={500} 
                  className={styles.docImage}
                />
                <div className={`${styles.stats} glass-effect`}>
                  <span className={styles.rating}>⭐ {doctor.rating}</span>
                  <span className={styles.reviews}>{doctor.reviews} Reviews</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.docName}>{doctor.name}</h3>
                <span className={styles.docRole}>{doctor.role}</span>
                <p className={styles.docBio}>{doctor.bio}</p>
                <button className={styles.bookBtn}>Book Consultation</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
