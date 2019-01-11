import uniqid from "uniqid";

const newTask = {
  id: uniqid(),
  priority: "medium",
  text: ""
}

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
//     listId: "1",
//     listName: "first list",
//     tasks: [
//       {
//         id: "1",
//         priority: "LOW",
//         text:"create new user",
//       }
//     ]
//   }
// ];
const listReducer = (state = INITIAL_STATE, action) => {

  const { lists } = state;
	let newLists = [];
	
  switch (action.type) {
    case "CREATE_LIST" :
      let list = action.payload;
      newLists = [...lists, list];
      return {...state, lists: newLists};

    case "CREATE_TASK" :
    const {listId} = action.payload;
      newLists = lists.map((list) => {
        if(list.id === listId)
        {
          return {
            id:listId,
            name: list.name,
            tasks: [...list.tasks,newTask]
          };
        } else { 
          return list;
        }
      });
      return {...state, lists: newLists};

    case "UPDATE_TASK_NAME" :
      console.log(action.payload);
      let {id,listName} = action.payload;
      debugger;
      newLists = lists.map((list) => {
        if(list.id === id){
          return {
            id,
            name:listName,
            tasks: list.tasks
          }
        }
        return list;
      });
      return {...state, lists: newLists};

    default:
        return state
  }
};


export default listReducer;