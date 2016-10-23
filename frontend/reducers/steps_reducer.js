import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP,
} from '../actions/step_actions';

import merge from 'lodash/merge';

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

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEPS: {
      const { steps } = action;
      const newState = merge({}, state);
      steps.forEach(s => {
        const { todo_id: todoId, id: stepId } = s;
        newState[todoId] = newState[todoId] || {};
        newState[todoId][stepId] = s;
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
