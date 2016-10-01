import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selector';
import { requestTodos,
         createTodo,
         toggleTodo,
         destroyTodo
       } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos()),
  createTodo: (t) => dispatch(createTodo(t)),
  toggleTodo: (t) => dispatch(toggleTodo(t)),
  destroyTodo: (t) => dispatch(destroyTodo(t)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
