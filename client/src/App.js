import React, { Component } from 'react';
import Header from './Header';
import SearchPanel from './SearchPanel';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <SearchPanel/>
        </div>
      </div>
    );
  }
}

export default App;
