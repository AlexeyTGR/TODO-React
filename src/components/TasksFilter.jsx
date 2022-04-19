import { useSelector, useDispatch } from 'react-redux';
import { setTodoList, setFilterValue } from '../store/todos/actions';
import { activeTasksCounter } from '../store/todos/selectors';

const TasksFilter = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todoList);

  const counter = () => {
   return  useSelector(activeTasksCounter)
  }
  const activeCount = counter();

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
    <div className='bottom-menu button'>
      <span>
        {activeCount} items left
      </span>

      <div>
        {filterOptions.map((filterItem) => (
          <button
            className='button'
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
        className='button'
        onClick={clearComplitedTasks}
      >
        Clear completed
      </button>
    </div>
  );
};

export default TasksFilter;