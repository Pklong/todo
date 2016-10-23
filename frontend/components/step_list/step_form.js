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
    const { todoId, createStep } = this.props;
    const step = {
      title: this.state.body,
      todoId,
    };
    createStep(step);
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

StepForm.PropTypes = {
  createStep: React.PropTypes.func,
  todoId: React.PropTypes.number,
};

export default StepForm;
