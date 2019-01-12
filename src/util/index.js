import uniqid from "uniqid";

export const createNewTask = (lists,action) => {
    const {listId} = action.payload;
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
                        description: ""
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
    const {listId,taskId,description} = action.payload;
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
    const {id,listName} = action.payload;
    const newLists = lists.map((list) => {
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

export const deleteTask = (lists, action) =>{
    const {listId, taskId} = action.payload;
    const newLists = lists.map((list) => {
        if(list.id === listId){
            const filteredTasks = list.tasks.filter(task=>task.id !== taskId);
            return {
                id: list.id,
                name: list.name,
                tasks: filteredTasks
            }
        }
        return list;
    });
    return newLists;
};
