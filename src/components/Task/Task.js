import React from 'react';
import Actions from  "./Actions";
import SaveText from "../SaveText";
import styles from "./styles.module.css";

const Task = ({saveTaskName, task, listId, deleteTask, editText, showEditText}) => (
  <section className={styles.task}>
    <div className={`${styles.priority} ${styles[task.priority]}`}>{task.priority} priority</div>
    <div className={`${styles.deleteButton}`} onClick={() => deleteTask({listId,taskId: task.id})}><i className="jam jam-archive deleteIcon" /></div>
    {editText ? <SaveText listId={listId} taskId={task.id} save={saveTaskName} text={task.description}/> :
      <div className={styles.description} onClick={showEditText}>{task.description}</div>
    }
    <Actions />
  </section>
);

export default Task;
