import { REQUEST_TODOS,
         CREATE_TODO,
         UPDATE_TODO,
         DESTROY_TODO,
         receiveTodos,
         receiveTodo,
         removeTodo,
       } from '../actions/todo_actions';

import { fetchTodos,
         createTodo,
         updateTodo,
         destroyTodo,
       } from '../util/todo_api_util';

const middleware = store => next => action => {
  switch (action.type) {
    case REQUEST_TODOS: {
      const success = data => store.dispatch(receiveTodos(data));
      const error = e => console.error(e);
      fetchTodos(success, error);
      break;
    }
    case CREATE_TODO: {
      const success = t => store.dispatch(receiveTodo(t));
      const error = e => console.error(e);
      const todo = action.todo;
      createTodo(todo, success, error);
      break;
    }
    case UPDATE_TODO: {
      const success = t => store.dispatch(receiveTodo(t));
      const error = e => console.error(e);
      updateTodo(action.todo, success, error);
      break;
    }
    case DESTROY_TODO: {
      const success = t => store.dispatch(removeTodo(t));
      const error = e => console.error(e);
      destroyTodo(action.todo.id, success, error);
      break;
    }
    default:
      return next(action);
  }
};

export default middleware;
