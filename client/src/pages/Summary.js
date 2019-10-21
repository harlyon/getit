import React from 'react';

function Summary() {
  return (
    <section className="how-it-works section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br /> metus effici turac fringilla lorem facilisis.</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="work-process step-2">
                <span className="process-icon">
                  <i className="lni-eye" />
                </span>
                <h4>Look Around</h4>
                <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="work-process step-3">
                <span className="process-icon">
                  <i className="lni-cup" />
                </span>
                <h4>Apply</h4>
                <p>Time for a new job? Browse our popular locations and job titles. Apply and get it</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Summary;