import { SET_TODO_LIST } from "./actionNames";

const getIntialStore = () => ({
  todoList: [],
});

export default (store = getIntialStore(), { type, data }) => {
  switch (type) {
    case SET_TODO_LIST:
      return {
        ...store,
        todoList: data,
      };

    default:
      return store;
  }
};

