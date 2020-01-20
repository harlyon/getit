import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: "",
    location: ""
  }

  inputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value)
  }

  inputSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.search, this.state.location)
    // this.props.getJobs(this.state.search, this.state.location)
  }

  render() {
    return (
          <form onSubmit={this.inputSubmit}>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-xs-12">
                <div className="form-group">
                  <input
                    name="search"
                    className="form-control"
                    type="text"
                    placeholder="Job Title or Company Name"
                    onChange={this.inputChange}
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-xs-12">
                <div className="form-group">
                <input
                  name="location"
                  className="form-control"
                  type="text"
                  placeholder="Location"
                  onChange={this.inputChange}
                />
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-xs-12">
                <button type="submit" className="button"><i className="lni-search" /></button>
              </div>
            </div>
          </form>
    );
  }
}

export default Search;
