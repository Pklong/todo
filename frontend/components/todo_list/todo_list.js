import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }
  render() {
    const { toggleTodo, createTodo, todos } = this.props;

    const lis = todos.map(t => (
      <TodoListItem
        key={t.id}
        todo={t}
        toggleTodo={toggleTodo.bind(null, t)}
      />
      )
    );
    return (
      <div>
        <ul>
          {lis}
        </ul>
        <TodoForm
          createTodo={createTodo}
        />
      </div>
    );
  }
}

export default TodoList;
