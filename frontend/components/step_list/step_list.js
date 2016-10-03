import React from 'react';
import StepForm from './step_form';
import StepListItem from './step_list_item';
import { connect } from 'react-redux';
import { createStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => ({
  createStep: (s) => dispatch(createStep(s)),
});

const mapStateToProps = (state) => ({
  steps: state.steps,
  todo_id: state.todo_id,
});

const StepList = ({ createStep, steps, todo_id }) => {

  return (
    <div>
      <ul>
      </ul>
      <StepForm
        createStep={createStep}
        todoId={todo_id}
      />
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(StepList)
