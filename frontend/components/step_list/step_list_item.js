import React from 'react';

import { connect } from 'react-redux';
import { destroyStep, toggleStep } from '../../actions/step_actions';

const StepListItem = ({ title, destroyStep, toggleStep, done }) => (
  <div>
    <p>{title}</p>
    <button onClick={toggleStep}>{done ? 'done' : 'not done'}</button>
    <button onClick={destroyStep}>Delete Step</button>
  </div>
);

export default connect(null, { destroyStep, toggleStep })(StepListItem);
