import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { Footer } from "src/components/Footer/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
