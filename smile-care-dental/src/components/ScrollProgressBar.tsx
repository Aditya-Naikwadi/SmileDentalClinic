"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollProgressBar.module.css";

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = (totalScroll / windowHeight) * 100;
      setScroll(scrollValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={styles.bar} 
      ref={(el) => {
        if (el) el.style.setProperty("--scroll-width", `${scroll}%`);
      }} 
    />
  );
};

export default ScrollProgressBar;
