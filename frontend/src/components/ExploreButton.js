import React from "react";
import styles from "./ExploreButton.module.css";

const ExploreButton = () => {
  return (
    <button className={styles.ExploreButton}>
      <img
        alt=""
        className={styles.vector}
        src="https://static.overlay-tech.com/assets/c4156dd7-6699-4dac-9989-c0dd9fa3200c.svg"
      />
      <span className={styles.text}>Explore Cloud</span>
    </button>
  );
};

export default ExploreButton;