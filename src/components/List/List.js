import React, {Component} from 'react';
import styles from "./styles.module.css";
import TaskContainer from "../../containers/TaskContainer";
import AddTask from "../Task/AddTask";
import SaveText from "../SaveText";

class List extends Component {

  saveListName = (id,text) =>{
    if(text.length > 0){
      this.props.updateListName({id, listName:text});
    }
  }

  createNewTask = () => {
    this.props.createTask({listId: this.props.list.id});
  }

  render(){
    return (
      <section className={styles.list}>
        <div className={styles.wrapper}>
            {this.props.list.name ?
              <header className={styles.header}>{this.props.list.name}</header> :
              <SaveText listId={this.props.list.id} save={this.saveListName}/>}
            {this.props.list.tasks.map(task=><TaskContainer listId={this.props.list.id} task={task} key={task.id}/>)}
            <AddTask createNewTask={this.createNewTask}/>
        </div>
      </section>
    );
  }
}



export default List;
