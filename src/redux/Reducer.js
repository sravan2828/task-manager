import {createNewTask, updateTaskName, updateListName, deleteTask, moveTask} from "../util";
const INITIAL_STATE = {
	lists: [
		{
			id: 1,
			name: "list one",
			tasks:[
				{
					id: "1",
					priority: "low",
					description: "wear seat belt",
				},
				{
					id: "2",
					priority: "high",
					description: "drive fast in race track",
				},
				{
					id: "3",
					priority: "medium",
					description: "follow daily routine",
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

		case "DELETE_TASK" :
			return {...state, lists: deleteTask(lists, action)};
		case "MOVE_TASK" :
			return {...state, lists: moveTask(lists, action)};
		default:
				return state
	}
};


export default listReducer;