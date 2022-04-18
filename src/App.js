import React, { useState, useMemo } from 'react';
import './App.css';
import Header from './components/header';
import AddItemSection from "./components/AddItemSection";
import TasksList from './components/TasksList';
import TasksFilter from './components/TasksFilter';
import Footer from './components/footer';
// import { changeName } from './store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setTodoList } from './store/todos/actions';

const App = () => {

  const [tasksArray, setTasksArray] = useState([]);
  const [lastIdValue, setLastIdValue] = useState(0);
  const [filterValue, setFilterValue] = useState('all');
  const dispatch = useDispatch();

  const prevTodos = state => state.todos.todoList;
  const todos = useSelector(prevTodos)

  
  const createTask = (text) => {
    const lastId = lastIdValue;
    const newId = lastId + 1;
    const newTaskObject = {
      id: newId,
      status: 'active',
      value: text,
    };
    setLastIdValue(newId);
    
    const updatedTasks = [...todos, newTaskObject]
    dispatch(setTodoList(updatedTasks))
    // setTasksArray((prevList) => {
    //   return [...prevList, newTaskObject];
    // });
  };

  const inputActionTypeHandle = (event) => {
    if (event.key === "Enter") {
      const newTaskText = event.target.value;
      createTask(newTaskText);
      event.target.value = '';
    } else if (event.key === "Escape") {
      event.target.value = '';
    };
  };

  const updateTasksArray = (arr) => {

    setTasksArray(arr);
  };
 

  return (

    <div className="general-block">
      <Header />

      <div className="todos-block">
        <AddItemSection
          tasksArray={tasksArray} 
          updateTasksArray={updateTasksArray} 
          onChangeActionType={inputActionTypeHandle}
        />

        <TasksList
          tasksArray={tasksArray}
          updateTasksArray={updateTasksArray}
          filterValue={filterValue}
        />

        <TasksFilter
          onFilterChange={setFilterValue}
          tasksArray={tasksArray}
          updateTasksArray={updateTasksArray}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
