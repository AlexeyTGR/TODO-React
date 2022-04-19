import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue, clearCompletedTasks } from '../store/todos/actions';
import { todoListSelector } from '../store/todos/selectors';

const TasksFilter = () => {
  const { activeTasksCounter } = useSelector(todoListSelector);
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todoList);

  const clearComplitedTasksHandle = () => {
    dispatch(clearCompletedTasks(todoList));
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
      <span className='bottom-menu__active-task-counter'>
        {activeTasksCounter} items left
      </span>

      <div className='bottom-menu__filters'>
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
        onClick={clearComplitedTasksHandle}
      >
        Clear completed
      </button>
    </div>
  );
};

export default TasksFilter;