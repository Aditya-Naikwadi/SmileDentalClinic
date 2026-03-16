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
      <span className={styles.toothNumber}>{id}</span>
      <div className={styles.toothIcon}>🦷</div>
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
