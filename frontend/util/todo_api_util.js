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
