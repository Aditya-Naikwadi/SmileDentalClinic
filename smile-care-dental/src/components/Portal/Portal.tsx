"use client";

import { useState } from "react";
import DentalChart from "./DentalChart";
import styles from "./Portal.module.css";
import ScrollReveal from "../ScrollReveal";

const tabs = ["Digital Chart", "X-Rays", "Schedule", "Billing"];

const Portal = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="portal" className={styles.portal}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <h2 className={styles.title}>Patient Smart Portal</h2>
          <p className={styles.subtitle}>
            Your complete dental health records, accessible anywhere, anytime.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className={`${styles.dashboard} glass-effect`}>
            <div className={styles.sidebar}>
              <div className={styles.userProfile}>
                <div className={styles.avatar}>JD</div>
                <div>
                  <h4>John Doe</h4>
                  <span>Patient ID: #SC-2024</span>
                </div>
              </div>
              <div className={styles.tabs}>
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
            </div>

            <div className={styles.main}>
              {activeTab === 0 && (
                <div className={styles.chartView}>
                  <div className={styles.chartHeader}>
                    <h3>Interactive Dental Chart</h3>
                    <p>Select teeth to view detailed history and upcoming treatments.</p>
                  </div>
                  <div className={styles.chartContainer}>
                    <DentalChart />
                  </div>
                </div>
              )}
              {activeTab !== 0 && (
                <div className={styles.placeholder}>
                  <div className={styles.pulseIcon}>📍</div>
                  <h3>Integrating Data</h3>
                  <p>We are securely syncing your {tabs[activeTab]} records from our main database.</p>
                  <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Portal;
