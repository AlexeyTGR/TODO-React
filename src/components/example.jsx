// import TaskArea from "../../src/components/TaskArea";

const App = () => {
  const handleTaskCreate = () => {
    //
  };

  return (
    <>
      <Header />

      <AddItemSection onTaskCreate={handleTaskCreate}>
        <ToggleAllButton />

        <NewTaskInput />
      </AddItemSection>

      <TasksList>
        {filteredTasksList.map((task) => (
          <TaskItem
            key={task.id}
            item={task}
          >
            <ChangeTaskStatusButton />

            <TaskTitle />

            <TaskInput />

            <DeleteTaskButton />
          </TaskItem>
        ))}
      </TasksList>

      <TasksFilter>
        <TasksCounter />

        <FiltersList />

        <DeleteAllCompletedTasksButton />
      </TasksFilter>

      <Footer />
    </>
  );
};


// <App>
//   <Header />

//   <TaskBlock>

//     <NewTask>
//       <button></button>
//       <input />
//     </NewTask>

//     <TaskList>
//         <TaskArea>
//             <button>status</button>
//             <TextArea>
//             <div>TODO TEXT</div>
//             </TextArea>
//             <button>delete</button>
//         </TaskArea>
//     </TaskList>

//     <TaskFilter>
//       <span>items</span>
//       <button>all, active, complete</button>
//       <button>clear all</button>
//     </TaskFilter>

//   </TaskBlock>

//   <Footer />
// </>