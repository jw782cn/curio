import React from "react";
import PaperAirplane from "./PaperAirplane";
import styles from "./Footer.module.css";

const Footer = ({ startTyping = "Start typing..." }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.frame2897}>
        <p className={styles.startTyping}>{startTyping}</p>
      </div>
      <div className={styles.frame2898}>
        <PaperAirplane />
      </div>
    </div>
  );
};

export default Footer;