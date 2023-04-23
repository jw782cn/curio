import React, { useState } from "react";
import PaperAirplane from "./PaperAirplane";
import styles from "./Footer.module.css";

const Footer = ({ startTyping = "Start typing...", onSendMessage }) => {
    const [inputText, setInputText] = useState("");

    const handleClick = () => {
        // Logic for sending the text goes here
        console.log(inputText);
        // setInputText("");
        if (inputText.trim() !== "") {
            onSendMessage(inputText.trim());
            setInputText("");
        }
    };

    const autoResize = (event) => {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
    };

    return (
        <div className={styles.footer}>
            <div className={styles.frame2897}>
                <textarea
                    className={styles.startTyping}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onInput={autoResize}
                    placeholder={startTyping}
                    rows={1} // Start with one row
                />
            </div>
            <div className={styles.frame2898} onClick={handleClick}>
                <PaperAirplane />
            </div>
        </div>
    );
};

export default Footer;
