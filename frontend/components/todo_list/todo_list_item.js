import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { revealDetail: false };
    this.revealDetail = this.revealDetail.bind(this);
  }
  detailView() {
    return (
      <TodoDetailView
        todo={this.props.todo}
      />
    );
  }

  revealDetail() {
    this.setState({ revealDetail: !this.state.revealDetail });
  }

  render() {
    const { title, done } = this.props.todo;
    return (
      <div>
        <li onClick={this.revealDetail}>{title}</li>
        <button onClick={this.props.toggleTodo}>{done ? 'done' : 'not done'}</button>
        {this.state.revealDetail ? this.detailView() : null}
      </div>
    );
  }
}

export default TodoListItem;
