import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP,
} from '../actions/step_actions';

import merge from 'lodash/merge';

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
      const { todo_id: todoId, id: stepId } = action.step;
      newState[todoId] = newState[todoId] || {};
      newState[todoId][stepId] = action.step;
      return newState;
    }

    case REMOVE_STEP: {
      const { todo_id: todoId, id: stepId } = action.step;
      const newState = merge({}, state);
      delete newState[todoId][stepId];
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
