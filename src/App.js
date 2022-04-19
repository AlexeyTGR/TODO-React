import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/header';
import AddItemSection from './components/AddItemSection';
import TasksList from './components/TasksList';
import TasksFilter from './components/TasksFilter';
import Footer from './components/footer';
import { setTodoList } from './store/todos/actions';

const App = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todoList);

  const createTask = (text) => {
    const newID = new Date;
    const newTaskObject = {
      id: parseInt(newID.getTime()),
      status: 'active',
      value: text,
    };
    const updatedTasks = [...todoList, newTaskObject];
    dispatch(setTodoList(updatedTasks))
  };

  const inputActionTypeHandle = (event) => {
    if (event.key === 'Enter') {
      const newTaskText = event.target.value.trim();
      if (newTaskText !== '') {
        createTask(newTaskText);
      };
      event.target.value = '';
    } else if (event.key === 'Escape') {
      event.target.value = '';
    };
  };

  return (
    <div className='general-block'>
      <Header />

      <div className='todos-block'>
        <AddItemSection
          onChangeActionType={inputActionTypeHandle}
        />
        <TasksList />
        <TasksFilter />
      </div>

      <Footer />
    </div>
  );
};

export default App;
