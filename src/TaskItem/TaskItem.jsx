import { useHistory, useNavigate } from 'react-router-dom';
import React from 'react';


import "./TaskItem.scss"

export default function TaskItem({task, onCompleted}){
    const navigate = useNavigate();

    const handleViewClick = () => {
        navigate(`/view/${task.id}`);
    };


    return (
        <ul className="TaskItemContainer">
            <li>Task:{task.name}</li>
                
            <li>How long to complete:{task.time} hours</li>
                
            <li>Completed:{task.isCompleted? "✔️":"❌"}</li>

            <li>
            <button className="TaskItemViewButton" onClick={handleViewClick}>View</button>
            {task.isCompleted? 
                null :
                <button className="TaskItemCompleteButton" onClick={() => onCompleted(task)}>Complete</button>
            }
            </li>
        </ul>
    );
}

