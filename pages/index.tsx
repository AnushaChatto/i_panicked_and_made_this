import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sadness</title>
        <meta name="description" content="I panicked and Made this" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>I Panicked and Made this!!</h1>

        <p className={styles.description}>
          I was worried I had nothing to show for my coding skills and made a
          project!
        </p>

        <div className={styles.grid}>
          <Link href="/documentation">
            <div className={styles.card}>
              <h2>Documentation?? &rarr;</h2>
              <p>Why did I make this? and How?.</p>
            </div>
          </Link>

          <Link href="/dynamicAlgos">
            <div className={styles.card}>
              <h2>Algorithms &rarr;</h2>
              <p>I solved random algorithms problems and then animated them!</p>
            </div>
          </Link>

          <Link href="/machine_learning">
            <div className={styles.card}>
              <h2>Machine Learning &rarr;</h2>
              <p>I did &quot; fancy &quot; ML Stuff!!</p>
            </div>
          </Link>

          <Link href="/other">
            <div className={styles.card}>
              <h2>Other &rarr;</h2>
              <p>Random Ideas I had in mind!</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
