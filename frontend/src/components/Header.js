import React from "react";
import KebabHorizontal from "./KebabHorizontal";
import styles from "./Header.module.css";

const Header = ({
  avatarUrlSix = "https://static.overlay-tech.com/assets/aa1d8954-ed1c-4d88-9627-ee58b9b64d89.png",
  teamUnicorns = "🦄 Team Unicorns"
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.rectangle3106} />
      <div className={styles.messageParticipants}>
        <p className={styles.teamUnicorns}>
          {teamUnicorns}
        </p>
      </div>
      <img
        alt=""
        className={styles.avatarUrl}
        src={avatarUrlSix}
      />
      <KebabHorizontal className={styles.kebabHorizontal} />
    </div>
  );
};

export default Header;