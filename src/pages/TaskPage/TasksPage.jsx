import "./TasksPage.scss";
import TaskList from "../../TaskList/TaskList";
import TaskForm from "../../TaskForm/TaskForm";
import React, { useState, useEffect } from 'react';
import TaskService from "../../service/TaskService";

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tasksData = await TaskService.getTasks();
                setTasks(tasksData);
            } catch (error) {
                console.error('Error fetching tasks:', error.message);
            }
        };
        fetchData();}, []);

    const deleteTasks = async () => {
        console.log("deleteing completed tasks");
        try {
            const remainingTasks = await TaskService.removeCompleted();
            setTasks(remainingTasks);
            console.log("Removed tasks");
        }catch (error) {
            console.error('Error removing task:', error.message);
        }
    }

    const taskAddedListener = async (task) => {
        try {
            const addedTask = await TaskService.addTask(task);
            setTasks(prevTasks => [...prevTasks, addedTask]);
        } catch (error) {
            console.error('Error adding task:', error.message);
        }
    };

    const taskCompletedListener = async (task) => {
        try {
            const completedTask = await TaskService.complete(task);
            setTasks(prevTasks => prevTasks.map(t => (t.id === completedTask.id ? { ...t, isCompleted: true }: t)));
        } catch (error) {
        console.error('Error completing task:', error.message);
        }
    };

    return (
        <div className="TaskPageContainer">
            <TaskForm onTaskAdded={taskAddedListener} onDeleteTasks={deleteTasks}/>
            <TaskList tasks={tasks} onCompleted={taskCompletedListener}/>
        </div>
    );
};

export default TaskPage;
