import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="wrap-search-filter row">
                <div className="col-lg-5 col-md-5 col-xs-12">
                  <input type="text" className="form-control" placeholder="Keyword: Name, Tag" />
                </div>
                <div className="col-lg-5 col-md-5 col-xs-12">
                  <input type="text" className="form-control" placeholder="Location: City, State, Zip" />
                </div>
                <div className="col-lg-2 col-md-2 col-xs-12">
                  <button type="submit" className="btn btn-common float-right">Filter</button>
                </div>
              </div>
            </div>
    );
  }
}

export default Search;