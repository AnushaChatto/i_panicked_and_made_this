import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import algorithm from "../../styles/algorithmsPage.module.scss";
import ReactSyntaxHighlighter from "react-syntax-highlighter";


const Queens: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sadness</title>
        <meta name="description" content="I panicked and Made this" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>N Queens Problem</h1>

        <p className={styles.description}>
        The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other.
        </p>

        <p>Basic Logic</p>
        <div className={styles.code}>
          <ReactSyntaxHighlighter language="javascript">
            queens
          
          </ReactSyntaxHighlighter>
        </div>
        <p>Input Number</p>
      </main>
    </div>
  );
};

export default Queens;
