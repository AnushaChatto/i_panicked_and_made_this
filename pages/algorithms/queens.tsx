// import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../../styles/Home.module.scss";
// import algorithm from "../../styles/algorithmsPage.module.scss";
// import ReactSyntaxHighlighter from "react-syntax-highlighter";
// import Link from 'next/link'

// const Queens: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Sadness</title>
//         <meta name="description" content="I panicked and Made this" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>N Queens Problem</h1>

//         <p className={styles.description}>
//         The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other.
//         </p>

//         <p>Basic Logic</p>
//         <div className={styles.code}>
//           <ReactSyntaxHighlighter language="javascript">
//             queens
          
//           </ReactSyntaxHighlighter>
//         </div>
//         <p>Input Number</p>
//       </main>
//     </div>
//   );
// };

// export default Queens;
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
          The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other.
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
{n > 0 && (
  <div
    className={algorithm.grid}
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${n}, 40px)`,
      gridTemplateRows: `repeat(${n}, 40px)`,
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
            width: "40px",
            height: "40px",
            backgroundColor: isLight ? "#ffffffff" : "#9c97faff", // chessboard 
          }}
        />
      );
    })}
  </div>
)}

      </main>
    </div>
  );
};

export default Queens;
