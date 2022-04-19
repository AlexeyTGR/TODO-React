import {
  SET_FILTER_VALUE,
  SET_TODO_LIST,
  UPDATE_TODO,
  TOGGLE_SELECT_ALL,
  DELETE_TASK,
  CHANGE_TASK_STATUS,
  CLEAR_COMPLETED_TASKS,
} from './actionNames';

const getIntialStore = () => ({
  todoList: [],
  filterValue: 'all',
  selectAllStatus: false
});

export default (store = getIntialStore(), { type, data }) => {
  switch (type) {
    case SET_TODO_LIST:
      return {
        ...store,
        todoList: data,
      };
    case TOGGLE_SELECT_ALL:
      return {
        ...store,
        selectAllStatus: !store.selectAllStatus,
        todoList: store.todoList.map((item) => ({
          ...item,
          status: store.selectAllStatus ? 'active' : 'complete',
        }))
      };
    case UPDATE_TODO:
      return {
        ...store,
        todoList: store.todoList.map((item) => {
          if (item.id === data.id) {
            return {
              ...item,
              value: data.text,
            };
          }
          return item;
        })
      };
    case DELETE_TASK:
      return {
        ...store,
        todoList: store.todoList.filter((item) => {
          return item.id !== data.id;
        })
      };
    case CHANGE_TASK_STATUS:
      return {
        ...store,
        todoList: store.todoList.map((item) => {
          if (item.id !== data.id) {
            return item;
          }
          return {
            ...item,
            status: item.status === 'active' ? 'complete' : 'active'
          };
        })
      };
    case SET_FILTER_VALUE:
      return {
        ...store,
        filterValue: data,
      };
    case CLEAR_COMPLETED_TASKS:
      return {
        ...store,
        todoList: store.todoList.filter((item) => {
          return item.status !== 'complete';
        })
      };

    default:
      return store;
  }
};

