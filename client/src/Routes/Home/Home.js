import React, {Component} from 'react';
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
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
        <Header/>
        <div className="row">
          <SearchPanel/>
        </div>
      </div>
    )
  }
}

export default Home;