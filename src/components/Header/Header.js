import React from 'react';
import styles from "./styles.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.logo}><a href="/" title="Task Manager">Task Manager</a></h1>
    <section className={styles.main}>
      <div className={styles.search}>
        <i className="jam jam-search"></i>
        <input type="text" placeholder="search for tasks..." />
      </div>
    </section>
  </header>
);

export default Header;
