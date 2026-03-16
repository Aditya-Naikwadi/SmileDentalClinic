import styles from "./Testimonials.module.css";
import ScrollReveal from "../ScrollReveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Graphic Designer",
    text: "The most comfortable dental experience I've ever had. The team is professional, and the technology is truly next-level.",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Software Architect",
    text: "I was always nervous about dentists, but SmileCare changed that. Their digital portal and transparent process are amazing.",
    stars: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    text: "My smile transformation has been life-changing. I highly recommend Dr. Sterling for any orthodontic work!",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <h2 className={styles.title}>What Our Patients Say</h2>
          <p className={styles.subtitle}>Real stories from people who trusted us with their smiles.</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className={`${styles.card} glass-effect`}>
                <div className={styles.quote}>&quot;</div>
                <p className={styles.text}>{t.text}</p>
                <div className={styles.rating}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} className={styles.star} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className={styles.author}>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
