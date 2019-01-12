import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';
import styles from "./styles.module.css";
import TaskContainer from "../../containers/TaskContainer";
import AddTask from "../Task/AddTask";
import SaveText from "../SaveText";
import {ItemTypes} from "../../constants";

function collect (connect, monitor) {
  return{
	connectDropTarget: connect.dropTarget(),
	hovered: monitor.isOver(),
	item: monitor.getItem()
  }
};

const taskTarget = {
	drop(props, monitor, component){
		return {
			targetListId: props.list.id
		}
	}
};
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
	const {connectDropTarget, list} = this.props;
	return connectDropTarget(
		<section className={styles.list}>
			<div className={styles.wrapper}>
				{list.name ?
					<header className={styles.header}>{list.name}</header> :
					<SaveText listId={list.id} save={this.saveListName}/>}
				{list.tasks.map(task=><TaskContainer listId={list.id} task={task} key={task.id}/>)}
				<AddTask createNewTask={this.createNewTask}/>
			</div>
		</section>
	);
  }
}

export default DropTarget(ItemTypes.TASK, taskTarget, collect)(List);