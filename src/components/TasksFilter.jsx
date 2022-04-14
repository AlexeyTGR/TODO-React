import { useMemo } from "react";

const TasksFilter = (props) => {

  const activeTasksQuantity = useMemo(() => {
    return props.tasksArray.reduce((acc, item) => {
      if (item.status === "active") {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [props.tasksArray]);

  const clearComplited = () => {
    const array = props.tasksArray.filter((item) => {
      return item.status !== 'complete';
    })
    props.updateTasksArray(array)
  }

  return (
    <div className="bottom-menu">
      <span>
        {activeTasksQuantity} items left
      </span>

      <div>
        {filterOptions.map((filterItem) => (
          <button
            key={filterItem.value}
            onClick={() => props.setFilterValue(filterItem.value)}
          >
            {filterItem.title}
          </button>
        ))}
      </div>

      <button
        onClick={clearComplited}
      >
        Clear completed
      </button>
    </div>
  )
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

export default TasksFilter