import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline title="Index Page" page="index"/>
        <Links />
        <Footer />
      </main>
    </>
  )
}