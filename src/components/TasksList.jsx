import { useSelector, useDispatch } from 'react-redux';
import TaskTitle from './TaskTitle';
import { upateTodoValue } from '../store/todos/actions';
import { todoListSelector } from '../store/todos/selectors';

const TasksList = () => {
  const {filteredTodoList} = useSelector(todoListSelector);
  const dispatch = useDispatch();

  const onChangeText = (text, id) => {
    dispatch(upateTodoValue(id, text));
  };

  return (
    <div>
      {filteredTodoList.map((item) => {
        return (
          <TaskTitle
            key={item.id}
            item={item}
            onChangeText={onChangeText}
          />
        );
      })}
    </div>
  );
};

export default TasksList;