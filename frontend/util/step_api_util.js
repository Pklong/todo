export const fetchSteps = (todoId) => {
  return $.ajax({
    method: 'get',
    url: `api/todos/${todoId}/steps`,
  });
};

export const createStep = (step) => {
  return $.ajax({
    method: 'post',
    url: `api/todos/${step.todoId}/steps`,
    data: { step },
  });
};

export const updateStep = (step) => {

  return $.ajax({
    method: 'patch',
    url: `api/steps/${step.id}`,
    data: { step },
  });
};

export const destroyStep = (stepId) => {
  return $.ajax({
    method: 'delete',
    url: `api/steps/${stepId}`,
  });
};
