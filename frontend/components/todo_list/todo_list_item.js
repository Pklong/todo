import React from 'react';

export default ({ title, toggleTodo, destroyTodo, status }) => (
  <div>
    <li>{title}</li>
    <button onClick={toggleTodo}>{status ? 'complete' : 'do it!'}</button>
    <button onClick={destroyTodo}>Destroy Todo</button>
  </div>
);
