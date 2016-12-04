import * as StepAPIUtil from '../util/step_api_util';

export const REQUEST_STEPS = 'REQUEST_STEPS';
export const RECEIVE_STEPS = 'RECEIVE_STEPS';

export const CREATE_STEP = 'CREATE_STEP';
export const RECEIVE_STEP = 'RECEIVE_STEP';

export const TOGGLE_STEP = 'TOGGLE_STEP';
export const DESTROY_STEP = 'DESTROY_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

// sync
export const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps,
});

export const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  step,
});

export const removeStep = (stepId) => ({
  type: REMOVE_STEP,
  stepId,
});

// async
export const requestSteps = (todoId) => {
  return (dispatch) => {
    return StepAPIUtil.fetchSteps(todoId)
                      .then(steps => dispatch(receiveSteps(steps)));
  }
};

export const createStep = (step) => {
  return (dispatch) => {
    return StepAPIUtil.createStep(step)
                      .then(s => dispatch(receiveStep(s)));
  }
};

export const toggleStep = (step) => {
  return (dispatch) => {
    return StepAPIUtil.updateStep(step)
                      .then(s => dispatch(receiveStep(s)));
  }
};

export const destroyStep = (stepId) => {
  return (dispatch) => {
    return StepAPIUtil.destroyStep(stepId)
                      .then(sId => dispatch(removeStep(sId)));
  }
};
