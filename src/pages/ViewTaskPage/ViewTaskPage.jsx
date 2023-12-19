import "./ViewTaskPage.scss";
import ViewTaskDescription from '../../ViewTaskDescription/ViewTaskDescription';
import { useParams } from 'react-router-dom';

const ViewTaskPage = () => {
    const { taskId } = useParams();

    return (<ViewTaskDescription taskId={taskId}/>);
};

export default ViewTaskPage;
