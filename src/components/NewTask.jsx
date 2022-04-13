import { useState } from "react";

const NewTask = (props) => {
  let [idCounter, setIdCounter] = useState(0);

  const createTask = (text) => {

    const newTaskObject = {
      id: idCounter++,
      status: 'active',
      value: text,
    };
    props.addTaskToTasksArray(newTaskObject);
    setIdCounter(idCounter);
  }

  const checkActionType = (event) => {
    if (event.key === "Enter") {
      const newTaskText = event.target.value;
      createTask(newTaskText);
      event.target.value = '';
    } else if (event.key === "Escape") {
      event.target.value = '';
    }
  }

  const selectAll = () => {
    props.toggleSelectAll();
  };

  return (
    <div className="new-task-block">
      <button 
        onClick={selectAll}
      >
        mark all
      </button>
      <input
        id="new-task"
        type="text"
        name="new-task" 
        placeholder="What needs to be done?"
        onKeyDown={checkActionType}
      />
    </div>
  )
}

export default NewTask