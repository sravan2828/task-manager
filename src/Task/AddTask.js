import React from 'react';
import styles from "./styles.module.css";

const AddTask = () => (
  <div className={styles.add}>
    <button className={styles.addBtn}>Add task <i className="jam jam-plus-circle" /></button>
  </div>
);

export default AddTask;
