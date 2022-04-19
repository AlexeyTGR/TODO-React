import { createSelector } from "reselect";

const todoList = (state) => state.todos.todoList;
const currentFilter = (state) => state.todos.filterValue;

export const activeTasksCounter = createSelector(
  todoList,
  todos => todos.filter((item) => {
    return item.status === 'active'
  }).length
)

