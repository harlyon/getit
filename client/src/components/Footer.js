import React from 'react';

function Footer() {
  return (
    <footer>
    <section className="footer-Content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-xs-12">
              <div className="widget">
              <h3 className="block-title">Profile</h3>
                <div className="textwidget">
                  <p>Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper.Sed consequat sapien faus quam bibendum convallis,Sed consequat sapien faus quam bibendum convallis</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="widget">
                <h3 className="block-title">Subscribe Now</h3>
                <p>Sed consequat sapien faus quam bibendum convallis.</p>
                <ul className="mt-3 footer-social">
                  <li><a className="facebook" href="#"><i className="lni-facebook-filled" /></a></li>
                  <li><a className="twitter" href="#"><i className="lni-twitter-filled" /></a></li>
                  <li><a className="google-plus" href="#"><i className="lni-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </footer>
  );
};

export default Footer;