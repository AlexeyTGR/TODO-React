import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import AddItemSection from "./components/AddItemSection";
import TasksList from './components/TasksList';
import TasksFilter from './components/TasksFilter';
import Footer from './components/footer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setTodoList } from './store/todos/actions';

const App = () => {
  const [lastIdValue, setLastIdValue] = useState(0);
  const dispatch = useDispatch();
  const prevTodos = (state) => state.todos.todoList;
  const todos = useSelector(prevTodos);

  const createTask = (text) => {
    const lastId = lastIdValue;
    const newId = lastId + 1;
    const newTaskObject = {
      id: newId,
      status: 'active',
      value: text,
    };
    setLastIdValue(newId);
    const updatedTasks = [...todos, newTaskObject];
    dispatch(setTodoList(updatedTasks))
  };

  const inputActionTypeHandle = (event) => {
    if (event.key === "Enter") {
      const newTaskText = event.target.value.trim();
      if (newTaskText !== ''){
        createTask(newTaskText);
        };
      event.target.value = '';
    } else if (event.key === "Escape") {
      event.target.value = '';
    };
  };

  return (

    <div className="general-block">
      <Header />

      <div className="todos-block">
        <AddItemSection
          onChangeActionType={inputActionTypeHandle}
        />
        <TasksList />
        <TasksFilter />
      </div>

      <Footer />
    </div>
  );
};

export default App;
