import React, { Component } from 'react';
import Image from '../images/index.png'
import Summary from './Summary';

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
