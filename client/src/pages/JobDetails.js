import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Moment from 'react-moment';

class JobDetails extends Component {
  state = {
    job: {}
  }


  componentWillMount() {
    const itemid = this.props.match.params.id
    axios.get(`http://localhost:9000/api/Boards/${itemid}`)
    .then(res => {
      this.setState({ job: res.data }, () => {
        console.log(res.data);
      });
    })
    .catch(err => console.log(err))
  }

  deleteJob = () => {
    const itemid = this.state.job.id;
    axios.delete(`http://localhost:9000/api/Boards/${itemid}`)
    .then(res => {
      this.props.history.push('/jobs');
    })
    .catch(err => console.log(err))

  }

  render() {
    const { job } = this.state
    return (
      <div>
      <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-xs-12">
            <div className="breadcrumb-wrapper">
              <div className="content">
                <h3 className="product-title">{job.title}</h3>
                <p className="brand">{job.company}.</p>
                <div className="tags">
                  <span><i className="lni-map-marker" />{job.location}</span>
                  <span><i className="lni-calendar" />
                  <Moment format="YYYY/MM/DD">{job.time}</Moment>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="month-price">
              <div className="price">{job.type}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <section className="job-detail section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div className="content-area">
                <h4>Job Description</h4>
                <p>{job.description}.</p>
                <h5>Education Requirement</h5>
                <p>{job.qualification}.</p>
                <h5>What You Need for this Position</h5>
                <ul>
                  <li>- {job.skill}</li>
                  <li>- {job.skill1}</li>
                  <li>- {job.skill2}</li>
                  <li>- {job.skill3}</li>
                  <li>- {job.skill4}</li>
                </ul>
                <h5>How To Apply</h5>
                <p>Send copy of CV to - {job.email}.</p>
                {/* <a href="#" className="btn btn-common">Apply job</a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-xs-12">
              <div className="sideber">
                <div className="widghet">
                  <h3>Category</h3>
                  <div className="maps">
                      <p>Job Category - {job.category}</p>
                      <p>Expires - {job.expiresIn}</p>
                  </div><br /><br />
                  {
                    sessionStorage.userData ?
                    <div className="col-lg-2 col-md-2 col-xs-12 text-center">
                      <button className="btn-danger btn btn-common " onClick={this.deleteJob}>Delete</button><br /><br />
                      <Link className="btn-danger btn" to={`/Boards/edit/${job.id}`}>Edit</Link>
                    </div>
                    : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default JobDetails;