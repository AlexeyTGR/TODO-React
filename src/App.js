import React, { useState, useMemo } from 'react';
import './App.css';
import AddItemSection from "./components/AddItemSection";
import TasksList from './components/TasksList';
import TasksFilter from './components/TasksFilter';

const App = () => {

  const [tasksArray, setTasksArray] = useState([]);
  const [lastIdValue, setLastIdValue] = useState(0);
  const [selectAllStatus, setSelectAllStatus] = useState(false);
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

  const toggleSelectAll = () => {
    const updatedArray = tasksArray.map((item) => ({
      ...item,
      status: selectAllStatus ? 'active' : 'complete',
    }));
    setSelectAllStatus(!selectAllStatus);
    setTasksArray(updatedArray);
  };

  const checkActionType = (event) => {
    if (event.key === "Enter") {
      const newTaskText = event.target.value;
      createTask(newTaskText);
      event.target.value = '';
    } else if (event.key === "Escape") {
      event.target.value = '';
    };
  };

  const activeTasksQuantity = useMemo(() => {
    return tasksArray.reduce((acc, item) => {
      if (item.status === "active") {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [tasksArray]);

  const clearComplited = () => {
    const array = tasksArray.filter((item) => {
      return item.status !== 'complete';
    })
    setTasksArray(array)
  }

  return (
    <div className="generalBlock">
      <header className="header">todos</header>
      <div className="todosBlock">
        <AddItemSection
          toggleSelectAll={toggleSelectAll}
          selectAllStatus={selectAllStatus}
          checkActionType={checkActionType}
        />
        <TasksList
          tasksArray={tasksArray}
          setTasksArray={setTasksArray}
          filterValue={filterValue}
        />
        <TasksFilter
          activeTasksQuantity={activeTasksQuantity}
          setFilterValue={setFilterValue}
          clearComplited={clearComplited}
        />
      </div>
      <footer className="footer">
        <p>Double-click to edit a todo</p>
        <p>Created by me</p>
      </footer>
    </div>
  )
}

export default App;
