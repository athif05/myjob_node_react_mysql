import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

import AOS from "aos";

const Jobs = () =>{

  useEffect(() => {
    document.title = 'BVC | Jobs';

    AOS.init();
    AOS.refresh();

  },[]);

  return (
    <div className="wrapper">
  
      <Header />
  
      <main className="main-content">
        
        <div className="page-header-area sec-overlay sec-overlay-black jobs-bck-img">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title">Job</h2>
                  <nav className="breadcrumb-area">
                    <ul className="breadcrumb justify-content-center">
                      <li><a href="/">Home</a></li>
                      <li className="breadcrumb-sep">/</li>
                      <li>Job</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="recent-job-area recent-job-inner-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                
                <div className="recent-job-item recent-job-style2-item">
                  <div className="company-info">
                    <div className="logo">
                      <a href="/company-details"><img src="assets/img/companies/w1.jpg" width="75" height="75" alt="HasTech"/></a>
                    </div>
                    <div className="content">
                      <h4 className="name"><a href="/company-details">Darkento Ltd.</a></h4>
                      <p className="address">New York, USA</p>
                    </div>
                  </div>
                  <div className="main-content">
                    <h3 className="title"><a href="/job-details">Front-end Developer</a></h3>
                    <h5 className="work-type">Full-time</h5>
                    <p className="desc">CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                  </div>
                  <div className="recent-job-info">
                    <div className="salary">
                      <h4>$5000</h4>
                      <p>/monthly</p>
                    </div>
                    <a className="btn-theme btn-sm" href="/job-details">Apply Now</a>
                  </div>
                </div>
                
              </div>
              <div className="col-md-6 col-lg-4">
                
                <div className="recent-job-item recent-job-style2-item">
                  <div className="company-info">
                    <div className="logo">
                      <a href="/company-details"><img src="assets/img/companies/w2.jpg" width="75" height="75" alt="HasTech"/></a>
                    </div>
                    <div className="content">
                      <h4 className="name"><a href="/company-details">Inspire Fitness Co.</a></h4>
                      <p className="address">New York, USA</p>
                    </div>
                  </div>
                  <div className="main-content">
                    <h3 className="title"><a href="/job-details">Senior UI Designer</a></h3>
                    <h5 className="work-type" data-text-color="#ff7e00">Part-time</h5>
                    <p className="desc">CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                  </div>
                  <div className="recent-job-info">
                    <div className="salary">
                      <h4>$5000</h4>
                      <p>/monthly</p>
                    </div>
                    <a className="btn-theme btn-sm" href="/job-details">Apply Now</a>
                  </div>
                </div>
                
              </div>
              <div className="col-md-6 col-lg-4">
                
                <div className="recent-job-item recent-job-style2-item">
                  <div className="company-info">
                    <div className="logo">
                      <a href="/company-details"><img src="assets/img/companies/w3.jpg" width="75" height="75" alt="HasTech"/></a>
                    </div>
                    <div className="content">
                      <h4 className="name"><a href="/company-details">Cogent Data</a></h4>
                      <p className="address">New York, USA</p>
                    </div>
                  </div>
                  <div className="main-content">
                    <h3 className="title"><a href="/job-details">Graphic Designer</a></h3>
                    <h5 className="work-type" data-text-color="#0054ff">Remote</h5>
                    <p className="desc">CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                  </div>
                  <div className="recent-job-info">
                    <div className="salary">
                      <h4>$5000</h4>
                      <p>/monthly</p>
                    </div>
                    <a className="btn-theme btn-sm" href="/job-details">Apply Now</a>
                  </div>
                </div>
                
              </div>
              <div className="col-md-6 col-lg-4">
                
                <div className="recent-job-item recent-job-style2-item">
                  <div className="company-info">
                    <div className="logo">
                      <a href="/company-details"><img src="assets/img/companies/w4.jpg" width="75" height="75" alt="asImage-HasTech"/></a>
                    </div>
                    <div className="content">
                      <h4 className="name"><a href="/company-details">Obelus Concepts</a></h4>
                      <p className="address">New York, USA</p>
                    </div>
                  </div>
                  <div className="main-content">
                    <h3 className="title"><a href="/job-details">UX Researcher</a></h3>
                    <h5 className="work-type">Full-time</h5>
                    <p className="desc">CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                  </div>
                  <div className="recent-job-info">
                    <div className="salary">
                      <h4>$5000</h4>
                      <p>/monthly</p>
                    </div>
                    <a className="btn-theme btn-sm" href="/job-details">Apply Now</a>
                  </div>
                </div>
                
              </div>
              <div className="col-md-6 col-lg-4">
                
                <div className="recent-job-item recent-job-style2-item">
                  <div className="company-info">
                    <div className="logo">
                      <a href="/company-details"><img src="assets/img/companies/w5.jpg" width="75" height="75" alt="IHasTech"/></a>
                    </div>
                    <div className="content">
                      <h4 className="name"><a href="/company-details">Sanguine Skincare</a></h4>
                      <p className="address">New York, USA</p>
                    </div>
                  </div>
                  <div className="main-content">
                    <h3 className="title"><a href="/job-details">Android App Developer</a></h3>
                    <h5 className="work-type" data-text-color="#0054ff">Remote</h5>
                    <p className="desc">CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                  </div>
                  <div className="recent-job-info">
                    <div className="salary">
                      <h4>$5000</h4>
                      <p>/monthly</p>
                    </div>
                    <a className="btn-theme btn-sm" href="/job-details">Apply Now</a>
                  </div>
                </div>
                
              </div>
              <div className="col-md-6 col-lg-4">
                
                <div className="recent-job-item recent-job-style2-item">
                  <div className="company-info">
                    <div className="logo">
                      <a href="/company-details"><img src="assets/img/companies/w6.jpg" width="75" height="75" alt="HasTech"/></a>
                    </div>
                    <div className="content">
                      <h4 className="name"><a href="/company-details">Flux Water Gear</a></h4>
                      <p className="address">New York, USA</p>
                    </div>
                  </div>
                  <div className="main-content">
                    <h3 className="title"><a href="/job-details">Product Designer</a></h3>
                    <h5 className="work-type">Full-time</h5>
                    <p className="desc">CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                  </div>
                  <div className="recent-job-info">
                    <div className="salary">
                      <h4>$5000</h4>
                      <p>/monthly</p>
                    </div>
                    <a className="btn-theme btn-sm" href="/job-details">Apply Now</a>
                  </div>
                </div>
                
              </div>
              <div className="col-md-6 col-lg-4">
                
                <div className="recent-job-item recent-job-style2-item">
                  <div className="company-info">
                    <div className="logo">
                      <a href="/company-details"><img src="assets/img/companies/w7.jpg" width="75" height="75" alt="HasTech"/></a>
                    </div>
                    <div className="content">
                      <h4 className="name"><a href="/company-details">Darkento Ltd.</a></h4>
                      <p className="address">New York, USA</p>
                    </div>
                  </div>
                  <div className="main-content">
                    <h3 className="title"><a href="/job-details">Front-end Developer</a></h3>
                    <h5 className="work-type">Full-time</h5>
                    <p className="desc">CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                  </div>
                  <div className="recent-job-info">
                    <div className="salary">
                      <h4>$5000</h4>
                      <p>/monthly</p>
                    </div>
                    <a className="btn-theme btn-sm" href="/job-details">Apply Now</a>
                  </div>
                </div>
                
              </div>
              <div className="col-md-6 col-lg-4">
                
                <div className="recent-job-item recent-job-style2-item">
                  <div className="company-info">
                    <div className="logo">
                      <a href="/company-details"><img src="assets/img/companies/w8.jpg" width="75" height="75" alt="IHasTech"/></a>
                    </div>
                    <div className="content">
                      <h4 className="name"><a href="/company-details">Inspire Fitness Co.</a></h4>
                      <p className="address">New York, USA</p>
                    </div>
                  </div>
                  <div className="main-content">
                    <h3 className="title"><a href="/job-details">Senior UI Designer</a></h3>
                    <h5 className="work-type" data-text-color="#ff7e00">Part-time</h5>
                    <p className="desc">CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                  </div>
                  <div className="recent-job-info">
                    <div className="salary">
                      <h4>$5000</h4>
                      <p>/monthly</p>
                    </div>
                    <a className="btn-theme btn-sm" href="/job-details">Apply Now</a>
                  </div>
                </div>
                
              </div>
              <div className="col-md-6 col-lg-4">
                
                <div className="recent-job-item recent-job-style2-item">
                  <div className="company-info">
                    <div className="logo">
                      <a href="/company-details"><img src="assets/img/companies/w9.jpg" width="75" height="75" alt="IsTech"/></a>
                    </div>
                    <div className="content">
                      <h4 className="name"><a href="/company-details">Cogent Data</a></h4>
                      <p className="address">New York, USA</p>
                    </div>
                  </div>
                  <div className="main-content">
                    <h3 className="title"><a href="/job-details">Graphic Designer</a></h3>
                    <h5 className="work-type" data-text-color="#0054ff">Part-time</h5>
                    <p className="desc">CSS3, HTML5, Javascript, Bootstrap, Jquery</p>
                  </div>
                  <div className="recent-job-info">
                    <div className="salary">
                      <h4>$5000</h4>
                      <p>/monthly</p>
                    </div>
                    <a className="btn-theme btn-sm" href="/job-details">Apply Now</a>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="pagination-area">
                  <nav>
                    <ul className="page-numbers d-inline-flex">
                      <li>
                        <a className="page-number active" href="job.html">1</a>
                      </li>
                      <li>
                        <a className="page-number" href="job.html">2</a>
                      </li>
                      <li>
                        <a className="page-number" href="job.html">3</a>
                      </li>
                      <li>
                        <a className="page-number next" href="job.html">
                          <i className="icofont-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />

      <div id="scroll-to-top" className="scroll-to-top"><span className="icofont-rounded-up"></span></div>

      
      <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabindex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
        <MobileMenu />
      </aside>
      
    </div>
  )
}

export default Jobs;