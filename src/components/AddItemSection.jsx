import { useSelector, useDispatch } from 'react-redux';
import unCheckedIcon from '../icons/unchecked.png';
import checkedIcon from '../icons/checked.png';
import { toggleSelectAll, setToggleSelectAllStatus } from '../store/todos/actions';

const AddItemSection = (props) => {
  const dispatch = useDispatch();
  const selectAllStatus = useSelector((state) => state.todos.selectAllStatus);

  const toggleSelect = () => {
    dispatch(toggleSelectAll(selectAllStatus));
    dispatch(setToggleSelectAllStatus(!selectAllStatus));
  };
  const selectAllIcon = selectAllStatus
    ? checkedIcon
    : unCheckedIcon;

  return (
    <div className='new-task-block'>
      <button
        className='button'
        onClick={toggleSelect}
      >
        <img
          className='icon'
          src={selectAllIcon}
        />
      </button>

      <input
        id='new-task'
        type='text'
        name='new-task'
        placeholder='What needs to be done?'
        onKeyDown={props.onChangeActionType}
      />
    </div>
  );
};

export default AddItemSection;