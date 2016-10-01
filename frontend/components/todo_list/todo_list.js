import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }
  render() {
    const { toggleTodo, destroyTodo, createTodo, todos } = this.props;

    const lis = todos.map(t => (
      <TodoListItem
        key={t.id}
        title={t.title}
        status={t.done}
        toggleTodo={toggleTodo.bind(null, t)}
        destroyTodo={destroyTodo.bind(null, t)}
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
