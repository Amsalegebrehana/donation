import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="footer-area section-gap">
  <div className="container">
    <div className="row">
      <div className="col-lg-2 col-md-6 single-footer-widget">
        <h4>Top Products</h4>
        <ul>
          <li><a href="#">Managed Website</a></li>
          <li><a href="#">Manage Reputation</a></li>
          <li><a href="#">Power Tools</a></li>
          <li><a href="#">Marketing Service</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-6 single-footer-widget">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Donations</a></li>
          <li><a href="#">Help those in need</a></li>
          <li><a href="#">Diasporas</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-6 single-footer-widget">
        <h4>Features</h4>
        <ul>
          <li><a href="#">Donations </a></li>
          <li><a href="#">our system</a></li>
          <li><a href="#">Donators Relations</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-6 single-footer-widget">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Guides</a></li>
          <li><a href="#">Research</a></li>
          <li><a href="#">Experts</a></li>
          <li><a href="#">Agencies</a></li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6 single-footer-widget">
        <h4>Newsletter</h4>
        <p>You can trust us. we only send promo offers,</p>
        <div className="form-wrap" id="mc_embed_signup">
          <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="form-inline">
            <input className="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" required type="email" />
            <button className="click-btn btn btn-default"><span className="lnr lnr-arrow-right" /></button>
            <div style={{position: 'absolute', left: '-5000px'}}>
              <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
            </div>
            <div className="info" />
          </form>
        </div>
      </div>
    </div>
    <div className="footer-bottom row align-items-center">
      <p className="footer-text m-0 col-lg-6 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        Copyright © All rights reserved  <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="/" target="_blank">Donate here</a>
        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
      <div className="col-lg-6 col-md-6 social-link">
        <div className="download-button d-flex flex-row justify-content-end">
          <div className="buttons gray flex-row d-flex">
           
            <div className="desc">
              <a href="#">
                <p>
                  <span>Donate</span> <br />
                  here
                </p>
              </a>
            </div>
          </div>
          <div className="buttons gray flex-row d-flex">
            
            <div className="desc">
              <a href="#">
                <p>
                  <span>Charity</span> <br />
                  In need
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

        </div>
    );
}

export default Footer;