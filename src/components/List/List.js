import React, {Component} from 'react';
import styles from "./styles.module.css";
import TaskContainer from "../../containers/TaskContainer";
import AddTask from "../Task/AddTask";

class List extends Component {

  state ={
    listName: ''
  }
  saveListName = () =>{
    debugger;
    const {id} = this.props.list;
    const {listName} = this.state;
    if(listName.length > 0){
      this.props.updateListName({id, listName});
    }
  }

  changeText = (event) => {
    this.setState({listName: event.target.value});
  }

  createNewTask = () => {
    this.props.createTask({listId: this.props.list.id});
  }

  render(){
    return (
      <section className={styles.list}>
        <div className={styles.wrapper}>
            {this.props.list.name ? <header className={styles.header}>{this.props.list.name}</header> :
              <div>
                <input type="text" placeholder="enter list name" onChange={this.changeText} value = {this.state.listName}/>
                <button onClick={this.saveListName}>Save</button>
              </div>
            }
            {this.props.list.tasks.map(task=><TaskContainer listId={this.props.list.id} task={task} key={task.id}/>)}
            <AddTask createNewTask={this.createNewTask}/>
        </div>
      </section>
    );
  }
}



export default List;
