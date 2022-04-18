import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodoList } from "../store/todos/actions";
import { setFilterValue } from "../store/todos/actions";

const TasksFilter = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todoList);

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
            onClick={() => {
              dispatch(setFilterValue(filterItem.value));

            }}
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