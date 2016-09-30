import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }
  render() {
    const lis = this.props.todos.map(t => (
      <TodoListItem key={t.id} title={t.title} />
      )
    );
    return (
      <div>
        <ul>
          {lis}
        </ul>
        <TodoForm createTodo={this.props.createTodo} />
      </div>
    );
  }
}

export default TodoList;
