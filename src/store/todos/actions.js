import {
  SET_TODO_LIST,
  SET_FILTER_VALUE,
  UPDATE_TODO,
  TOGGLE_SELECT_ALL,
  DELETE_TASK,
  CHANGE_TASK_STATUS,
  CLEAR_COMPLETED_TASKS,
} from './actionNames';

export const setTodoList = (data) => ({
  type: SET_TODO_LIST,
  data,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  data: {
    id,
  }
});

export const clearCompletedTasks = (data) => ({
  type: CLEAR_COMPLETED_TASKS,
  data,
});

export const changeTaskStatus = (id) => ({
  type: CHANGE_TASK_STATUS,
  data: {
    id,
  }
});

export const setFilterValue = (data) => ({
  type: SET_FILTER_VALUE,
  data
});

export const upateTodoValue = (id, text) => ({
  type: UPDATE_TODO,
  data: {
    id,
    text
  }
});

export const toggleSelectAll = (data) => ({
  type: TOGGLE_SELECT_ALL,
  data
});
