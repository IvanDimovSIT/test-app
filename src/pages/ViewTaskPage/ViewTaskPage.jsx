import { useParams } from 'react-router-dom';
import { useHistory, useNavigate } from 'react-router-dom';

import "./ViewTaskPage.scss"
import { taskDatasource } from '../../datasource/TaskDatasource';
import React, { useState } from 'react';


export default function ViewTaskPage() {
    const { taskId } = useParams();
    const task = taskDatasource.findById(parseInt(taskId));

    const navigate = useNavigate();

    const [description, setDescription] = useState(task.description);

    const changeDescription = (e) => {
        setDescription(e.target.value);
    };

    const onBackPressed = () => {
        taskDatasource.updateDescription(task.id, description);
        navigate("/");
    };

    return (
        <div className="ViewTaskPageContainer">
            <p>{task.name}</p>
            <p>{task.time} hours</p>
            <p>Completed: {task.isCompleted ? "✔️" : "❌"}</p>
            <p>
                <textarea
                    className="ViewTaskPageDescriptionText"
                    value={description}
                    onChange={changeDescription}
                    placeholder="No description"
                    rows={8}
                    cols={60}
                />
            </p>
            <p>
                <button className="ViewTaskPageBackButton" onClick={onBackPressed}>Back</button>
            </p>
        </div>
    );
}
