import React from 'react';
import Actions from  "./Actions";
import styles from "./styles.module.css";

const Task = ({priority}) => (
  <section className={styles.task}>
    <div className={`${styles.priority} ${styles[priority]}`}>{priority} priority</div>
    <div className={styles.description}>Task details goes here. This can even go to multiple lines.</div>
    <Actions />
  </section>
);

export default Task;
