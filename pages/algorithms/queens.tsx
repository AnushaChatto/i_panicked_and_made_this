import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import algorithm from "../../styles/algorithmsPage.module.scss";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import Link from "next/link";
import { useState } from "react";

const Queens: NextPage = () => {
  const [n, setN] = useState<number>(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>N Queens Problem</title>
        <meta name="description" content="N Queens visualization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>N Queens Problem</h1>

        <p className={styles.description}>
          The N Queen is the problem of placing N chess queens on an N×N
          chessboard so that no two queens attack each other.
        </p>

        <p>Basic Logic</p>
        <div className={styles.code}>
          <ReactSyntaxHighlighter language="javascript">
            {`// Placeholder for N Queens logic
function solveNQueens(n) {
  // Implementation goes here
}`}
          </ReactSyntaxHighlighter>
        </div>

        <p>Input Number</p>
        <input
          type="number"
          min="1"
          value={n || ""}
          onChange={(e) => setN(Number(e.target.value))}
          placeholder="Enter N"
          className={algorithm.inputBox}
        />

        {/* Render Checkerboard Grid */}
        <div className={styles.margincontainer}>
          {n > 0 && (
            <div
              className={algorithm.grid}
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${n}, 1fr)`,
                gridTemplateRows: `repeat(${n}, 1fr)`,
                width: "min(90vmin, 500px)", // fits viewport, max 500px
                aspectRatio: "1", // keeps it a square
                gap: "0",
                marginTop: "20px",
                border: "2px solid #333",
              }}
            >
              {Array.from({ length: n * n }).map((_, i) => {
                const row = Math.floor(i / n);
                const col = i % n;
                const isLight = (row + col) % 2 === 0;

                return (
                  <div
                    key={i}
                    style={{
                      backgroundColor: isLight ? "#ffffff" : "#9c97fa",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Queens;
