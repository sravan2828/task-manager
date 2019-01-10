import React from 'react';
import styles from "./styles.module.css";
import TaskContainer from "../../containers/TaskContainer";
import AddTask from "../Task/AddTask";
const List = (props) => (
  <section className={styles.list}>
    <div className={styles.wrapper}>
      <header className={styles.header}>{props.list.name}</header>
        {props.list.tasks.map(task=><TaskContainer listId={props.list.id} task={task} key={task.id}/>)}
        <AddTask/>
    </div>
  </section>
);

export default List;
