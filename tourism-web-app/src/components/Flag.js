import React from "react";
import styles from "./Flag.module.css";

const Flag = () => {
  return (
    <div className={styles.flag}>
      <div className={styles.stripe + " " + styles.black}></div>
      <div className={styles.stripe + " " + styles.red}></div>
      <div className={styles.stripe + " " + styles.white}></div>
    </div>
  );
};

export default Flag;
