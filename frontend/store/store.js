import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk_middleware';
import createLogger from 'redux-logger';
const logger = createLogger();
export default () => createStore(reducer, applyMiddleware(thunk, logger));
