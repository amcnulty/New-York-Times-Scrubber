import React, {Component} from 'react';
import {titleUtil} from '../../utils';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount = () => {
    titleUtil.set('Search');
  }

  render() {
    return (
      <h1>SEARCH PAGE</h1>
    )
  }
}

export default Search;