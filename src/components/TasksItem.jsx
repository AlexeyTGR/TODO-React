import { useMemo } from "react";
import TaskTitle from "./TaskTitle";

const TaskItem = (props) => {

  const array = useMemo(() => {
    if (props.filterValue === 'all') {
      return props.tasksArray;
    }
    return props.tasksArray.filter((item) => {
      return props.filterValue === item.status;
    })
  }, [props.tasksArray, props.filterValue]);

  const onChangeText = (text, id) => {
    const updatedArray = props.tasksArray.map((item) => {
      if(item.id === id) {
        
        item.value = text;
      }
      return item;
    })
    props.setTasksArray(updatedArray);
  }

  return (
    <div>
      {array.map((item) => {
        return (
          <TaskTitle 
            key={item.id}
            deleteTask={props.deleteTask}
            changeStatus={props.changeStatus}
            item={item}
            setTasksArray={props.setTasksArray}
            onChangeText={onChangeText}
            />
        )
      })}
    </div>
  )
}

export default TaskItem