import React from "react";
import styles from "./MessageBubbleOther.module.css";

const MessageBubbleOther = ({
  avatarUrlTwo = "https://static.overlay-tech.com/assets/88c389a5-4d42-4ec0-b05f-9d641b2e579f.png",
  bottomCurveVectorFour = "https://static.overlay-tech.com/assets/fce65fb5-8f62-4c56-b50c-dc828c45613c.svg",
  imDownAnyIdeasTwo = "I was thinking the cafe downtown",
  nameTwo = "Aubrey",
  num1135AmTwo = "11:45 AM",
  roleTwo = "Product",
  topVectorTipFour = "https://static.overlay-tech.com/assets/7a29bc7a-1b2d-4b49-819e-54d293a19f0a.svg"
}) => {
  return (
    <div className={styles.messageBubbleOther}>
      <div className={styles.avatarWithOnlineIndicator}>
        <img
          alt=""
          className={styles.avatarUrl}
          src={avatarUrlTwo}
        />
        <div className={styles.onlineIndicator} />
      </div>
      <div className={styles.messageBubble}>
        <div className={styles.bubbleLeft}>
          <div className={styles.bubbleTip}>
            <img
              alt=""
              className={styles.topVectorTip}
              src={topVectorTipFour}
            />
          </div>
          <div className={styles.bottomCurveRectangle} />
          <img
            alt=""
            className={styles.bottomCurveVector}
            src={bottomCurveVectorFour}
          />
        </div>
        <div className={styles.bubbleRight}>
          <div className={styles.bubbleLeft}>
            <div className={styles.sender}>
              <p className={styles.name}>{nameTwo}</p>
              <p className={styles.role}>{roleTwo}</p>
            </div>
            <div className={styles.messageBubbleOther}>
              <div className={styles.text}>
                <p className={styles.imDownAnyIdeas}>
                  {imDownAnyIdeasTwo}
                </p>
              </div>
              <div className={styles.time}>
                <p className={styles.num1135Am}>
                  {num1135AmTwo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubbleOther;