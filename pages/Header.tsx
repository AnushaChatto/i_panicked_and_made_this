import React from "react";
import styles from "../styles/Home.module.scss";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.dropdown} ${styles.quarter_button}`}>
        <button
          className={`${styles.dropbtn} ${styles.quarter} ${styles.top_left_corner_button}`}
        >
          <span>Browse</span>
        </button>
        <div className={styles.dropdown_content}></div>
      </div>
    </header>
  );
};

export default Header;
