import { useMemo } from "react";
import TaskArea from "./TaskArea";

const TaskItem = (props) => {

  const array = useMemo(() => {
    if (props.filterValue === 'all') {
      return props.tasksArray;
    }
    return props.tasksArray.filter((item) => {
      return props.filterValue === item.status;
    })
  }, [props.tasksArray, props.filterValue]);

  return (
    <div>
      {array.map((item) => {
        return (
          <TaskArea 
            key={item.id}
            deleteTask={props.deleteTask}
            changeStatus={props.changeStatus}
            item={item}
            />
        )
      })}
    </div>
  )
}

export default TaskItem