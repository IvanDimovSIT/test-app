import "./TasksPage.scss"
import TaskList from "../../TaskList/TaskList"
import { taskDatasource } from "../../datasource/TaskDatasource";
import TaskForm from "../../TaskForm/TaskForm";
import React, { useState } from 'react';


export default function TaskPage(){
    const [tasks, setTasks] = useState(taskDatasource.getTasks());

    const taskAddedListener = (taskDTO) => {
        taskDatasource.addTask(taskDTO);
        setTasks([...taskDatasource.getTasks()]); // <------- !!!!
    };

    const taskCompletedListener = (task) =>{
        console.log("task completed:", task);
        taskDatasource.complete(task);
        setTasks([...taskDatasource.getTasks()]); // <------- !!!!
    };

    return ( 
    <div className="TaskPageContainer">
        <TaskForm onTaskAdded={taskAddedListener}/>
        <TaskList tasks={tasks} onCompleted={taskCompletedListener}/>
    </div>
    );
}

