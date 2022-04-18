import { useState } from "react"

const TaskInput = (props) => {
  const { item, onChangeText: onTextChange } = props;
  const [isEditing, setIsEditing] = useState(false);
  // const [oldInputValue, setOldInputValue] = useState('');
  const [state, setState] = useState(item.value);
  let textValueBeforeEdit = '';
  // const checkInputType = (event) => {
  //   onTextChange(event.target.value, item.id);
  // };

  const confirmChanges = () => {
    setIsEditing(false);
    onTextChange(state, item.id);
  }
  const checkActionType = (event) => {
    if (event.key === 'Enter') {
      confirmChanges()
    } else if (event.key === 'Escape') {
      setState(item.value)
      // onTextChange(oldInputValue, item.id)
      setIsEditing(false)
    } 
  }

  return (
    <div
      className={props.classNameForItem}
      onDoubleClick={() => {
        setIsEditing(!isEditing)
        // setOldInputValue(item.value)
        textValueBeforeEdit = item.value
        console.log('textValueBeforeEdit',textValueBeforeEdit);
      }}
    >
      {isEditing
        ? (
          <input 
            className="task-item__input-block"
            onBlur={confirmChanges}
            value={state}
            // onChange={checkInputType}
            onChange={(e) => setState(e.target.value)}
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
  )
}

export default TaskInput