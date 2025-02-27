import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from 'next/link'
const DynamicAlgos: NextPage = () => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Sadness</title>
            <meta name="description" content="I panicked and Made this" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>These are a few random algorithms and decided to go ahead and add them</h1>
    
            <p className={styles.description}>
              Take a look
            </p>
    
            <div className={styles.grid}>
              <Link href="/algorithms/fibonacci" >
              <div className={styles.card}>
                <h2>Fibonacci &rarr;</h2>
                <p>You know the problem you do in cs class 101?</p>
                </div>
              </Link>
    
              <Link href="/algorithms/climbing_stairs" >
              <div className={styles.card}>
                <h2>Climbing Stairs &rarr;</h2>
                <p>Because I cannot tell my parents that I jumped 4 steps at a time</p>
                </div>
              </Link>
    
              <Link
                href="/algorithms/queens"
                
              >
                <div className={styles.card}>
                <h2>N Queens Problem &rarr;</h2>
                <p>Even though I suck at Chess</p>
                </div>
              </Link>
    
              <Link
                href="#"
                
              >
                <div className={styles.card}>
                <h2>Tower of Hanoi &rarr;</h2>
                <p>
                  Because I know if you studied cs you still have nightmares about this
                </p>
                </div>
              </Link>
            </div>
          </main>
        </div>
      );
}

export default DynamicAlgos