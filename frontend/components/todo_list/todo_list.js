import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import Spinner from '../shared/spinner';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { toggleTodo, createTodo, todos } = this.props;
    if (todos.length === 0) return <Spinner />
    
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
