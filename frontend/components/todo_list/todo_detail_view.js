import React from 'react';
import { connect } from 'react-redux';
import { destroyTodo } from '../../actions/todo_actions';

const TodoDetailView = ({ todo, destroyTodo }) => (
  <div>
    <p>{todo.body}</p>
    <button onClick={destroyTodo.bind(null, todo)}>
      Delete Todo
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  destroyTodo: (t) => dispatch(destroyTodo(t)),
});

export default connect(null, mapDispatchToProps)(TodoDetailView);