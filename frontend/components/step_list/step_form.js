import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleInput = (e) => this.setState({ body: e.currentTarget.value });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const step = {
      title: this.state.body,
      todoId: this.props.todoId,
      done: false,
    };
    this.props.createStep(step);
    this.setState({ body: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder={"What's the next step?"}
          onChange={this.handleInput}
          value={this.state.body}
        />
        <button>Create Step</button>
      </form>
    );
  }
}

export default StepForm;
