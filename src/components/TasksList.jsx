import { useMemo } from "react";
import TaskTitle from "./TaskTitle";
import { useSelector, useDispatch } from "react-redux";
import { setTodoList } from "../store/todos/actions";

//const TaskItem
const TasksList = (props) => {
  const dispatch = useDispatch();
  const currentTodoList = useSelector(state => state.todos.todoList);
  const filterValue = useSelector(state => state.todos.filterValue);

  const array = useMemo(() => {
    if (filterValue === 'all') {
      return currentTodoList;
    };

    return currentTodoList.filter((item) => {
      return filterValue === item.status;
    });
  }, [currentTodoList, filterValue]);

  const onChangeText = (text, id) => {
    const updatedArray = currentTodoList.map((item) => {
      if (item.id === id) {
        return {
        ...item,
        value: text,
      }
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
            item={item}
            onChangeText={onChangeText}
          />
        )
      })}
    </div>
  )
}

export default TasksList
//TaskItem