import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '', done: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
  }

  onTitleChange(e) {
    this.setState({ title: e.currentTarget.value });
  }

  onBodyChange(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ todo: this.state });
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder={'Title Your Todo'}
          onChange={this.onTitleChange}
          value={this.state.title}
        />
        <textarea
          placeholder={'What needs doing?'}
          onChange={this.onBodyChange}
          value={this.state.body}
        ></textarea>

        <button>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;
