export const createList = list => (
    {
        type: 'CREATE_NEW_LIST',
        payload: list
    }
);

export const createTask = task => (
    {
        type: 'CREATE_NEW_TASK',
        payload: task
    }
);

export const updateListName = list => (
    {
        type: 'UPDATE_LIST_NAME',
        payload: list
    }
);

export const updateTaskName = list => (
    {
        type: 'UPDATE_TASK_NAME',
        payload: list
    }
);

export const deleteTask = data => (
    {
        type: 'DELETE_TASK',
        payload: data
    }
);

export const moveTask = data => (
    {
        type: "MOVE_TASK",
        payload: data
    }
);