import { RECEIVE_TODOS } from '../actions/todo_actions';

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
    default:
      return state;
  }
};

export default TodosReducer;
