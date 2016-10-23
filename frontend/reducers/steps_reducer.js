import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP,
} from '../actions/step_actions';

import merge from 'lodash/merge';

const defaultState = {
  1: {
    1: {
      id: 1,
      title: 'read the docs',
      done: false,
      todo_id: 1,
    },
    2: {
      id: 2,
      title: 'code some apps',
      done: true,
      todo_id: 1,
    },
  },
  2: {
    3: {
      id: 3,
      title: 'put water in the pot',
      done: false,
      todo_id: 2,
    },
  },
};


const step = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_STEP: {
      const newStep = merge({}, action.step);
      return newStep;
    }

    default:
      return state;
  }
};

const stepsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEPS: {
      const newState = merge({}, state);
      action.steps.forEach(s => {
        newState[s.todo_id][s.id] = s;
      });
      return newState;
    }

    case RECEIVE_STEP: {
      const newState = merge({}, state);
      newState[action.step.id] = step(null, action);
      return newState;
    }

    case REMOVE_STEP: {
      const newState = merge({}, state);
      delete newState[action.step.id];
      return newState;
    }

    default:
      return state;
  }
};

export const todoSteps = (steps, todoId) => {
  if (!steps[todoId]) return [];
  return Object.keys(steps[todoId]).map(s => steps[todoId][s]);
};

export default stepsReducer;
