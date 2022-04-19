import { createSelector } from 'reselect';

const todoList = (state) => state.todos.todoList;
const currentFilter = (state) => state.todos.filterValue;

export const todoListSelector = createSelector(
  todoList,
  currentFilter,
  (todos, filter) => {
    let counter = 0;

    const filteredList = todos.filter((item) => {
      if (item.status === 'active') {
        counter++;
      }

      if (filter === 'all') {
        return true;
      }

      return item.status === filter;
    });

    return {
      activeTasksCounter: counter,
      filteredTodoList: filteredList,
    }
  }
);


