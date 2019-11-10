import React, { Component } from 'react';
import Image from '../images/index.png'
import Summary from './Summary';
import Search from "../components/Search";

class Main extends Component {
  render() {
    return (
      <>
      <div className="container">
        <div className="row space-100">
          <div className="col-lg-7 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">Find the <br /> job that fits your life</h2>
              <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non.</p>
              <div className="job-search-form">
                <Search />
                {/* <form>
                  <div className="row">
                    <div className="col-lg-5 col-md-5 col-xs-12">
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Job Title or Company Name" />
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-xs-12">
                      <div className="form-group">
                        <div className="search-category-container">
                          <label className="styled-select">
                            <select>
                              <option value="none">Locations</option>
                              <option value="none">New York</option>
                              <option value="none">California</option>
                              <option value="none">Washington</option>
                              <option value="none">Birmingham</option>
                              <option value="none">Chicago</option>
                              <option value="none">Phoenix</option>
                            </select>
                          </label>
                        </div>
                        <i className="lni-map-marker" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xs-12">
                      <button type="submit" className="button"><i className="lni-search" /></button>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-xs-12">
            <div className="intro-img">
              <img src={Image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Summary />
      </>
    );
  }
}

export default Main;
