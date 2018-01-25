import React, { Component } from 'react';
import SearchForm from '../SearchForm';
import searchFormInputs from './searchFormInputs';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
  }

  state = {

  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default text-center">
          <div className="panel-heading">
            Search
          </div>
          <div className="panel-body">
            <SearchForm inputs={searchFormInputs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPanel;