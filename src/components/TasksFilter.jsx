const TasksFilter = (props) => {
  const currentFiler = (filterValue) => {
    props.setFilter(filterValue);
  };

  return (
    <div className="bottom-menu">
      <span>{props.quantity}items left</span>
      <div>
        <button
          onClick={() => currentFiler('all')}
        >all</button>
        <button
          onClick={() => currentFiler('active')}
        >active</button>
        <button
          onClick={() => currentFiler('complete')}
        >completed</button>
      </div>
      <button
        onClick={props.clearComplited}
      >
        Clear completed
      </button>
    </div>
  )
}

export default TasksFilter