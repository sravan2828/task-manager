import React from 'react';
import styles from "./styles.module.css";

const Board = ({ children }) => (
  <main className={styles.board}>
    <header className={styles.header}><h1>Board Name</h1></header>
    <section className={styles.lists}>{children}</section>
    <button className={styles.addList}><i className="jam jam-plus" /></button>
  </main>
);

export default Board;
