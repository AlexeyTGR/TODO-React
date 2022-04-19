import { useSelector, useDispatch } from 'react-redux';
import { setTodoList } from '../store/todos/actions';
import TaskInput from './TaskInput';
import DeleteIcon from '../icons/DeleteIcon.png';
import unCheckedIcon from '../icons/unchecked.png';
import checkedIcon from '../icons/checked.png'

const TaskTitle = (props) => {
  const { item, onChangeText } = props;
  const isComplete = item.status === 'complete';
  const checkIcon = isComplete ? checkedIcon : unCheckedIcon;
  const classNameForItem = `task-item__text-block ${isComplete ? 'mark-text' : ''}`;
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todoList);

  const deleteTaskFromArray = (id) => {
    const updatedArray = todoList.filter((item) => {
      console.log(item);
      return item.id !== id;
    });
    dispatch(setTodoList(updatedArray));
  };

  const changeTaskStatus = (id) => {
    const updatedArray = todoList.map((item) => {
      if (item.id !== id) {
        return item;
      }
      return {
        ...item,
        status: item.status === 'active' ? 'complete' : 'active'
      };
    });
    dispatch(setTodoList(updatedArray));
  };

  return (
    <div className='task-item'>
      <button
        onClick={() => changeTaskStatus(item.id)}
        className='button'
      >
        <img
          className='icon'
          src={checkIcon}
        />
      </button>

      <TaskInput
        item={props.item}
        value={item.value}
        classNameForItem={classNameForItem}
        onChangeText={onChangeText}
      />

      <button
        onClick={() => deleteTaskFromArray(item.id)}
        className='button'
      >
        <img
          className='icon'
          src={DeleteIcon}
        />
      </button>
    </div>
  );
};

export default TaskTitle;