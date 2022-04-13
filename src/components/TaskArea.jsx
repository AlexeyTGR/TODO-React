import TextArea from "./TextArea";

const TaskArea = (props) => {
  const { item } = props;

  const isComplete = item.status === 'complete'
  const classNameForItem = `taskItem__textBlock ${isComplete ? 'mark-text' : ''}`

  return (
    <div
      className="taskItem"
    >
      <button
        onClick={() => props.changeStatus(item.id)}
        type="button">
        mark
      </button>
      <TextArea 
        value={item.value}
        classNameForItem={classNameForItem}
        />
      <button
        onClick={() => props.deleteTask(item.id)}
        type="button">
        delete
      </button>
    </div>
  )
}

export default TaskArea