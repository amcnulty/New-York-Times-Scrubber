import React, { Component } from 'react';
import Input from '../Input/Input';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.initState(props.inputs);
  }

  state = {
  }

  initState = inputs => {
    inputs.map(input => {
      this.state[input.id] = ''
    });
    console.log(this.state);
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        {this.props.inputs.map(options => 
          <Input
            options={options}
            value={this.state[options.id]}
            onChange={this.handleInputChange}
          />
        )}
      </form>
    );
  }
}

export default SearchForm;