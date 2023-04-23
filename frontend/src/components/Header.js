import React from "react";
import styles from "./Header.module.css";

const Header = ({
    teamUnicorns = "🦄 ChatGPT-4"
}) => {
    return (
        <div className={styles.header}>
                <p>{teamUnicorns}</p>
        </div>
    );
};

export default Header;