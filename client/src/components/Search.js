import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
          <form>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-xs-12">
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Job Title or Company Name" />
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-xs-12">
                <div className="form-group">
                <input className="form-control" type="text" placeholder="Location" />
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
