import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Clinical Precision Not Found</h2>
          <p className={styles.text}>
            The page you are looking for has been moved or does not exist. 
            Let&apos;s get you back to clinical excellence.
          </p>
          <Link href="/" className={styles.cta}>
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
