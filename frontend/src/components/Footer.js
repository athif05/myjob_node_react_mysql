import React from "react";

const Footer = () => {

  return (
    <>
    
      <footer className="footer-area">

        {/* <div className="footer-top">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-lg-5">
                <div className="footer-newsletter-content">
                  <h4 className="title">Subscribe for everyday job newsletter.</h4>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="footer-newsletter-form">
                  <form action="#">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit" className="btn-newsletter">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="footer-main" style={{ textAlign: "left" }}>
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="widget-item widget-about">
                  <div className="widget-logo-area">
                    <a href="/">
                      <img className="logo-main" src="/assets/img/bvc-logo.png" alt="BVC" />
                    </a>
                  </div>
                  <p className="desc">Find your dream job with us. Best job portal for an employers and employee.</p>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/" rel="noopener"><i className="icofont-facebook"></i></a>
                    <a href="https://www.skype.com/" rel="noopener"><i className="icofont-skype"></i></a>
                    <a href="https://twitter.com/" rel="noopener"><i className="icofont-twitter"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="row">

                  <div className="col-md-4 col-lg-4">
                    <div className="widget-item nav-menu-item1">
                      <h4 className="widget-title">Company</h4>
                      <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-1">Company</h4>
                      <div id="widgetId-1" className="collapse widget-collapse-body">
                        <div className="collapse-body">
                          <div className="widget-menu-wrap">
                            <ul className="nav-menu">
                              <li><a href="/about-us">About Us</a></li>
                              <li><a href="/contact-us">Contact Us</a></li>
                              <li><a href="contact">Our Partners</a></li>
                              <li><a href="contact">Company Policies</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-4">
                    <div className="widget-item nav-menu-item2">
                      <h4 className="widget-title">Resources</h4>
                      <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-2">Resources</h4>
                      <div id="widgetId-2" className="collapse widget-collapse-body">
                        <div className="collapse-body">
                          <div className="widget-menu-wrap">
                            <ul className="nav-menu">
                              <li><a href="/jobs">Post New Job</a></li>
                              <li><a href="/jobs">Jobs Listing</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4 col-lg-4">
                    <div className="widget-item nav-menu-item4">
                      <h4 className="widget-title">Products</h4>
                      <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-4">Products</h4>
                      <div id="widgetId-4" className="collapse widget-collapse-body">
                        <div className="collapse-body">
                          <div className="widget-menu-wrap">
                            <ul className="nav-menu">
                              <li><a href="account-login">Star a Trial</a></li>
                              <li><a href="about-us">How It Works</a></li>
                              <li><a href="account-login">Features</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-content">
                  <p className="copyright">© 2022 BVC. Made with <i className="icofont-heart"></i> by <a href="https://bvceservices.com/">BVC eServices.</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>

    </>
  )
}

export default Footer;