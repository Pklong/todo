import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { requestTodos } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.store = configureStore();
  window.requestTodos = requestTodos;
  const root = document.getElementById('root');
  ReactDOM.render(<div>SUP?!</div>, root);
});
