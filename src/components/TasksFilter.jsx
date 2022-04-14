const TasksFilter = (props) => {
  const currentFiler = (filterValue) => {
    props.setFilterValue(filterValue);
  };
  return (
    <div className="bottom-menu">
      <span>
        {props.activeTasksQuantity} items left
      </span>

      <div>
        {filterOptions.map((filterItem) => (
          <button
            key={filterItem.value}
            onClick={() => currentFiler(filterItem.value)}
          >
            {filterItem.title}
          </button>
        ))}
      </div>

      <button
        onClick={props.clearComplited}
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