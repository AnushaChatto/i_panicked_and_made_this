import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import algorithm from "../../styles/algorithmsPage.module.scss";

const Queens: NextPage = () => {
  const [n, setN] = useState<number>(0);
  const [count, setCount] = useState<number | null>(null);
  const [message, setMessage] = useState<string>(""); // <-- new message state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (n <= 0) {
      setCount(null);
      setMessage("Enter a number between 1 and 12");
      return;
    }

    if (n > 20) {
      setCount(null);
      setMessage("N is too large, max is 12");
      return;
    }

    // valid n
    setLoading(true);
    setMessage(""); // clear previous message
    fetch(`/api/nqueens?n=${n}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setCount(null);
        setMessage("Failed to fetch results");
        setLoading(false);
      });
  }, [n]);

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
          The N Queen is the problem of placing N chess queens on an NxN
          chessboard so that no two queens attack each other.
        </p>

        <p>
          Read more about this problem on{" "}
          <Link href="https://www.geeksforgeeks.org/dsa/n-queen-problem-backtracking-3/">
            GeeksForGeeks
          </Link>
        </p>

        <p>Input Number(1-12)</p>
        <input
          type="number"
          min={1}
          max={20}
          value={n || ""}
          onChange={(e) => setN(Number(e.target.value))}
          placeholder="Enter N"
          className={algorithm.inputBox}
        />

        {/* Results */}
        <div style={{ marginTop: "20px" }}>
          {loading && <p>Calculating...</p>}

          {!loading && message && <p>{message}</p>}

          {!loading && !message && count !== null && (
            <p>
              <strong>Number of Solutions:</strong> {count}
            </p>
          )}
        </div>

        {/* Chessboard Grid */}
        <div className={styles.margincontainer}>
          {n > 0 && (
            <div
              className={algorithm.grid}
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${n}, 1fr)`,
                gridTemplateRows: `repeat(${n}, 1fr)`,
                width: "min(90vmin, 500px)",
                aspectRatio: "1",
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
