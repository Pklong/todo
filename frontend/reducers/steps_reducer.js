const stepsReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const allSteps = (state) => Object.keys(state.steps).map(s => state.steps[s]);

export default stepsReducer;
