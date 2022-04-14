import React, { useState, useMemo } from 'react';
import './App.css';
import Header from './components/header';
import AddItemSection from "./components/AddItemSection";
import TasksList from './components/TasksList';
import TasksFilter from './components/TasksFilter';
import Footer from './components/footer';

const App = () => {

  const [tasksArray, setTasksArray] = useState([]);
  const [lastIdValue, setLastIdValue] = useState(0);
  const [filterValue, setFilterValue] = useState('all');

  const createTask = (text) => {
    const lastId = lastIdValue;
    const newId = lastId + 1;
    const newTaskObject = {
      id: newId,
      status: 'active',
      value: text,
    };
    setLastIdValue(newId);
    setTasksArray((prevList) => {
      return [...prevList, newTaskObject];
    });
  }

  const checkActionType = (event) => {
    if (event.key === "Enter") {
      const newTaskText = event.target.value;
      createTask(newTaskText);
      event.target.value = '';
    } else if (event.key === "Escape") {
      event.target.value = '';
    };
  };

  const updateTasksArray = (arr) => {
    setTasksArray(arr)
  }

  return (
    <div className="generalBlock">
      <Header />
      <div className="todosBlock">
        <AddItemSection
          tasksArray={tasksArray}
          updateTasksArray={updateTasksArray}
          checkActionType={checkActionType}
        />
        <TasksList
          tasksArray={tasksArray}
          setTasksArray={setTasksArray}
          filterValue={filterValue}
        />
        <TasksFilter
          setFilterValue={setFilterValue}
          tasksArray={tasksArray}
          updateTasksArray={updateTasksArray}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App;
