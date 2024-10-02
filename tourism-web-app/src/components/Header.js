import React from "react";
import styles from "./Header.module.css";
import { FaPlane } from "react-icons/fa";
import Flag from "./Flag";

const Header = () => (
  <header className={styles.header}>
    <Flag />
    <div className={styles.content}>
      <div className={styles.logoContainer}>
        <FaPlane className={styles.icon} />
        <h1>Oromia Tourism Bale</h1>
      </div>
    </div>
  </header>
);

export default Header;
