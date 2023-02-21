import styles from "../styles/footer.module.css";

export default function FooterApp() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles["footer-link"]}
        href="https://prometheus.org.ua/"
        target="_blank"
        rel="noreferrer"
      >
        Виконано в Prometheus @ 2023
      </a>
    </footer>
  );
}
