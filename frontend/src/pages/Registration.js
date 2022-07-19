import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

const Registration = () =>{

  useEffect(() => {
    document.title = 'BVC | Registration';
  });

  return (
    <div className="wrapper">

  <Header />
  
  <main className="main-content">

    <div className="page-header-area sec-overlay sec-overlay-black login-register-bck-img">
      <div className="container pt--0 pb--0">
        <div className="row">
          <div className="col-12">
            <div className="page-header-content">
              <h2 className="title">Register Page</h2>
              <nav className="breadcrumb-area">
                <ul className="breadcrumb justify-content-center">
                  <li><a href="/">Home</a></li>
                  <li className="breadcrumb-sep">//</li>
                  <li>Registration</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <section className="account-login-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-7 col-xl-6">
            <div className="login-register-form-wrap register-form-wrap">
              <div className="login-register-form">
                <div className="form-title">
                  <h4 className="title">Register Now</h4>
                </div>
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="candidate-tab" data-bs-toggle="pill" data-bs-target="#candidate" type="button" role="tab" aria-controls="candidate" aria-selected="true"><i className="icofont-businessman"></i> Candidate</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="employer-tab" data-bs-toggle="pill" data-bs-target="#employer" type="button" role="tab" aria-controls="employer" aria-selected="false"><i className="icofont-bag-alt"></i> Employer</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="candidate" role="tabpanel" aria-labelledby="candidate-tab">
                    <form action="#">
                    <input type="hidden" name="user_type" id="user_type" value="1"/>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="Name"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="Number"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="email" placeholder="Email"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="password" placeholder="Password"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="password" placeholder="Confirm Password"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <div className="remember-forgot-info">
                              <div className="remember">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" for="defaultCheck1">Aaccept our terms and conditions and privacy policy.</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button type="button" className="btn-theme">Register Now</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="employer" role="tabpanel" aria-labelledby="employer-tab">
                    <form action="#">
                      <input type="hidden" name="user_type" id="user_type" value="2"/>
                      <div className="row">
                      <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="Name"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="Number"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="email" placeholder="Email"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="password" placeholder="Password"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="password" placeholder="Confirm Password"/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <div className="remember-forgot-info">
                              <div className="remember">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" >Aaccept our terms and conditions and privacy policy.</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button type="button" className="btn-theme">Register Now</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="login-register-form-info">
                  <p>Already have an account? <a href="/login">Login</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </main>

  <Footer />

  
  <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
    <MobileMenu />
  </aside>
</div>
  )
}

export default Registration;