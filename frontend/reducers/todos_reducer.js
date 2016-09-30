import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
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

const TodosReducer = (state = defaultState, action) => {
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
      const newTodo = {
        id: action.todo.id,
        title: action.todo.title,
        body: action.todo.body,
        done: action.todo.done,
      };
      newState[action.todo.id] = newTodo;
      return newState;
    }

    default:
      return state;
  }
};

export default TodosReducer;
