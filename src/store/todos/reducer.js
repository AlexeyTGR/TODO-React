import { SET_FILTER_VALUE, SET_TODO_LIST } from "./actionNames";

const getIntialStore = () => ({
  todoList: [],
  filterValue: 'all',
});

export default (store = getIntialStore(), { type, data }) => {
  switch (type) {
    case SET_TODO_LIST:
      return {
        ...store,
        todoList: data,
      };
    case SET_FILTER_VALUE:
      return {
        ...store,
        filterValue: data,
      };

    default:
      return store;
  }
};

