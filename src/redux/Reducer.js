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
    const {task,listId} = action.payload;
      newLists = lists.map((list) => {
        if(list.id === listId)
        {
          return {
            listId,
            tasks: [...list.tasks,task]
          };
        } else { 
          return list;
        }
      });
      return {...state, lists: newLists};

    default:
        return state
  }
};


export default listReducer;