export const fetchSteps = (todoId, success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/${todoId}/steps',
    success,
    error,
  });
};

export const createStep = (step, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/${step.todo_id}/steps',
    data: step,
    success,
    error,
  });
};

export const updateStep = (step, success, error) => {
  $.ajax({
    method: 'patch',
    url: 'api/steps/${step.id}',
    data: { step },
    success,
    error,
  });
};

export const destroyStep = (stepId, success, error) => {
  $.ajax({
    method: 'delete',
    url: 'api/steps/${stepId}',
    success,
    error,
  });
};
