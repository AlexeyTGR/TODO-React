import unCheckedIcon from "../icons/unchecked.png";
import checkedIcon from "../icons/checked.png"

const AddItemSection = (props) => {
  const checkAction = (event) => {
    props.checkActionType(event)
  }

  const selectAllIcon = props.selectAllStatus 
    ? checkedIcon
    : unCheckedIcon;

  return (
    <div className="new-task-block">
      <button 
        className="button"
        onClick={props.toggleSelectAll}
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
        onKeyDown={checkAction}
        // value={}
        // onChange={}
      />
    </div>
  )
}

export default AddItemSection