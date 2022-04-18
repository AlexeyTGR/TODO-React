import { useMemo } from "react";
import { useSelector } from "react-redux";
import { setTodoList } from "../store/todos/actions";
import { useDispatch } from "react-redux";

const TasksFilter = (props) => {
  const dispatch = useDispatch()
  const prevTodos = state => state.todos.todoList;
  const todos = useSelector(prevTodos)

  const activeTasksCounter = useMemo(() => {
    return todos.reduce((acc, item) => {
      if (item.status === "active") {
        return acc + 1;
      };
      return acc;
    }, 0);
  }, [todos]);

  const clearComplitedTasks = () => {
    const updatedArray = todos.filter((item) => {
      return item.status !== 'complete';
    });
    dispatch(setTodoList(updatedArray));
  };
  const filterOptions = [
    {
      title: 'all',
      value: 'all',
    },
    {
      title: 'active',
      value: 'active',
    },
    {
      title: 'complete',
      value: 'complete',
    },
  ];

  return (
    <div className="bottom-menu button">
      <span>
        {activeTasksCounter} items left
      </span>

      <div>
        {filterOptions.map((filterItem) => (
          <button
            className="button"
            key={filterItem.value}
            onClick={() => props.onFilterChange(filterItem.value)}
          >
            {filterItem.title}
          </button>
        ))}
      </div>

      <button 
        className="button"
        onClick={clearComplitedTasks}
      >
        Clear completed
      </button>
    </div>
  );
};

export default TasksFilter;