export const fetchTodos = (success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/todos',
    success,
    error,
  });
};

export const createTodo = (todo, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/todos',
    data: todo,
    success,
    error,
  });
};

export const updateTodo = (todo, success, error) => {
  todo.done = !todo.done;
  $.ajax({
    method: 'patch',
    url: `api/todos/${todo.id}`,
    data: { todo },
    success,
    error,
  });
};

export const destroyTodo = (todoId, success, error) => {
  $.ajax({
    method: 'delete',
    url: `api/todos/${todoId}`,
    success,
    error,
  });
};
