import React, { Component } from 'react';
import { Redirect } from 'react-router'
import axios from 'axios';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    redirect: false
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  onSubmit = e => {
    e.preventDefault()
  axios.post("http://localhost:9000/api/Users/login",
    {
      email: e.target.email.value,
      password: e.target.password.value
  }
  ).then(res => {
    if (!res.error) {
      const userData = {
        jwt: res.data.id,
      }
      sessionStorage.setItem("userData", JSON.stringify(userData))
      this.setState({ redirect: true })
      console.log(userData)
        console.log(res)
    } else {
        this.setState({ error: res.error })
    }
})

}

  render() {
    const { redirect } = this.state;
     if (redirect || (sessionStorage.getItem("userData"))) {
       return <Redirect to='/post'/>;
     }
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-header">
                  <h3>Login</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <section id="content" className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-xs-12">
                <div className="page-login-form box">
                  <h3>
                    Login
                  </h3>
                  <form onSubmit={this.onSubmit} className="login-form">
                    <div className="form-group">
                      <div className="input-icon">
                        <i className="lni-user" />
                        <input
                          type="text"
                          id="sender-email"
                          value={this.state.email}
                          onChange={this.onChange}
                          className="form-control"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-icon">
                        <i className="lni-lock" />
                        <input
                          type="password"
                          name="password"
                          onChange={this.onChange}
                          value={this.state.password}
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <button className="btn btn-common log-btn">Log</button>
                  </form>
                  <br />
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;