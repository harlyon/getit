import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router'

class Post extends Component {
  state = {
    title: "",
    company: "",
    type: "",
    location: "",
    category: "",
    skill: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    qualification: "",
    tags: "",
    description: "",
    email: "",
    expiresIn: "",
    redirect: false
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.name)
  }


  componentWillMount() {
    if(sessionStorage.getItem("userData")){
      console.log("user is loggin")
    } else {
      this.setState({ redirect: true })
    }
  }


  postJobs = e => {
    e.preventDefault()
    axios.post('http://localhost:9000/api/Boards', {
    title: e.target.title.value,
    company: e.target.company.value,
    type: e.target.type.value,
    location: e.target.location.value,
    category: e.target.category.value,
    qualification: e.target.qualification.value,
    skill: e.target.skill.value,
    skill1: e.target.skill1.value,
    skill2: e.target.skill2.value,
    skill3: e.target.skill3.value,
    skill4: e.target.skill4.value,
    tags: e.target.tags.value,
    description: e.target.description.value,
    email: e.target.email.value,
    expiresIn: e.target.expiresIn.value,
    }
    ).then(res => {
        console.log(res)
        this.props.history.push(`/jobs`)
        this.setState({ redirect: true });
    })

}

  render() {
    const { redirect } = this.state;
     if (redirect) {
       return <Redirect to='/login'/>;
     }
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-header">
                  <h3>Post A Job</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 col-xs-12">
              <div className="post-job box">
                <h3 className="job-title">Post a new Job</h3>
                <form onSubmit={this.postJobs} className="form-ad">
                  <div className="form-group">
                    <label className="control-label">Job Title</label>
                    <input type="text"
                            name="title"
                            className="form-control"
                            placeholder="Write job title"
                            value={this.state.title}
                            onChange={this.onChange}
                             />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Company</label>
                    <input type="text"
                            name="company"
                            className="form-control"
                            placeholder="Write company name"
                            value={this.state.company}
                            onChange={this.onChange}
                            />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Location</label>
                    <input type="text"
                            name="location"
                            className="form-control"
                            placeholder="e.g.London"
                            value={this.state.location}
                            onChange={this.onChange}
                             />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Type <span>(optional)</span></label>
                    <input type="text"
                            name="type"
                            className="form-control"
                            placeholder="e.g.Full Time, Part Time, Contract"
                            value={this.state.type}
                            onChange={this.onChange}
                             />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Category</label>
                    <input type="text"
                            name="category"
                            className="form-control"
                            placeholder="e.g.IT,Finance,Administration"
                            value={this.state.category}
                            onChange={this.onChange}
                            />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Qualification</label>
                    <input type="text"
                            name="qualification"
                            className="form-control"
                            placeholder="e.g.Diploma,Bachelors,Certificate"
                            value={this.state.qualification}
                            onChange={this.onChange}
                            />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Skill</label>
                    <input type="text"
                            name="skill"
                            className="form-control"
                            // placeholder="e.g.IT,Finance,Administration"
                            value={this.state.skill}
                            onChange={this.onChange}
                           />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Skill1</label>
                    <input type="text"
                            name="skill1"
                            className="form-control"
                            // placeholder="e.g.IT,Finance,Administration"
                            value={this.state.skill1}
                            onChange={this.onChange}
                           />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Skill2</label>
                    <input type="text"
                            name="skill2"
                            className="form-control"
                            // placeholder="e.g.IT,Finance,Administration"
                            value={this.state.skill2}
                            onChange={this.onChange}
                           />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Skill3</label>
                    <input type="text"
                            name="skill3"
                            className="form-control"
                            // placeholder="e.g.IT,Finance,Administration"
                            value={this.state.skill3}
                            onChange={this.onChange}
                           />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Skill4</label>
                    <input type="text"
                            name="skill4"
                            className="form-control"
                            // placeholder="e.g.IT,Finance,Administration"
                            value={this.state.skill4}
                            onChange={this.onChange}
                           />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Job Tags <span>(optional)</span></label>
                    <input type="text"
                            name="tags"
                            className="form-control"
                            placeholder="e.g.PHP,Social Media,Management"
                            value={this.state.tags}
                            onChange={this.onChange}
                            />
                    <p className="note">Comma separate tags, such as required skills or technologies, for this job.</p>
                  </div>
                  <div className="form-group">
                    <label className="control-label">Description</label>
                  </div>
                    <textarea name="description"
                              type="text"
                              value={this.state.description}
                              onChange={this.onChange}
                              cols="90"
                              rows="10">
                    </textarea>
                  <div className="form-group">
                    <label className="control-label">Application email / URL</label>
                    <input type="text"
                            name="email"
                            className="form-control"
                            placeholder="Enter an email address or website URL"
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Closing Date <span>(optional)</span></label>
                    <input type="text"
                            name="expiresIn"
                            className="form-control"
                            placeholder="yyyy-mm-dd"
                            value={this.state.expiresIn}
                            onChange={this.onChange}
                            />
                  </div>
                  {/* <div className="divider">
                    <h3 className="job-title">Company Details</h3>
                  </div> */}
                  {/* <div className="form-group">
                    <label className="control-label">Company Name</label>
                    <input type="text" className="form-control" placeholder="Enter the name of the company" />
                  </div> */}
                  {/* <div className="form-group">
                    <label className="control-label">Website <span>(optional)</span></label>
                    <input type="text" className="form-control" placeholder="http://" />
                  </div> */}
                  {/* <div className="form-group">
                    <label className="control-label">Tagline <span>(optional)</span></label>
                    <input type="text" className="form-control" placeholder="Briefly describe your company" />
                  </div> */}
                  {/* <div className="form-group">
                    <label className="control-label">Tagline <span>(optional)</span></label>
                    <input type="text" className="form-control" placeholder="Briefly describe your company" />
                  </div> */}
                  {/* <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="validatedCustomFile" required />
                    <label className="custom-file-label form-control" htmlFor="validatedCustomFile">Choose file...</label>
                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                  </div> */}
                  <button className="btn btn-common log-btn">Submit your job</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Post;