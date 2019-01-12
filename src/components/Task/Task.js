import React, {Component} from 'react';
import Actions from  "./Actions";
import SaveText from "../SaveText";
import styles from "./styles.module.css";
import { DragSource } from 'react-dnd';
import {ItemTypes} from "../../constants";

const taskSource = {
	beginDrag: function (props){
		return {...props}
	},
	endDrag: function (props, monitor){
		//if the item is drapped in a target block
		if(monitor.didDrop()){
			
			//get the data from drop target
			const {targetListId} = monitor.getDropResult();
			const {listId, task} = props;

			//move item from one list to another
			props.moveTask({
				targetListId,
				sourceListId: listId,
				taskId: task.id,
				description: task.description,
				priority: task.priority
			});
		}
	}
}

function collection(connect, monitor){
	return {
		//to make the item draggable we have to wrap with this function
		connectDragSource: connect.dragSource(),
		//to know if the item is being dragged
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

		//show gradient line while dragging
		if(isDragging) {
			return<section className={`${styles.task} ${styles.movingTask}`} ></section>
		}
		
		//draggable item wrapped with connectDragSource
		return connectDragSource(
			<section className={styles.task}>
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