"use client";

import { useState } from "react";
import styles from "./DentalChart.module.css";

const teethUpper = Array.from({ length: 16 }, (_, i) => i + 1);
const teethLower = Array.from({ length: 16 }, (_, i) => 32 - i);

const DentalChart = () => {
  const [selectedTeeth, setSelectedTeeth] = useState<number[]>([]);

  const toggleTooth = (id: number) => {
    setSelectedTeeth(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const renderTooth = (id: number) => (
    <div 
      key={id} 
      className={`${styles.tooth} ${selectedTeeth.includes(id) ? styles.selected : ""}`}
      onClick={() => toggleTooth(id)}
    >
      <div className={styles.toothVisual}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.toothSvg}>
          <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 4.5 4 4 2.5 4C1.5 4 1 4.5 1 5.5C1 10 3 13 6 15C5 17 5 21 7 22C9 23 11 20 12 18C13 20 15 23 17 22C19 21 19 17 18 15C21 13 23 10 23 5.5C23 4.5 22.5 4 21.5 4C20 4 18.5 4.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="currentColor" />
        </svg>
        <div className={styles.scanLine}></div>
      </div>
      <span className={styles.toothNumber}>{id}</span>
    </div>
  );

  return (
    <div className={styles.chart}>
      <div className={styles.arch}>
        <h4 className={styles.archTitle}>Upper Arch</h4>
        <div className={styles.teethRow}>
          {teethUpper.map(renderTooth)}
        </div>
      </div>
      
      <div className={styles.arch}>
        <h4 className={styles.archTitle}>Lower Arch</h4>
        <div className={styles.teethRow}>
          {teethLower.map(renderTooth)}
        </div>
      </div>

      <div className={styles.legend}>
        <div className={styles.selectedCount}>
          <strong>Selected:</strong> {selectedTeeth.length} teeth
        </div>
        <button 
          className={styles.clearBtn}
          onClick={() => setSelectedTeeth([])}
          disabled={selectedTeeth.length === 0}
        >
          Clear Selection
        </button>
      </div>
    </div>
  );
};

export default DentalChart;
