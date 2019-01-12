import React from 'react';
import styles from "./styles.module.css";
import ListContainer from "../../containers/ListContainer";
const Board = (props) => (
  <main className={styles.board}>
    <header className={styles.header}><h1>{props.boardName}</h1></header>
    <section className={styles.lists}>
      <ListContainer lists={props.lists}/>
    </section>
    <button className={styles.addList} onClick={props.createList}><i className="jam jam-plus" /></button>
  </main>
);

export default Board;
