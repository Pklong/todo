export const fetchTodos = (success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/todos',
    success,
    error,
  });
};
