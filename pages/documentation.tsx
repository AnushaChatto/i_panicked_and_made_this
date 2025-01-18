import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from 'next/link'
const Documentation: NextPage = () => {
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
              A student of Computer science engineering (B-tech) and now a Masters student in Data and Computer Science Student.
              Check out my linkedin: <Link href="https://de.linkedin.com/in/anusha-chattopadhyay">Anusha Chattopadhyay</Link> for details.
            </p>
            <p>However here, This is called Documentation, thus the technical aspects of most of the units of the site are specified here</p>
            <p>You should find each project separately, including the repo for this site at: <Link href="https://github.com/AnushaChatto">AnushaChatto: Github</Link></p>
            <br></br>
            <p>This site is a Next.js project bootstrapped with create-next-app. The structure has been written using typescript</p>
          </main>
        </div>
      );
}

export default Documentation