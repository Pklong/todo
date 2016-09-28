export const allTodos = (state) => Object.keys(state.todos).map((t) => state.todos[t]);
