import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    
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

export default withRouter(Header);