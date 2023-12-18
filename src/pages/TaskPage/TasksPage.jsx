import "./TasksPage.scss"
import TaskList from "../../TaskList/TaskList"
import TaskForm from "../../TaskForm/TaskForm";
import React, { useState } from 'react';
import exportedFunctions from "../../datasource/TaskDatasource";


const TaskPage = () => {
    const [tasks, setTasks] = useState(exportedFunctions.getTasks());

    const taskAddedListener = (task) => {
        
        exportedFunctions.addTask(task);
        setTasks([...exportedFunctions.getTasks()]); // <------- !!!!
    };

    const taskCompletedListener = (task) =>{
        console.log("TaskPage: task completed:", task);
        exportedFunctions.complete(task);
        setTasks([...exportedFunctions.getTasks()]); // <------- !!!!
        
    };

    return ( 
    <div className="TaskPageContainer">
        <TaskForm onTaskAdded={taskAddedListener}/>
        <TaskList tasks={tasks} onCompleted={taskCompletedListener}/>
    </div>
    );
};

export default TaskPage;
