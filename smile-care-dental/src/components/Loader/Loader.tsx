"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <div className={styles.textWrapper}>
          {"Smile".split("").map((l, i) => (
            <span key={i} className={styles.letter}>{l}</span>
          ))}
          {"Care".split("").map((l, i) => (
            <span key={i} className={`${styles.letter} ${styles.blue}`}>{l}</span>
          ))}
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Loader;
