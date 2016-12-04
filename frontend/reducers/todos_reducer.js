import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
} from '../actions/todo_actions';

const todo = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODO: {
      const newTodo = Object.assign({}, action.todo);
      return newTodo;
    }

    default:
      return state;
  }
};

const todos = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS: {
      const newState = {};
      action.todos.forEach(t => {
        newState[t.id] = t;
      });
      return newState;
    }

    case RECEIVE_TODO: {
      const newState = Object.assign({}, state);
      newState[action.todo.id] = todo(null, action);
      return newState;
    }

    case REMOVE_TODO: {
      const newState = Object.assign({}, state);
      delete newState[action.todo.id];
      return newState;
    }

    default:
      return state;
  }
};

export const allTodos = (state) => Object.keys(state.todos).map(t => state.todos[t]);

export default todos;
