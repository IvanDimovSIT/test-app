import { useNavigate } from 'react-router-dom';

import "./ViewTaskDescription.scss";
import React, { useState, useEffect } from 'react';
import TaskService from "../service/TaskService";

const ViewTaskDescription = ({taskId}) => {
    const navigate = useNavigate();

    const [task, setTask] = useState({});
    const [description, setDescription] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const taskData = await TaskService.findById(parseInt(taskId));
                setTask(taskData);
                setDescription(taskData.description);
            } catch (error) {
                console.error(`Error fetching task: ${error.message}`);
                navigate(`/404`);
            }
        };
        fetchData();
        }, [taskId]);

    const changeDescription = (e) => {
        setDescription(e.target.value);
    };

    const onBackPressed = () => {
        try {
            TaskService.updateDescription(task.id, description);
            navigate("/");
        } catch (error) {
            console.error(`Error updating description: ${error.message}`);
        }
    };

    return (
        <div className="ViewTaskDescriptionContainer">
            <p>{task.name}</p>
            <p>{task.time} hours</p>
            <p>Completed: {task.isCompleted ? "✔️" : "❌"}</p>
            <p>
            <textarea
                className="ViewTaskDescriptionText"
                value={description}
                onChange={changeDescription}
                placeholder="No description"
                rows={8}
                cols={60}
            />
            </p>
            <p>
                <button className="ViewTaskDescriptionBackButton" onClick={onBackPressed}>Back</button>
            </p>
        </div>);
};

export default ViewTaskDescription;
