import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from 'next/link'
const Machine_Learning: NextPage = () => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Why?</title>
            <meta name="description" content="I panicked and Made this" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>Hello! Creator here, Read on!</h1>
    
            <p className={styles.description}>
              Since creating visualizations for all the projects here will take a while, results are mostly posted here, however maybe demos as well? All original code is on github.
            </p>
            <div className={styles.grid}>
              <Link href="#" >
              <div className={styles.card}>
                <h2>Reports &rarr;</h2>
                <p>Plots, Graphs and Information: contains more projects</p>
                </div>
              </Link>
    
              <Link href="#" >
              <div className={styles.card}>
                <h2>Demos?&rarr;</h2>
                <p>Things you can play with</p>
                </div>
              </Link>
    
              
            </div>
         </main>
        </div>
      );
}

export default Machine_Learning