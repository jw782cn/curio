import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatWindow.module.css";
import Footer from "./Footer";

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].sender !== "chatgpt") {
            setTimeout(() => {
                handleSendMessage({ text: "Good Question", sender: "chatgpt" });
            }, 1000);
        }
    }, [messages]);

    const handleSendMessage = (message) => {
        setMessages([...messages, message]);
    };

    const chatMessagesContainerRef = useRef(null);

    useEffect(() => {
        if (chatMessagesContainerRef.current) {
        chatMessagesContainerRef.current.scrollTop = chatMessagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const renderChatGPTMessageButtons = () => {
        return (
          <div className={styles.chatGPTMessageButtons}>
            <button className={styles.chatGPTMessageButton}>1</button>
            <button className={styles.chatGPTMessageButton}>2</button>
            <button className={styles.chatGPTMessageButton}>3</button>
          </div>
        );
    };

    return (
        <div className={styles.chatWindow}>
          <div className={styles.chatMessagesContainer} ref={chatMessagesContainerRef}>
            {messages.map((message, index) => (
              <div key={index} className={`${styles.messageContainer} ${message.sender === "user" ? styles.userMessage : ""}`}>
                <div className={`${styles.avatar} ${message.sender === "user" ? styles.userAvatar : styles.chatGPTAvatar}`}>{message.sender === "user" ? "G" : "C"}</div>
                <div className={message.sender === "user" ? styles.userMessageBubble : styles.chatGPTMessageBubble}>
                    {message.text}
                    {message.sender !== "user" && renderChatGPTMessageButtons()}
                </div>
              </div>
            ))}
          </div>
          <Footer onSendMessage={(text) => handleSendMessage({ text, sender: "user" })} />
        </div>
    );
};

export default ChatWindow;