//use item type to handle diffrent types of drap items and and drop target
export const ItemTypes = {
    TASK: 'task'
};

//static list for demo purpose
export const initialList = [
    {
        id: 1,
        name: "Pending",
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
    },
    {
        id: 2,
        name: "in Progress",
        tasks:[
            {
                id: "4",
                priority: "medium",
                description: "clear browser cache",
            },
            {
                id: "5",
                priority: "low",
                description: "do hard refresh on screen",
            },
            {
                id: "6",
                priority: "high",
                description: "restart web browser",
            },
            {
                id: "7",
                priority: "high",
                description: "restart your computer",
            }
        ]
    },
    {
        id: 3,
        name: "Completed",
        tasks:[
            {
                id: "8",
                priority: "high",
                description: "finished breakfast",
            },
            {
                id: "5",
                priority: "low",
                description: "had a big lunch",
            }
        ]
    }
];