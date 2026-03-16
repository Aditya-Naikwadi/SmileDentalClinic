"use client";

import { useState } from "react";
import DentalChart from "./DentalChart";
import styles from "./Portal.module.css";

const tabs = ["Digital Chart", "X-Rays", "Schedule", "Billing"];

const Portal = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="portal" className={styles.portal}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Patient Smart Portal</h2>
          <p className={styles.subtitle}>
            Your complete dental health records, accessible anywhere, anytime.
          </p>
        </div>

        <div className={`${styles.dashboard} glass-effect`}>
          <div className={styles.sidebar}>
            {tabs.map((tab, idx) => (
              <button 
                key={tab} 
                className={`${styles.tab} ${activeTab === idx ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.main}>
            {activeTab === 0 && (
              <div className={styles.chartView}>
                <h3>Interactive Dental Chart</h3>
                <p>Select teeth to view detailed history and upcoming treatments.</p>
                <DentalChart />
              </div>
            )}
            {activeTab !== 0 && (
              <div className={styles.placeholder}>
                <h3>Coming Soon</h3>
                <p>We are integrating your {tabs[activeTab]} data. Check back soon!</p>
                <div className={styles.loader}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portal;
