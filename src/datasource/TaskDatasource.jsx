let tasks = [];
let idCounter = 1;

const addTask = (task) => {
    tasks.push(
        { 
            id: idCounter++,
            name: task.name,
            time: task.time,
            isCompleted: false,
            description: "" 
        }
    );

    console.log("TaskDatasource: task added:", tasks.at(tasks.length-1));
};

const complete = (task) => {
    tasks.forEach(i => {
        if(i.id === task.id){
            i.isCompleted = true;
        }
    });
};

const updateDescription = (id, description) => {
    let updatedCount = 0;
    for (const task of tasks) {
        if (task.id === id) {
          task.description = description;
          updatedCount++;
        }
    }
    console.log("TaskDatasource: Updated rows:", updatedCount);
}

const findById = (id) => {
    for (const task of tasks) {
        if (task.id === id) {
          return task;
        }
    }

    return null;
};

const getTasks = () => {
    return tasks;
};

const exportedFunctions = {
    addTask,
    complete,
    updateDescription,
    findById,
    getTasks
};

export default exportedFunctions;
