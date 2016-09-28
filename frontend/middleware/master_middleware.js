import { applyMiddleware } from 'redux';
import TodoMiddleware from './todo_middleware';

export default applyMiddleware(TodoMiddleware);
