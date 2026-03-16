"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Visual Transformations</h2>
          <p className={styles.subtitle}>
            See the life-changing results of our professional dental treatments. 
            Slide to compare before and after.
          </p>
        </div>

        <div 
          className={styles.comparisonWrapper}
          style={{ "--slider-pos": `${sliderPos}%` } as React.CSSProperties}
        >
          <div className={styles.comparisonContainer}>
            <div className={styles.afterImage}>
              <Image 
                src="/after.png" 
                alt="After treatment" 
                width={800} 
                height={500} 
                className={styles.image}
              />
              <div className={styles.badgeAfter}>AFTER</div>
            </div>
            
            <div 
              className={styles.beforeImage} 
            >
              <Image 
                src="/before.png" 
                alt="Before treatment" 
                width={800} 
                height={500} 
                className={styles.image}
              />
              <div className={styles.badgeBefore}>BEFORE</div>
            </div>

            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={handleSliderChange} 
              className={styles.slider}
              aria-label="Compare before and after treatment"
            />
            
            <div 
              className={styles.sliderHandle} 
            >
              <div className={styles.handleCircle}>↔</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
