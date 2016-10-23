import React from 'react';
import { connect } from 'react-redux';
import { destroyTodo } from '../../actions/todo_actions';
import { requestSteps } from '../../actions/step_actions';

import StepList from '../step_list/step_list';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { requestSteps, todo: { id } } = this.props;
    requestSteps(id);
  }

  render() {
    const { destroyTodo, todo } = this.props;
    return (
      <div>
        <p>{todo.body}</p>
        <StepList
          todoId={todo.id}
        />
        <button onClick={destroyTodo.bind(null, todo)}>
          Delete Todo
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  destroyTodo: (t) => dispatch(destroyTodo(t)),
  requestSteps: (id) => dispatch(requestSteps(id)),
});

TodoDetailView.PropTypes = {
  destroyTodo: React.PropTypes.func,
  todo: React.PropTypes.object,
  requestSteps: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(TodoDetailView);
