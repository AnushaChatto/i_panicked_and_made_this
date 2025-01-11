import type { NextPage } from "next";
import SyntaxHighlighter from "react-syntax-highlighter";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import algorithm from "../../styles/algorithmsPage.module.scss";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import Link from 'next/link'
const Climbing_Stairs: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sadness</title>
        <meta name="description" content="I panicked and made this" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Min cost of Climbing Stairs</h1>

        <p className={styles.description}>
          You are given an integer array cost where cost[i] is the cost of ith
          step on a staircase.
          <br />
          Once you pay the cost, you can either climb one or two steps.
          <br /> You can either start from the step with index 0, or the step
          with index 1.
          <br />
          Return the minimum cost to reach the top of the floor.
        </p>
        <Link href="https://leetcode.com/problems/min-cost-climbing-stairs/">
          https://leetcode.com/problems/min-cost-climbing-stairs/
        </Link>

        <p>Basic Logic</p>
        <div className={styles.code}>
          <ReactSyntaxHighlighter language="cpp">
            int minCostClimbingStairs(vector&#60;int&#62;& cost) &#123;
          </ReactSyntaxHighlighter>
          <ReactSyntaxHighlighter language="cpp">
            int val_1 = 0; int val_2 = 0;
          </ReactSyntaxHighlighter>
          <ReactSyntaxHighlighter language="cpp">
            for(int i=0;i&#60;cost.size();i++)&#123;
          </ReactSyntaxHighlighter>
          <ReactSyntaxHighlighter language="cpp">
            int val = cost[i] + min(val_1,val_2); val_2 = val_1; val_1 = val;
          </ReactSyntaxHighlighter>
          <ReactSyntaxHighlighter language="cpp">
            &#125; return min(val_1,val_2); &#125;
          </ReactSyntaxHighlighter>
        </div>
        <p>Input Number</p>
      </main>
    </div>
  );
};

export default Climbing_Stairs;
