import * as APIUtil from '../util/todo_api_util';

export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const CREATE_TODO = 'CREATE_TODO';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DESTROY_TODO = 'DESTROY_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// sync
export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo,
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo,
});

// async
export const fetchTodos = () => {
  return (dispatch) => {
    return APIUtil.fetchTodos()
                  .then(todos => dispatch(receiveTodos(todos)))
  }
}

export const createTodo = (todo) => ({
  type: CREATE_TODO,
  todo,
});

export const toggleTodo = (todo) => ({
  type: TOGGLE_TODO,
  todo,
});

export const destroyTodo = (todo) => ({
  type: DESTROY_TODO,
  todo,
});
