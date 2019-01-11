import uniqid from "uniqid";
import {createNewTask, updateTaskName, updateListName} from "../util";
const INITIAL_STATE = {
	lists: [
		{
			id: 1,
			name: "list one",
			tasks:[
				{
					id: "1",
					priority: "low",
					description: "create new user",
				},
				{
					id: "2",
					priority: "high",
					description: "breack the glass",
				}
			]
		}
	],
	boardName: "scrum board"
};
// const lists = [
//   {
//     id: 1,
//     name: "first list",
//     tasks: [
//       {
//         id: "1",
//         priority: "LOW",
//         description:"create new user",
//       }
//     ]
//   }
// ];
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

		default:
				return state
	}
};


export default listReducer;