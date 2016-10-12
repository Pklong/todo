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
      todoId: 1,
    },
    2: {
      id: 2,
      title: 'code some apps',
      done: true,
      todoId: 1,
    },
  },
  2: {
    3: {
      id: 3,
      title: 'put water in the pot',
      done: false,
      todoId: 2,
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
      const newState = {};
      action.steps.forEach(s => {
        newState[s.id] = s;
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

export const todoSteps = (state, todoId) => {
  const steps = state.steps[todoId];
  if (steps) {
    return Object.keys(state.steps[todoId]).map(s => state.steps[todoId][s]);
  }
  return [];
};

export default stepsReducer;
