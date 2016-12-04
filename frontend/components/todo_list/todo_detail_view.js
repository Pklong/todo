import React from 'react';
import { connect } from 'react-redux';
import { destroyTodo } from '../../actions/todo_actions';
import { requestSteps } from '../../actions/step_actions';

import StepList from '../step_list/step_list';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    const { destroyTodo, todo } = this.props;
    this.destroyTodo = destroyTodo.bind(null, todo.id);
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
      <button onClick={this.destroyTodo}>
          Delete Todo
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  destroyTodo: (tId) => dispatch(destroyTodo(tId)),
  requestSteps: (id) => dispatch(requestSteps(id)),
});

TodoDetailView.PropTypes = {
  destroyTodo: React.PropTypes.func,
  todo: React.PropTypes.object,
  requestSteps: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(TodoDetailView);
