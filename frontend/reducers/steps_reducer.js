import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP,
} from '../actions/step_actions';

import merge from 'lodash/merge';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_STEPS: {
      const { steps } = action;
      steps.forEach(s => newState[s.id] = s);
      return newState;
    }

    case RECEIVE_STEP: {
      const { step } = action;
      newState[step.id] = step;
      return newState;
    }

    case REMOVE_STEP: {
      const { stepId } = action;
      delete newState[stepId];
      return newState;
    }

    default:
      return state;
  }
};

export const todoSteps = (steps, todoId) => {
  return Object.keys(steps)
               .map(s => steps[s])
               .filter(s => s.todo_id === todoId);
};

export default stepsReducer;
