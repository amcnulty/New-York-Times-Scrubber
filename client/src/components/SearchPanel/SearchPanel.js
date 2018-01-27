import React, { Component } from 'react';
import SearchForm from '../SearchForm';
import TextInput from '../TextInput';
import ButtonInput from '../ButtonInput';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
  }

  state = {

  }

  // handleSubmit(formValue) {
  //   console.log(formValue);
  // }

  clearForm = (e) => {
    e.preventDefault();
    document.getElementById('searchForm').reset();
  }

  render() {
    return (
      <div className="panel panel-primary text-center">
        <div className="panel-heading">
          Search
        </div>
        <div className="panel-body">
          <SearchForm
            id="searchForm"
            onSubmit={this.props.searchData}
          >
            <TextInput 
              id="topic" 
              label="Topic" 
              type="text" 
              placeholder="enter topic"
            />
            <TextInput
              id="startYear"
              label="Start Year"
              type="number"
              placeholder="YYYYMMDD"
            />
            <TextInput
              id="endYear"
              label="End Year"
              type="number"
              placeholder="YYYYMMDD"
            />
            <ButtonInput
              id="submitButton"
              type="submit"
            >
              Submit
            </ButtonInput>
            <a 
              href="" 
              style={{marginLeft: '10px'}}
              onClick={(e) => this.clearForm(e)}
            >
              Clear
            </a>
          </SearchForm>
        </div>
      </div>
    );
  }
}

export default SearchPanel;