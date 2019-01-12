import {createNewTask, updateTaskName, updateListName, deleteTask, moveTask} from "../util";
import {initialList} from "../constants";

const INITIAL_STATE = {
	lists: initialList,
	boardName: "scrum board"
};

const listReducer = (state = INITIAL_STATE, action) => {

	const { lists } = state;
	let newLists = [];
	
	switch (action.type) {
		case "CREATE_NEW_LIST" :
			let list = action.payload;
			newLists = [...lists, list];
			return {...state, lists: newLists};

		case "CREATE_NEW_TASK" :
			return {...state, lists: createNewTask (lists, action)};

		case "UPDATE_LIST_NAME" :
			return {...state, lists: updateListName (lists, action)};

		case "UPDATE_TASK_NAME" :
			return {...state, lists: updateTaskName (lists, action)};

		case "DELETE_TASK" :
			return {...state, lists: deleteTask(lists, action)};
		case "MOVE_TASK" :
			return {...state, lists: moveTask(lists, action)};
		default:
				return state
	}
};


export default listReducer;