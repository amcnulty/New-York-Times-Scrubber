import React, {Component} from 'react';
import {titleUtil} from '../../utils';

class Saved extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount = () => {
    titleUtil.set('Saved Articles');
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <h1>Saved Articles Page</h1>
        </div>
      </div>
    )
  }
}

export default Saved;