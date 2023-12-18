import axios from 'axios';

const baseUrl = "http://localhost:8080/task";

const addTask = async (taskDTO) => {
    try {
        const response = await axios.post(`${baseUrl}`, taskDTO);
        return response.data;
    } catch (error) {
        console.error(`Error adding task: ${error.message}`);
        throw new Error(`Failed to add task: ${error.message}`);
    }
};

const getTasks = async () => {
    try {
        const response = await axios.get(`${baseUrl}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching tasks: ${error.message}`);
        throw new Error(`Failed to fetch tasks: ${error.message}`);
    }
};

const getTaskById = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching task: ${error.message}`);
      throw new Error(`Failed to fetch task: ${error.message}`);
    }
};

const updateTask = async (id, taskDTO) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, taskDTO);
      return response.data;
    } catch (error) {
      console.error(`Error updating task: ${error.message}`);
      throw new Error(`Failed to update task: ${error.message}`);
    }
};

const removeCompletedTasks = async () => {
    try {
        const response = await axios.delete(`${baseUrl}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching tasks: ${error.message}`);
        throw new Error(`Failed to fetch tasks: ${error.message}`);
    }
};

const TaskDatasource = {
    addTask,
    getTasks,
    getTaskById,
    updateTask,
    removeCompletedTasks
};

export default TaskDatasource;
