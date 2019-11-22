import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllJobs extends Component {
  state= {
    Boards: []
  }

  componentDidMount() {
    this.getJobs();
  }


  getJobs = () => {
    axios.get('http://localhost:9000/api/Boards')
    .then(res => {
      this.setState({ Boards: res.data })
      console.log(res)
    })
    .catch(function(err) {
      console.log(err)
    })
  }


  render() {
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-header">
                  <h3>All Jobs</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <section className="section" id="featured">
        <div className="container">
          <div className="row">
            {
              this.state.Boards.map((item, id) => {
                return (
                  <div className="col-lg-4 col-md-6 col-xs-12" key={id}>
                    <div className="job-featured">
                      <div className="row">
                        <div className="content">
                          <h3>
                            <Link to={`/Boards/${item.id}`} >{item.title}</Link>
                          </h3>
                          <p className="brand">{item.company}</p>
                          <div className="tags">
                            <span><i className="lni-map-marker"></i>{item.location}</span>
                          </div>
                          <span className="full-time">{item.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
          </div>
      </section>
      </div>
    );
  }
}

export default AllJobs;
