import todos from './todos_reducer';
import steps from './steps_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  todos,
  steps,
});
