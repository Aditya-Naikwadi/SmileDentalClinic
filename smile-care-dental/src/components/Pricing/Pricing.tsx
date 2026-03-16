import styles from "./Pricing.module.css";
import ScrollReveal from "../ScrollReveal";

const plans = [
  {
    name: "Standard Wellness",
    price: "₹999",
    period: "/session",
    features: ["Routine Cleaning", "Digital X-Rays", "Expert Consultation", "Basic Whitening"],
    cta: "Choose Plan",
    recommended: false
  },
  {
    name: "Elite Aesthetic",
    price: "₹4,999",
    period: "/session",
    features: ["Deep Ultrasonic Cleaning", "Premium Laser Whitening", "Orthodontic Design", "Priority Concierge Support"],
    cta: "Choose Plan",
    recommended: true
  },
  {
    name: "Complete Family Care",
    price: "₹12,499",
    period: "/month",
    features: ["Family of 4 Coverage", "All Elite Services", "VVIP Priority Booking", "Custom Dental Guards"],
    cta: "Choose Plan",
    recommended: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <h2 className={styles.title}>Elite Care Tiers</h2>
          <p className={styles.subtitle}>
            Uncompromising quality with transparent value. Select a membership that elevates your oral health.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className={`${styles.card} ${plan.recommended ? styles.recommended : ""} glass-effect`}>
                {plan.recommended && <div className={styles.badge}>Most Popular</div>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceArea}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
                <ul className={styles.features}>
                  {plan.features.map(f => (
                    <li key={f}><span>✔</span> {f}</li>
                  ))}
                </ul>
                <button className={styles.btn}>{plan.cta}</button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
