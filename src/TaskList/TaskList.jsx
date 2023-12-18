import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.scss"

const TaskList = ({tasks, onCompleted}) => {
   console.log("TaskList: receives ", tasks);

    if(tasks.length === 0){
        return (<p className="TaskListNoTasks">No tasks have been added</p>);
    }

    return (
        <ul className="TaskListContainer">
            {tasks.map((i) => {return <li key={i.id}><TaskItem task={i} onCompleted={onCompleted}/></li>})}
        </ul>
    );
};

export default TaskList;
