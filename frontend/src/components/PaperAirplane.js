import React from "react";
import styles from "./PaperAirplane.module.css";

const PaperAirplane = ({
  icon = "https://static.overlay-tech.com/assets/c45a48f8-6aa4-4a16-99a5-3ff835b46d09.svg"
}) => {
  return (
    <div className={styles.paperAirplane}>
      <img alt="" className={styles.icon} src={icon} />
    </div>
  );
};

export default PaperAirplane;