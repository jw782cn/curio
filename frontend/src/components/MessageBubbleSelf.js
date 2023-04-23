import React from "react";
import styles from "./MessageBubbleSelf.module.css";

const MessageBubbleSelf = ({
  bottomCurveVectorThree = "https://static.overlay-tech.com/assets/03e43cb4-9292-4ab3-b10a-87935c011b87.svg",
  hiThereMyNameIsAnnaliseAndiWillTwo = "I am down for whatever! ",
  num1131AmThree = "11:36 AM",
  readReceiptThree = "https://static.overlay-tech.com/assets/e303e2b2-32a5-41bf-9bc5-beea2edcc185.svg",
  topVectorTipThree = "https://static.overlay-tech.com/assets/dccb11de-11b9-4436-9c93-6d3b9da33753.svg"
}) => {
  return (
    <div className={styles.messageBubbleSelf}>
      <div className={styles.bubbleRight}>
        <div className={styles.body}>
          <div className={styles.text}>
            <p
              className={
                styles.hiThereMyNameIsAnnaliseAndIWill
              }
            >
              {hiThereMyNameIsAnnaliseAndiWillTwo}
            </p>
          </div>
          <div className={styles.timeReadReceipt}>
            <div className={styles.frame2886}>
              <p className={styles.num1131Am}>
                {num1131AmThree}
              </p>
              <img
                alt=""
                className={styles.readReceipt}
                src={readReceiptThree}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bubbleLeft}>
        <div className={styles.bubbleTip}>
          <img
            alt=""
            className={styles.topVectorTip}
            src={topVectorTipThree}
          />
        </div>
        <div className={styles.bottomCurveRectangle} />
        <img
          alt=""
          className={styles.bottomCurveVector}
          src={bottomCurveVectorThree}
        />
      </div>
    </div>
  );
};

export default MessageBubbleSelf;