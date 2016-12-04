import React from 'react';
import { connect } from 'react-redux';
import { destroyTodo } from '../../actions/todo_actions';
import { requestSteps } from '../../actions/step_actions';

import StepList from '../step_list/step_list';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    const { destroyTodo, todo: { id } } = this.props;
    this.destroyTodo = destroyTodo.bind(null, id);
  }

  componentDidMount() {
    const { requestSteps, todo: { id } } = this.props;
    requestSteps(id);
  }

  render() {
    const { todo: { id, body } } = this.props;

    return (
      <div>
        <p>{body}</p>
        <StepList
          todoId={id}
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
  requestSteps: (tId) => dispatch(requestSteps(tId)),
});

TodoDetailView.PropTypes = {
  destroyTodo: React.PropTypes.func,
  todo: React.PropTypes.object,
  requestSteps: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(TodoDetailView);
