import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.home}>
        Codevilot
      </a>
    </header>
  );
}
