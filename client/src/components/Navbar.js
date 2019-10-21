import React, { Component } from 'react';
import Image from '../images/download.png'
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  logOut = e => {
    e.preventDefault()
    sessionStorage.removeItem('userData')
    this.props.history.push('/')
  }
  render() {
    const loginLink = (
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar top-nav-collapse">
        <div className="container">
          <div className="theme-header clearfix">
            <div className="navbar-header">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                <span className="lni-menu" />
              </button>
              <a href="/" className="navbar-brand">
              <h5>Get<span style={{color: "#249c57"}}>Dat</span>Job</h5>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/jobs">
                    Available Jobs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Log In</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu" data-logo="assets/img/logo-mobile.png" />
      </nav>
    )

    const userLink = (
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar top-nav-collapse">
        <div className="container">
          <div className="theme-header clearfix">
            <div className="navbar-header">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                <span className="lni-menu" />
              </button>
              <a href="/" className="navbar-brand">
              <h5>Get<span style={{color: "#249c57"}}>Dat</span>Job</h5>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/jobs">
                    Available Jobs
                  </a>
                </li>
                <li className="button-group">
                  <a href="/post" className="nav-link">Post a Job</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={this.logOut}>Log out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu" data-logo="assets/img/logo-mobile.png" />
      </nav>
    )
  return (
    <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar top-nav-collapse">
    <div className="container">
      <div className="theme-header clearfix">
        <div className="navbar-header">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            <span className="lni-menu" />
          </button>
          <a href="/" className="navbar-brand"><img src={Image} alt="" /></a>
        </div>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav mr-auto w-100 justify-content-end">
          <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
          {sessionStorage.userData ? userLink : loginLink}
        </div>
      </div>
    </div>
  </nav>
   );
  }
};

export default withRouter(Navbar);