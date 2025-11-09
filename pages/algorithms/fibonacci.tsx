import { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import React, { useState, useEffect } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";

const Fibonacci: NextPage = () => {
  const [number, setNumber] = useState<string>("");
  const [series, setSeries] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const generateFibonacci = (n: number): number[] => {
    const result: number[] = [];
    let a = 0,
      b = 1;
    for (let i = 0; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }
    return result;
  };

  useEffect(() => {
    if (number === "") {
      setSeries([]);
      return;
    }

    const n = parseInt(number);
    if (isNaN(n) || n < 0) {
      setSeries([]);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      setSeries(generateFibonacci(n));
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [number]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fibonacci Series</title>
        <meta name="description" content="Fibonacci series generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Fibonacci Series</h1>

        <p className={styles.description}>
          A series of numbers in which each number (Fibonacci number) is the sum
          of the two preceding numbers. Example: 0, 1, 1, 2, 3, 5, 8, etc.
        </p>

        <p>Basic Logic</p>
        <div className={styles.code}>
          <ReactSyntaxHighlighter language="cpp">
            {`if (n <= 1) return n;
return fib(n-1) + fib(n-2);`}
          </ReactSyntaxHighlighter>
        </div>

        <p>Enter a length of series:</p>
        <input
          type="text"
          value={number}
          onChange={(e) =>
            setNumber(e.target.value === "" ? "0" : e.target.value)
          }
          placeholder="Enter the length of series"
        />

        {loading && <p>Loading...</p>}

        {series.length > 0 && !loading && (
          <div style={{ marginTop: "20px" }}>
            <h3>Fibonacci Series:</h3>
            <p>{series.join(", ")}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Fibonacci;
