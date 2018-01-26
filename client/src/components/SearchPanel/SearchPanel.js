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

  handleSubmit(formValue) {
    console.log(formValue);
  }

  clearForm = (e) => {
    e.preventDefault();
    document.getElementById('searchForm').reset();
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default text-center">
          <div className="panel-heading">
            Search
          </div>
          <div className="panel-body">
            <SearchForm
              id="searchForm"
              onSubmit={this.handleSubmit.bind(this)}
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
                placeholder="enter year..."
              />
              <TextInput
                id="endYear"
                label="End Year"
                type="number"
                placeholder="enter year..."
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
      </div>
    );
  }
}

export default SearchPanel;