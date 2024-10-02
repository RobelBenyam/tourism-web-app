import React from "react";
import styles from "./Header.module.css";
import { FaPlane } from "react-icons/fa";
import Flag from "./Flag";

const Header = () => (
  <header className={styles.header}>
    <Flag />
    <div className={styles.content}></div>
  </header>
);

export default Header;
