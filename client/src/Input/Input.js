import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: ''
  }

  returnInputField() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.options.id}>
          {this.props.options.label}
        </label>
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          name={this.props.options.id}
          id={this.props.options.id}
          className="form-control text-center"
          type={this.props.options.type}
          placeholder={this.props.options.placeholder}
        />
      </div>
    )
  }

  returnSubmitButton() {
    return (
      <button type={this.props.options.type} className="btn btn-primary">
        {this.props.options.btnText}
      </button>
    )
  }

  handleInputType() {
    if (this.props.options.type === 'text' || this.props.options.type === 'number') {
      return this.returnInputField();
    }
    else if (this.props.options.type === 'submit') {
      return this.returnSubmitButton();
    }
  }

  render() {
    return (
      this.handleInputType()
    )
  }
}

export default Input;