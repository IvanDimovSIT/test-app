import TaskDatasource from "../datasource/TaskDatasource";

const addTask = async (task) => {
    try {
        const addedTask = await TaskDatasource.addTask({
        name: task.name,
        time: task.time,
        isCompleted: false,
        description: ""
    });

    return addedTask;
    } catch (error) {
        console.error(`Error adding task: ${error.message}`);
        throw new Error(`Failed to add task: ${error.message}`);
    }
};

const complete = async (task) => {
  try {
    const foundTask = await TaskDatasource.getTaskById(task.id);

    if (foundTask.isCompleted) {
      return foundTask;
    }

    foundTask.isCompleted = true;
    const updatedTask = await TaskDatasource.updateTask(foundTask.id, foundTask);

    return updatedTask;
  } catch (error) {
    console.error(`Error completing task: ${error.message}`);
    throw new Error(`Failed to complete task: ${error.message}`);
  }
};

const updateDescription = async (id, description) => {
  try {
    const task = await TaskDatasource.getTaskById(id);
    task.description = description;

    const updatedTask = await TaskDatasource.updateTask(id, task);

    return updatedTask;
  } catch (error) {
    console.error(`Error updating description: ${error.message}`);
    throw new Error(`Failed to update description: ${error.message}`);
  }
};

const findById = async (id) => {
  try {
    const task = await TaskDatasource.getTaskById(id);
    return task;
  } catch (error) {
    console.error(`Error finding task by ID: ${error.message}`);
    throw new Error(`Failed to find task by ID: ${error.message}`);
  }
};

const getTasks = async () => {
    try {
        const tasks = await TaskDatasource.getTasks();
        return tasks;
    } catch (error) {
        console.error(`Error getting tasks: ${error.message}`);
        throw new Error(`Failed to get tasks: ${error.message}`);
    }
};

const removeCompleted = async () => {
    try {
        const tasks = await TaskDatasource.removeCompletedTasks();
        return tasks;
    } catch (error) {
        console.error(`Error getting tasks: ${error.message}`);
        throw new Error(`Failed to get tasks: ${error.message}`);
    }
};

const TaskService = {
    addTask,
    complete,
    updateDescription,
    findById,
    getTasks,
    removeCompleted
};

export default TaskService;
