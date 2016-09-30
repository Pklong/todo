import { REQUEST_TODOS, CREATE_TODO, receiveTodos, receiveTodo } from '../actions/todo_actions';
import { fetchTodos, createTodo } from '../util/todo_api_util';

const middleware = store => next => action => {
  switch (action.type) {
    case REQUEST_TODOS: {
      const success = data => store.dispatch(receiveTodos(data));
      const error = e => console.error(e);
      fetchTodos(success, error);
      break;
    }
    case CREATE_TODO:
      const success = t => store.dispatch(receiveTodo(t));
      const error = e => console.error(e);
      const todo = action.todo;
      createTodo(todo, success, error);
      break;
    default:
      return next(action);
  }
};

export default middleware;
