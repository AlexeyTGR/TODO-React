import unCheckedIcon from "../icons/unchecked.png";
import checkedIcon from "../icons/checked.png"
import { useState } from "react";

const AddItemSection = (props) => {
  const [selectAllStatus, setSelectAllStatus] = useState(false);

  const toggleSelectAll = () => {
    const updatedArray = props.tasksArray.map((item) => ({
      ...item,
      status: selectAllStatus ? 'active' : 'complete',
    }));
    setSelectAllStatus(!selectAllStatus);
    props.updateTasksArray(updatedArray);
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
  )
}

export default AddItemSection