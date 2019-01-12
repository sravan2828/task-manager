import React, {Component} from 'react';
import Actions from  "./Actions";
import SaveText from "../SaveText";
import styles from "./styles.module.css";
import { DragSource } from 'react-dnd';
import {ItemTypes} from "../../constants";

const taskSource = {
	beginDrag: function (props, monitor){
		return {...props}
	},
	endDrag: function (props, monitor){
		if(monitor.didDrop()){
			const {targetListId} = monitor.getDropResult();
			console.log("dropTarget", targetListId,props);
			props.moveTask({
				targetListId,
				sourceListId: props.listId,
				taskId: props.task.id,
				description: props.task.description
			});
		}
	}
}

function collection(connect, monitor){
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}
class Task extends Component {

	render(){
		const {
			saveTaskName,
			task,
			listId,
			deleteTask,
			editText,
			showEditText,
			connectDragSource,
			isDragging
		} = this.props;

		const opacity = isDragging ? 0: 1; //make the item in list invisible when being dragged
		return connectDragSource(
			<section className={styles.task} style={{opacity}}>
				<div className={`${styles.priority} ${styles[task.priority]}`}>{task.priority} priority</div>
				<div className={`${styles.deleteButton}`} onClick={() => deleteTask({listId,taskId: task.id})}><i className="jam jam-archive deleteIcon" /></div>
				{editText ? <SaveText listId={listId} taskId={task.id} save={saveTaskName} text={task.description}/> :
					<div className={styles.description} onClick={showEditText}>{task.description}</div>
				}
				<Actions />
			</section>
		);
	}
	
}

export default DragSource(ItemTypes.TASK, taskSource, collection)(Task);