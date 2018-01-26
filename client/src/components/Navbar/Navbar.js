import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="./">
              NYT Article Scrubber
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className={this.props.location.pathname === '/' ? 'active' : ''}>
              <a href="./">Home</a>
            </li>
            <li className={this.props.location.pathname === '/saved' ? 'active' : ''}>
              <a href="/saved">Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar);