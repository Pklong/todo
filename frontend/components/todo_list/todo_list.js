import React from 'react';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }
  render() {
    const lis = this.props.todos.map(t => (
      <li key={t.id}>{t.title}</li>
      )
    );
    return (
      <ul>
        {lis}
      </ul>
    );
  }
}

export default TodoList;
