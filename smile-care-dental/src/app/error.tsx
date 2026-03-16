"use client";

import { useEffect } from "react";
import styles from "./Error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Something went wrong</h2>
          <p className={styles.text}>
            We encountered an unexpected issue. Our technical team has been notified.
            Clinical excellence will be restored shortly.
          </p>
          <button 
            onClick={() => reset()} 
            className={styles.cta}
          >
            Try Again
          </button>
        </div>
      </div>
    </main>
  );
}
