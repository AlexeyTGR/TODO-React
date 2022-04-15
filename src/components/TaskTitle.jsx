import TaskInput from "./TaskInput";
import DeleteIcon from "../icons/DeleteIcon.png";
import unCheckedIcon from "../icons/unchecked.png";
import checkedIcon from "../icons/checked.png"

const TaskTitle = (props) => {
  const { item, onChangeText } = props;
  const isComplete = item.status === 'complete'
  const checkIcon = isComplete ? checkedIcon : unCheckedIcon
  const classNameForItem = `taskItem__textBlock ${isComplete ? 'mark-text' : ''}`

  return (
    <div className="taskItem">
      <button
        onClick={() => props.changeStatus(item.id)}
        className="button"
      >
        <img
          className="icon"
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
        onClick={() => props.deleteTask(item.id)}
        className="button"
      >
        <img
          className="icon"
          src={DeleteIcon}
        />
      </button>
    </div>
  )
}

export default TaskTitle