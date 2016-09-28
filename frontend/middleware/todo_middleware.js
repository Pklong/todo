import { REQUEST_TODOS, RECEIVE_TODOS, receiveTodos } from '../actions/todo_actions';
import { fetchTodos } from '../util/todo_api_util';

const middleware = store => next => action => {
  switch (action.type) {
    case REQUEST_TODOS:
      const success = data => store.dispatch(receiveTodos(data));
      const error = e => console.error(e);
      fetchTodos(success, error);
      break;
    // case RECEIVE_TODOS:
    //   console.log(action.todos);
    //   break;
    default:
      return next(action);
  }
};

export default middleware;
