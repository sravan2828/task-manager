export const createList = list => (
    {
        type: 'CREATE_LIST',
        payload: list
    }
);

export const createTask = task => (
    {
        type: 'CREATE_TASK',
        payload: task
    }
);

export const updateListName = list => (
    {
        type: 'UPDATE_TASK_NAME',
        payload: list
    }
);