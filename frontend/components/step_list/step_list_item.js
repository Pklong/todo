import React from 'react';

import { connect } from 'react-redux';
import { destroyStep, toggleStep } from '../../actions/step_actions';

const StepListItem = ({ destroyStep, toggleStep, step }) => {
  const { title, done, id } = step;
  return (
    <div>
      <p>{title}</p>
      <button
        onClick={
          () => {
            step.done = !step.done;
            toggleStep(step);
          }
        }
      >{done ? 'done' : 'not done'}
      </button>
      <button onClick={() => destroyStep(id)}>Delete Step</button>
    </div>
)};

export default connect(null, { destroyStep, toggleStep })(StepListItem);

StepListItem.PropTypes = {
  title: React.PropTypes.string,
  destroyStep: React.PropTypes.func,
  toggleStep: React.PropTypes.func,
  done: React.PropTypes.bool,
  step: React.PropTypes.object,
};
