import { useMemo } from "react";

const TasksFilter = (props) => {

  const activeTasksCounter = useMemo(() => {
    return props.tasksArray.reduce((acc, item) => {
      if (item.status === "active") {
        return acc + 1;
      };
      return acc;
    }, 0);
  }, [props.tasksArray]);

  const clearComplitedTasks = () => {
    const array = props.tasksArray.filter((item) => {
      return item.status !== 'complete';
    });
    props.updateTasksArray(array);
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
    <div className="bottom-menu">
      <span>
        {activeTasksCounter} items left
      </span>

      <div>
        {filterOptions.map((filterItem) => (
          <button
            key={filterItem.value}
            onClick={() => props.onFilterChange(filterItem.value)}
          >
            {filterItem.title}
          </button>
        ))}
      </div>

      <button
        onClick={clearComplitedTasks}
      >
        Clear completed
      </button>
    </div>
  );
};

export default TasksFilter;