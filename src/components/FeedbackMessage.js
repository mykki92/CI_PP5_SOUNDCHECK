import styles from "../styles/FeedbackMessage.module.css";
import css from "classnames";
import React from "react";
import { useState } from "react";

/*
  Component to handle feedback messages
*/
export default function FeedbackMessage({ variant, message }) {
  const [isShown, setIsShown] = useState(true);

  /*
    Handles closing of the alert message
  */
  const handleClose = (e) => {
    e.preventDefault();
    setIsShown(false);
  };

  return (
    <div
      className={css(styles.alert, styles[variant], !isShown && styles.hide)}
    >
      <span className={styles.closebtn} onClick={handleClose}>
        &times;
      </span>
      {message}
    </div>
  );
}