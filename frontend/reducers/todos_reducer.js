import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const defaultState = {
  1: {
    id: 1,
    title: 'learn redux',
    body: 'splash some rails in there',
    done: false,
  },
  2: {
    id: 2,
    title: 'make a stew',
    body: 'use soup bone',
    done: true,
  },
};

const todo = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODO: {
      const newTodo = merge({}, action.todo);
      return newTodo;
    }

    default:
      return state;
  }
};

const todos = (state = defaultState, action) => {
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
      const newState = merge({}, state);
      newState[action.todo.id] = todo(null, action);
      return newState;
    }

    case REMOVE_TODO: {
      const newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    }

    default:
      return state;
  }
};


export default todos;
