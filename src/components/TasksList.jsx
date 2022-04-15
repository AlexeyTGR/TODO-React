
import TasksItem from "./TasksItem";

const TasksList = (props) => {

  const deleteTaskFromArray = (id) => {
    const updatedArray = props.tasksArray.filter((item) => {
      return item.id !== id
    })
    props.setTasksArray(updatedArray);
  };

  const changeStatus = (id) => {
    const updatedArray = props.tasksArray.map((item) => {
      if (item.id !== id) {
        return item
      }
      return {
        ...item,
        status: item.status === 'active' ? 'complete' : 'active'
      }
    })
    props.setTasksArray(updatedArray);
  };
  return (
    <div>
      <TasksItem
        tasksArray={props.tasksArray}
        deleteTask={deleteTaskFromArray}
        changeStatus={changeStatus}
        filterValue={props.filterValue}
        setTasksArray={props.setTasksArray}
      />
    </div>
  );
};

export default TasksList