import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { requestTodos, createTodo } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.store = configureStore();
  window.requestTodos = requestTodos;
  window.createTodo = createTodo;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={window.store} />, root);
});
