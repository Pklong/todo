import React from 'react';
import StepForm from './step_form';
import StepListItem from './step_list_item';
import { connect } from 'react-redux';
import { createStep } from '../../actions/step_actions';
import { todoSteps } from '../../reducers/steps_reducer';

const mapDispatchToProps = (dispatch) => ({
  createStep: (s) => dispatch(createStep(s)),
});

const mapStateToProps = (state, ownProps) => {
  return {
    steps: todoSteps(state.steps, ownProps.todoId),
    todoId: ownProps.todoId,
  };
};

const StepList = ({ createStep, steps, todoId }) => {
  const mySteps = steps.map(s =>
    <StepListItem {...s} key={s.id} />
  );
  return (
    <div>
      <ul>
        {mySteps}
      </ul>
      <StepForm
        createStep={createStep}
        todoId={todoId}
      />
    </div>
  );
};

StepList.PropTypes = {
  createStep: React.PropTypes.func,
  steps: React.PropTypes.array,
  todoId: React.PropTypes.number,
};


export default connect(mapStateToProps, mapDispatchToProps)(StepList);
