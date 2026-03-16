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
        <span className={styles.smile}>Smile</span>
        <span className={styles.care}>Care</span>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Loader;
