import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const DynamicAlgos: NextPage = () => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Sadness</title>
            <meta name="description" content="I panicked and Made this" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>This is a few random algorithms and decided to go ahead and add them</h1>
    
            <p className={styles.description}>
              Take a look
            </p>
    
            <div className={styles.grid}>
              <a href="/algorithms/fibonacci" className={styles.card}>
                <h2>Fibonacci &rarr;</h2>
                <p>You know the problem you do in cs class 101?</p>
              </a>
    
              <a href="/algorithms/climbing_stairs" className={styles.card}>
                <h2>Climbing Stairs &rarr;</h2>
                <p>Because I can't tell my parents that I jumped 4 steps at a time</p>
              </a>
    
              <a
                href="/algorithms/queens"
                className={styles.card}
              >
                <h2>N Queens Problem &rarr;</h2>
                <p>Even though I suck at Chess</p>
              </a>
    
              <a
                href="#"
                className={styles.card}
              >
                <h2>Tower of Hanoi &rarr;</h2>
                <p>
                  Because I know if you studied cs you still have nightmares about this
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
}

export default DynamicAlgos