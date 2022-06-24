import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import algorithm from "../../styles/algorithmsPage.module.scss";
import ReactSyntaxHighlighter from "react-syntax-highlighter";


const Fibonnaci: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sadness</title>
        <meta name="description" content="I panicked and Made this" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Fibonacci Series</h1>

        <p className={styles.description}>
          A series of numbers in which each number ( Fibonacci number ) is the
          sum of the two preceding numbers. The simplest is the series 1, 1, 2,
          3, 5, 8, etc.
        </p>

        <p>Basic Logic</p>
        <div className={styles.code}>
          <ReactSyntaxHighlighter language="cpp">
            if (n&#60;=1) return n; return fib(n-1)+fib(n-2);
          
          </ReactSyntaxHighlighter>
        </div>
        <p>Input Number</p>
      </main>

      <footer className={styles.footer}>
        Go Back to&nbsp;
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Dropdown</button>
          <div className={styles.dropdown_content}>
            <a href="/dynamicAlgos">Algorithms</a>
            <a href="/">Home</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fibonnaci;
