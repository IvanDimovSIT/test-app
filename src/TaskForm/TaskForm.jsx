import { AddTaskDTO } from "../dtos/AddTaskDTO";
import "./TaskForm.scss"
import React, { useState } from 'react';

function validateForm(taskname, time){
    if(!taskname || taskname.trim() === ""){
        return "Enter task name";
    }else if(!time || time.trim() === ""){
        return "Enter time to complete";
    }

    const parsedTime = parseInt(time, 10);
    if (isNaN(parsedTime) || parsedTime <= 0 || parsedTime > 100) {
        return "Time must be a number between 1 and 100";
    }else{
        return null;
    }
}

export default function TaskForm({onTaskAdded}){
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState(null);

    const clearInputs = () => {
        setInputs(values => ({...values, ["taskname"]: ""}))
        setInputs(values => ({...values, ["time"]: ""}))
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationResult = validateForm(inputs.taskname, inputs.time);
        setError(validationResult);

        if(validationResult === null){
            onTaskAdded(new AddTaskDTO(inputs.taskname, inputs.time));
            clearInputs();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="TaskFormContainer">
            <label className="TaskFormTaskName">Enter Task:
                <input 
                    onChange={handleChange}
                    type="text" 
                    placeholder="Task Name"
                    name="taskname"
                    value={inputs.taskname || ""}
                />
            </label>
            <label className="TaskFormTaskTime">Enter time to complete:
                <input 
                    type="number"
                    placeholder="Time in hours"
                    name="time" 
                    value={inputs.time || ""} 
                    onChange={handleChange}
                />
            </label>
            <input className="TaskFormAddButton" value={"Add"} type="submit"/>
            <label className="TaskFormErrorText">{error || ""}</label>
        </form>
    );
}