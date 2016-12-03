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

export const removeStep = (step) => ({
  type: REMOVE_STEP,
  step,
});

// async
export const requestSteps = (todoId) => ({
  type: REQUEST_STEPS,
  todoId,
});

export const createStep = (step) => ({
  type: CREATE_STEP,
  step,
});

export const toggleStep = (step) => ({
  type: TOGGLE_STEP,
  step,
});

export const destroyStep = (stepId) => ({
  type: DESTROY_STEP,
  stepId,
});
