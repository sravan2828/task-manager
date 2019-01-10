import React from 'react';
import Actions from  "./Actions";
import styles from "./styles.module.css";

const Task = ({priority,id, description}) => (
  <section className={styles.task}>
    <div className={`${styles.priority} ${styles[priority]}`}>{priority} priority</div>
    <div className={styles.description}>{description}</div>
    <Actions />
  </section>
);

export default Task;
