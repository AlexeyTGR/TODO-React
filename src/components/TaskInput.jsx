import { useState } from "react"

const TaskInput = (props) => {
  const { item, onChangeText } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [oldInputValue, setOldInputValue] = useState('');
  const checkInputType = () => {
    onChangeText(event.target.value, item.id);
  };
  const checkActionType = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false)
    } else if (event.key === 'Escape') {
      onChangeText(oldInputValue, item.id)
      setIsEditing(false)
    }
  }

  return (
    <div
      className={props.classNameForItem}
      onDoubleClick={() => {
        setIsEditing(!isEditing)
        setOldInputValue(item.value)
      }}
    >
      {isEditing
        ? (
          <input
            value={item.value}
            onChange={checkInputType}
            onKeyDown={checkActionType}
            id="text-to-edit"
            name={item.id}
          />
        )
        : (
          <div>
            {item.value}
          </div>
        )
      }
    </div>
  )
}

export default TaskInput