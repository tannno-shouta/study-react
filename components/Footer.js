import styles from '../styles/Home.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
    >
      Thanks by{""}
      <img src="/vercel.svg" alt="Vercel Logo" className= {styles.footerlogo}></img>
    </a>
    </footer>
  );
}