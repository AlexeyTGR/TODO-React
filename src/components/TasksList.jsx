import React from "react";
import TasksItem from "./TasksItem";
import { useSelector } from "react-redux";
import { dispatch } from "react";
import { setTodoList } from "../store/todos/actions";

const TasksList = (props) => {

  const prevTodos = state => state.todos.todoList;
  const todos = useSelector(prevTodos)

  // const deleteTaskFromArray = (id) => {
  //   const updatedArray = todos.filter((item) => {
  //     return item.id !== id
  //   })
  //   dispatch(setTodoList(updatedArray))
  // };
  // const deleteTaskFromArray = (id) => {
  //   const updatedArray = props.tasksArray.filter((item) => {
  //     return item.id !== id
  //   })
  //   props.updateTasksArray(updatedArray);
  // };

  // const taskStatusHandle = (id) => {
  //   const updatedArray = props.tasksArray.map((item) => {
  //     if (item.id !== id) {
  //       return item
  //     }
  //     return {
  //       ...item,
  //       status: item.status === 'active' ? 'complete' : 'active'
  //     }
  //   })
  //   props.updateTasksArray(updatedArray);
  // };
  return (
    <div>
      <TasksItem
        tasksArray={props.tasksArray}
        // deleteTask={deleteTaskFromArray}
        // changeTaskStatus={taskStatusHandle}
        filterValue={props.filterValue}
        setTasksArray={props.updateTasksArray}
      />
    </div>
  );
};

export default TasksList