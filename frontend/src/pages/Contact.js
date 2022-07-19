import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

const Contact = () =>{

  useEffect(() => {
    document.title = 'BVC | Contact Us';
  });

  return (
    <div className="wrapper">
  
      <Header />
      
      <main className="main-content">
        
        <div className="page-header-area sec-overlay sec-overlay-black contact-us-bck-img">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title">Contact Us</h2>
                  <nav className="breadcrumb-area">
                    <ul className="breadcrumb justify-content-center">
                      <li><a href="/">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="contact-area contact-page-area">
          <div className="container">
            <div className="row contact-page-wrapper">
              <div className="col-lg-12">
                <div className="contact-info-wrap">
                  <div className="info-item">
                    <div className="icon">
                      <img src="assets/img/icons/c1.png" alt="iconmage" width="42" height="42"/>
                    </div>
                    <div className="info">
                      <h5 className="title">Call Us:</h5>
                      <p>
                        <a href="tel://568975468">(00) 568 975 468</a><br/>
                        <a href="tel://+88465748937">+88 465 748 937</a>
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon">
                      <img src="assets/img/icons/c2.png" alt="dmage" width="43" height="73"/>
                    </div>
                    <div className="info">
                      <h5 className="title">Email:</h5>
                      <p>
                        <a href="mailto://youremail@gmail.com">youremail@gmail.com</a><br/>
                        <a href="mailto://demomail@gmail.com">demomail@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon">
                      <img src="assets/img/icons/c3.png" alt="gmage" width="36" height="46"/>
                    </div>
                    <div className="info">
                      <h5 className="title">Address:</h5>
                      <p>
                        Sunset Beach, North <br/>
                        Carolina(NC), 28468
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                
                <div className="contact-form">
                  <h4 className="contact-form-title">Get in Touch</h4>
                  <form id="contact-form" action="https://whizthemes.com/mail-php/raju/arden/mail.php" method="POST">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input className="form-control" type="text" name="con_name" placeholder="Name:"/>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input className="form-control" type="email" name="con_email" placeholder="Email:"/>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Subject:"/>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" name="con_message" placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb--0">
                          <button className="btn-theme d-block w-100" type="submit">Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                
                <div className="form-message"></div>
              </div>
              <div className="col-lg-6">
                <div className="map-area">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912972.6636523942!2d144.28416561146162!3d-38.05127959850456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1634028820404!5m2!1sen!2sbd"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />

      
      <div id="scroll-to-top" className="scroll-to-top"><span className="icofont-rounded-up"></span></div>

      
      <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
        <MobileMenu />
      </aside>

    </div>
  )
}

export default Contact;