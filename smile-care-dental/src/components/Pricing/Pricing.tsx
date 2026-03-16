import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Basic Wellness",
    price: "$99",
    period: "/visit",
    features: ["Bi-annual Cleaning", "X-Rays", "General Consultation", "Standard Whitening"],
    cta: "Choose Plan",
    recommended: false
  },
  {
    name: "Premium Smile",
    price: "$249",
    period: "/visit",
    features: ["Deep Cleaning", "Laser Whitening", "Orthodontic Consult", "24/7 Dental Support"],
    cta: "Choose Plan",
    recommended: true
  },
  {
    name: "Family Care",
    price: "$399",
    period: "/month",
    features: ["4 Family Members", "All Basic Services", "Priority Booking", "Custom Mouthguards"],
    cta: "Choose Plan",
    recommended: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Simple Transparency</h2>
          <p className={styles.subtitle}>Premium dental care with no hidden costs. Choose a plan that fits your needs.</p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <div key={idx} className={`${styles.card} ${plan.recommended ? styles.recommended : ""}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
