import TaskArea from "./TaskArea";

const CurrentTasks = (props) => {
  const array = props.tasksArray.filter((item) => {
    if (props.filterValue === 'all') {
      return true;
    } else if (props.filterValue === 'active') {
      return item.status === 'active';
    } else if (props.filterValue === 'complete') {
      return item.status === 'complete';
    };
  });

  return (
    <div>
      {array.map((item) => {
        return (
          <TaskArea 
            key={item.id}
            deleteTask={props.deleteTask}
            changeStatus={props.changeStatus}
            item={item}/>
        )
      })}
    </div>
  )
}

export default CurrentTasks