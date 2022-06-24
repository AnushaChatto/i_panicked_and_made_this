import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

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
          <a href="#" className={styles.card}>
            <h2>Documentation?? &rarr;</h2>
            <p>Why did I make this? and How?.</p>
          </a>

          <a href="/dynamicAlgos" className={styles.card}>
            <h2>Algorithms &rarr;</h2>
            <p>I solved random algorithms problems and then animated them!</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Machine Learning &rarr;</h2>
            <p>I did fancy ML Stuff!!</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Other &rarr;</h2>
            <p>
              Random Ideas I had in mind!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Well to be honest I wanted to show off stuff so I didn't put much
        thought into the design. Not an artist just sad.<br/> Also whoever made the
        next.js home page did a nice job so I just built over it with some style and dimension corrections
      </footer>
    </div>
  );
};

export default Home;
