import { useMemo } from "react";
import TaskTitle from "./TaskTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTodoList } from "../store/todos/actions";

const TaskItem = (props) => {
  const dispatch = useDispatch()
  const prevTodos = state => state.todos.todoList;
  const todos = useSelector(prevTodos)

  const array = useMemo(() => {
    if (props.filterValue === 'all') {
      return todos;
    }
    return todos.filter((item) => {
      return props.filterValue === item.status;
    })
  }, [todos, props.filterValue]);

  // const array = useMemo(() => {
  //   if (props.filterValue === 'all') {
  //     return props.tasksArray;
  //   }
  //   return props.tasksArray.filter((item) => {
  //     return props.filterValue === item.status;
  //   })
  // }, [props.tasksArray, props.filterValue]);

  const onChangeText = (text, id) => {
    const updatedArray = todos.map((item) => {
      if(item.id === id) {
        
        item.value = text;
      }
      return item;
    })
    dispatch(setTodoList(updatedArray))
  }

  return (
    <div>
      {array.map((item) => {
        return (
          <TaskTitle 
            key={item.id}
            // deleteTask={props.deleteTask}
            // changeTaskStatus={props.changeTaskStatus}
            item={item}
            // setTasksArray={props.setTasksArray}
            onChangeText={onChangeText}
            />
        )
      })}
    </div>
  )
}

export default TaskItem