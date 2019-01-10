import React from 'react';
import styles from "./styles.module.css";

const List = ({ children }) => (
  <section className={styles.list}>
    <div className={styles.wrapper}>
      <header className={styles.header}>List Name</header>
      {children}
    </div>
  </section>
);

export default List;
