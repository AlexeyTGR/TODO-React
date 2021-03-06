import { useState } from 'react';

const TaskInput = (props) => {
  const { item, onChangeText: onTextChange } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [state, setState] = useState(item.value);

  const confirmChanges = () => {
    setIsEditing(false);
    onTextChange(state, item.id);
  }
  const checkActionType = (event) => {
    if (event.key === 'Enter') {
      confirmChanges();
    } else if (event.key === 'Escape') {
      setState(item.value);
      setTimeout(() => setIsEditing(false), 0)

      // setIsEditing(false);
    };
  };
  return (
    <div
      className={props.classNameForItem}
      onDoubleClick={() => {
        setIsEditing(!isEditing)
      }}
    >
      {isEditing
        ? (
          <input
            className="task-item__input-block"
            onBlur={confirmChanges}
            value={state}
            onChange={(e) => { setState(e.target.value) }}
            onKeyDown={checkActionType}
            id="text-to-edit"
            name={item.id}
            autoFocus
          />
        )
        : (
          <div>
            {item.value}
          </div>
        )
      }
    </div>
  );
};

export default TaskInput;