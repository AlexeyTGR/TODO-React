import NewTask from "./NewTask";
import CurrentTasks from "./CurrentTasks";
import TasksFilter from "./TasksFilter";
import { useState } from "react";

const TasksBlock = () => {
  const [tasksArray, setTasksArray] = useState([]);
  const [selectAllStatus, setSelectAllStatus] = useState(false);
  const [filterValue, setFilterValue] = useState('all');

  const quantity = tasksArray.filter((item) => {
    return item.status === "active"
  }).length


  const toggleSelectAll = () => {
    const updatedArray = tasksArray.map((item) => {
      return {
        ...item,
        status: selectAllStatus ? 'active' : 'complete'
      };
    });
    setSelectAllStatus(!selectAllStatus);
    setTasksArray(updatedArray);
  };

  const addTaskToTasksArray = (task) => {
    setTasksArray([...tasksArray, task]);
  };

  const deleteTaskFromArray = (id) => {
    const updatedArray = tasksArray.filter((item) => {
      return item.id !== id
    })
    setTasksArray(updatedArray);
  };

  const changeStatus = (id) => {
    const updatedArray = tasksArray.map((item) => {
      if (item.id !== id) {
        return item
      }
      return {
        ...item,
        status: item.status === 'active' ? 'complete' : 'active'
      }
    })
    setTasksArray(updatedArray);
  };

  const setFilter = (value) => {
    setFilterValue(value);
  }

  const clearComplited = () => {
    const array = tasksArray.filter((item) => {
    return item.status !== 'complete';
    })
    setTasksArray(array)
  }

  

  return (
    <div>
      <div>
        <NewTask
          tasksArray={tasksArray}
          addTaskToTasksArray={addTaskToTasksArray}
          toggleSelectAll={toggleSelectAll}
        />
      </div>
      <div>
        <CurrentTasks
          tasksArray={tasksArray}
          deleteTask={deleteTaskFromArray}
          changeStatus={changeStatus}
          filterValue={filterValue}
        />
      </div>
      <div>
        <TasksFilter
          quantity={quantity}
          setFilter={setFilter}
          clearComplited={clearComplited}
        />
      </div>
    </div>
  );
};

export default TasksBlock