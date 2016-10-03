import { applyMiddleware } from 'redux';
import TodoMiddleware from './todo_middleware';
import StepMiddleware from './step_middleware';

export default applyMiddleware(TodoMiddleware, StepMiddleware);
