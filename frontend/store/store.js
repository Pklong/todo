import { createStore } from 'redux';
import reducer from '../reducers/root_reducer';

export default () => createStore(reducer);
