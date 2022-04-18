import unCheckedIcon from "../icons/unchecked.png";
import checkedIcon from "../icons/checked.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTodoList } from "../store/todos/actions";

const AddItemSection = (props) => {
  const [selectAllStatus, setSelectAllStatus] = useState(false);
  const dispatch = useDispatch();
  const currentTodos = (state) => state.todos.todoList;
  const todosArray = useSelector(currentTodos);

  const toggleSelectAll = () => {
    const updatedArray = todosArray.map((item) => ({
      ...item,
      status: selectAllStatus ? 'active' : 'complete',
    }));
    setSelectAllStatus(!selectAllStatus);
    dispatch(setTodoList(updatedArray));
  };

  const selectAllIcon = selectAllStatus
    ? checkedIcon
    : unCheckedIcon;

  return (
    <div className="new-task-block">
      <button
        className="button"
        onClick={toggleSelectAll}
      >
        <img
          className="icon"
          src={selectAllIcon}
        />
      </button>

      <input
        id="new-task"
        type="text"
        name="new-task"
        placeholder="What needs to be done?"
        onKeyDown={props.onChangeActionType}
      />
    </div>
  );
};

export default AddItemSection;