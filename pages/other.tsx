import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from 'next/link'
const Other: NextPage = () => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Why?</title>
            <meta name="description" content="I panicked and Made this" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>Other projects</h1>
    
            <p className={styles.description}>
              Miscellenous projects
            </p>
            <div className={styles.grid}>
              <Link href="https://github.com/AnushaChatto/OrangeFlowerBot" >
              <div className={styles.card}>
                <h2>Discord Bot! &rarr;</h2>
                <p>I made a discord bot! It tells you jokes and makes you feel things!</p>
                </div>
              </Link>
    
              <Link href="https://github.com/AnushaChatto/SKETCHES" >
              <div className={styles.card}>
                <h2>Sketches!&rarr;</h2>
                <p>Somtimes I draw, sorta</p>
                </div>
              </Link>
    
              
            </div>
         </main>
        </div>
      );
}

export default Other