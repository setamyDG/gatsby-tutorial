import React from "react";
import styles from "../pages/about.module.css";

const User = (props) => (
  <div className={styles.User}>
    <img src={props.avatar} className={styles.Avatar} alt="" />
    <div className={styles.Description}>
      <h2 className={styles.Username}>{props.username}</h2>
      <p className={styles.Excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default User;
