
import React from 'react';
import styles from "../styles/Home.module.scss";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Browse</button>
          <div className={styles.dropdown_content}>
            <a href="/dynamicAlgos">Algorithms</a>
            <a href="/">Home</a>
          </div>
        </div>
    </header>
  );
};

export default Header;
