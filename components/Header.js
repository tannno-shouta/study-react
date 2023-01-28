import Link from "next/link";
// import styles from './Header.module.css'

export function Header() {
  return (
    <header>
      <Link href="/" legacyBehavior>
        <a className="index">Index</a>
      </Link>

      <Link href="/about" legacyBehavior>
        <a className="about">About</a>
      </Link>
    </header>
  );
}