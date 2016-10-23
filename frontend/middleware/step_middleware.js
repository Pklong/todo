import { REQUEST_STEPS,
         CREATE_STEP,
         TOGGLE_STEP,
         DESTROY_STEP,
         receiveSteps,
         receiveStep,
         removeStep,
       } from '../actions/step_actions';

import { fetchSteps,
         createStep,
         updateStep,
         destroyStep,
       } from '../util/step_api_util';

const middleware = store => next => action => {
  switch (action.type) {
    case REQUEST_STEPS: {
      const success = data => store.dispatch(receiveSteps(data));
      const error = e => console.error(e);
      fetchSteps(action.todoId, success, error);
      return next(action);
    }
    case CREATE_STEP: {
      const success = t => store.dispatch(receiveStep(t));
      const error = e => console.error(e);
      const step = action.step;
      createStep(step, success, error);
      return next(action);
    }
    case TOGGLE_STEP: {

      const success = t => store.dispatch(receiveStep(t));
      const error = e => console.error(e);
      updateStep(action.step, success, error);
      return next(action);
    }
    case DESTROY_STEP: {
      const success = t => store.dispatch(removeStep(t));
      const error = e => console.error(e);
      destroyStep(action.stepId, success, error);
      return next(action);
    }
    default:
      return next(action);
  }
};

export default middleware;
