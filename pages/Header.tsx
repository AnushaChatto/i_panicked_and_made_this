import React from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
      <div className={`${styles.dropdown} ${styles.quarter_button}`}>
        <button
          className={`${styles.dropbtn} ${styles.quarter} ${styles.top_left_corner_button}`}
        >
          <span>Home</span>
        </button>
        <div className={styles.dropdown_content}></div>
      </div>
      </Link>
    </header>
  );
};

export default Header;
