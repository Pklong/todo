export const fetchTodos = () => {
  return $.ajax({
    method: 'get',
    url: 'api/todos',
  });
};

export const createTodo = (todo, success, error) => {
  return $.ajax({
    method: 'post',
    url: 'api/todos',
    data: todo,
    success,
    error,
  });
};

export const updateTodo = (todo, success, error) => {
  todo.done = !todo.done;
  return $.ajax({
    method: 'patch',
    url: `api/todos/${todo.id}`,
    data: { todo },
    success,
    error,
  });
};

export const destroyTodo = (todoId, success, error) => {
  return $.ajax({
    method: 'delete',
    url: `api/todos/${todoId}`,
    success,
    error,
  });
};
