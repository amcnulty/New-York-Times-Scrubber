import React, {Component} from 'react';
import SearchPanel from '../../SearchPanel';
import { titleUtil } from '../../utils';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    titleUtil.set('Home');
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <SearchPanel/>
        </div>
      </div>
    )
  }
}

export default Home;