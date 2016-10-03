export const allTodos = (state) => Object.keys(state.todos).map(t => state.todos[t]);

export const allSteps = (state) => Object.keys(state.steps).map(s => state.steps[s]);
