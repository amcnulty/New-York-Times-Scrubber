import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    
  }

  componentWillMount() {
    document.title = `NYT Article Scrubber | ${this.props.pageTitle}`
  }

  render() {
    return (
      <div className="jumbotron text-center">
        <h2>New York Times Article Scrubber</h2>
        <p>Search for and save articles of interest!</p>
      </div>
    );
  }
}

export default Header;