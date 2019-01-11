import React from 'react';
import Actions from  "./Actions";
import SaveText from "../SaveText";
import styles from "./styles.module.css";

const Task = ({saveTaskName, task, listId}) => (
  <section className={styles.task}>
    <div className={`${styles.priority} ${styles[task.priority]}`}>{task.priority} priority</div>
    {task.description ? <div className={styles.description}>{task.description}</div> :
      <SaveText listId={listId} taskId={task.id} save={saveTaskName}/>}
    <Actions />
  </section>
);

export default Task;
