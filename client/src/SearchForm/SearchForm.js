import React, { Component } from 'react';
import Input from '../Input/Input';

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {}
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    return this.props.onSubmit(this.state);
  }

  resetForm = () => {
    this.state = {};
    this.render();
  }

  render() {
    const {children} = this.props;

    var childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, { 
        onChange: this.handleInputChange,
        value: this.state[child.props.id] || ''
      });
    })

    return (
      <form
        id={this.props.id}
        onSubmit={this.handleSubmit}
        onReset={this.resetForm}
      >
        {childrenWithProps}
      </form>
    );
  }
}

export default SearchForm;