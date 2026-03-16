"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";
import ScrollReveal from "../ScrollReveal";

const Gallery = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <h2 className={styles.title}>Visual Transformations</h2>
          <p className={styles.subtitle}>
            Seeing is believing. Explore the life-changing results of our specialized 
            dental procedures and witness the precision of our craft.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div 
            className={styles.comparisonWrapper}
            style={{ "--slider-pos": `${sliderPos}%` } as React.CSSProperties}
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            <div className={styles.comparisonContainer}>
              <div 
                className={styles.afterImage} 
                style={{ "--clip-path": `${sliderPos}%` } as React.CSSProperties}
              >
                <Image src="/teeth_after.png" alt="After treatment" fill className={styles.image} priority />
                <div className={styles.badgeAfter}>After</div>
              </div>
              <div className={styles.beforeImage}>
                <Image src="/teeth_before.png" alt="Before treatment" fill className={styles.image} priority />
                <div className={styles.badgeBefore}>Before</div>
              </div>
              <div className={styles.sliderHandle}>
                <div className={styles.handleLine}></div>
                <div className={styles.handleCircle}>
                  <span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Gallery;
