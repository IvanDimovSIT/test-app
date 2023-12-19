
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskPage from './pages/TaskPage/TasksPage.jsx';
import ViewTaskPage from './pages/ViewTaskPage/ViewTaskPage.jsx';
import Page404 from './pages/Page404/Page404.jsx';

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="view/:taskId" element={<ViewTaskPage/>}/>
        <Route path="404" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );

}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);