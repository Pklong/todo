import { createStore } from 'redux';
import middleware from '../middleware/master_middleware';
import reducer from '../reducers/root_reducer';

export default () => createStore(reducer, middleware);
