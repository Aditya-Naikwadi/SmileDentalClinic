import styles from "./Services.module.css";

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive check-ups, cleaning, and preventative care for all ages.",
    icon: "🦷",
    link: "#cleaning"
  },
  {
    title: "Orthodontics",
    description: "Modern braces and clear aligners to perfect your smile's alignment.",
    icon: "✨",
    link: "#ortho"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, and bonding for a stunning transformation.",
    icon: "💎",
    link: "#cosmetic"
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth.",
    icon: "🦾",
    link: "#implants"
  },
  {
    title: "Pediatric Care",
    description: "Gentle and fun dental experiences for our youngest patients.",
    icon: "👶",
    link: "#pediatric"
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical procedures with advanced sedation options.",
    icon: "🏥",
    link: "#surgery"
  },
  {
    title: "Periodontal Therapy",
    description: "Specialized care for gum health and disease prevention.",
    icon: "🌿",
    link: "#gum"
  },
  {
    title: "Emergency Care",
    description: "Swift response for urgent dental issues, available 24/7.",
    icon: "🚨",
    link: "#emergency"
  }
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Premium Services</h2>
          <p className={styles.subtitle}>
            We combine art and science to provide world-class dental solutions 
            tailored to your unique needs.
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href={service.link} className={styles.learnMore}>
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
