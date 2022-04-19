import { useDispatch } from 'react-redux';
import { deleteTask, changeTaskStatus } from '../store/todos/actions';
import TaskInput from './TaskInput';
import DeleteIcon from '../icons/DeleteIcon.png';
import unCheckedIcon from '../icons/unchecked.png';
import checkedIcon from '../icons/checked.png';

const TaskTitle = (props) => {
  const { item, onChangeText } = props;
  const dispatch = useDispatch();

  const isComplete = item.status === 'complete';
  const checkIcon = isComplete ? checkedIcon : unCheckedIcon;
  const classNameForItem = `task-item__text-block ${isComplete ? 'mark-text' : ''}`;

  const deleteTaskFromArray = (id) => {
    dispatch(deleteTask(id));
  };
  const changeStatus = (id) => {
    dispatch(changeTaskStatus(id));
  };

  return (
    <div className='task-item'>
      <button
        onClick={() => changeStatus(item.id)}
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