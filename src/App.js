import React, { useState } from 'react';
import './App.css';
import TasksBlock from './components/TasksBlock';

const App = () => {
  return (
    <div className="generalBlock">
    <header className="header">todos</header>
    <div className="todosBlock">
      <TasksBlock />
    </div>
    <footer className="footer">
      <p>Double-click to edit a todo</p>
      <p>Created by me</p>
    </footer>
    </div>
  )
}

export default App;
