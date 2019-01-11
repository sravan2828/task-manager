import uniqid from "uniqid";

export const createNewTask = (lists,action) => {
    let {listId} = action.payload;
    const newLists = lists.map((list) => {
        if(list.id === listId)
        {
            return {
                id:listId,
                name: list.name,
                tasks: [
                    ...list.tasks,
                    {
                        id: uniqid(),
                        priority: "medium",
                        text: ""
                    }
                ]
            };
        } else { 
            return list;
        }
    });
    return newLists;
}

export const updateTaskName = (lists,action) => {
    let {listId,taskId,description} = action.payload;
	const newLists = lists.map((list) => {
			if(list.id === listId){
				const newTasks = list.tasks.map((task) => {
					const {id, priority} = task;
					if(id === taskId){
						return {
							id,
							priority,
							description
						}
					}
					return task;
				});
				return {
					id: list.id,
					name: list.name,
					tasks: newTasks
				}
			}
			return list;
        });
    return newLists;
};

export const updateListName = (lists,action) => {
    let newLists = [];
    let {id,listName} = action.payload;
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
    return newLists;
};
