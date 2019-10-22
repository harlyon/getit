import React, { Component } from 'react';
import Loader from "react-loader"
import Swal from "sweetalert2"
import axios from 'axios';

class Login extends Component {
  state = {
      email: '',
      password: '',
      error: '',
      isLoading: false,
      redirect: false
  }

  onChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.email.trim() === "" || this.state.password.trim() === "") {
        Swal.fire({
            type: 'error',
            text: 'Invalid credentials!',
        })
    } else {
        this.setState({
            isLoading: true
        });
        axios.post("http://localhost:9000/api/Users/login", {
            email: e.target.email.value,
            password: e.target.password.value
        }).then(res => {
            const userData = {
                jwt: res.data.id,
            }
            sessionStorage.setItem("userData", JSON.stringify(userData))
            this.props.history.push("/post")
        })
    }
  }

  render() {
    const { redirect, email, password, isLoading } = this.state;
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
          {
            isLoading && <Loader loaded={this.state.loaded} />
          }
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-xs-12">
                <div className="page-login-form box">
                  <h3>
                    Login
                  </h3>
                  <form noValidate onSubmit={this.onSubmit} className="login-form">
                    <div className="form-group">
                      <div className="input-icon">
                        <i className="lni-user" />
                        <input
                          type="text"
                          id="sender-email"
                          value={email}
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
                          value={password}
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <button className="btn btn-common log-btn">Log in</button>
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
