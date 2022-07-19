import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

const Login = () =>{

  useEffect(() => {
    document.title = 'BVC | Login';
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
              <h2 className="title">Login</h2>
              <nav className="breadcrumb-area">
                <ul className="breadcrumb justify-content-center">
                  <li><a href="/">Home</a></li>
                  <li className="breadcrumb-sep">//</li>
                  <li>Login</li>
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
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="login-register-form-wrap">
              <div className="login-register-form">
                <div className="form-title">
                  <h4 className="title">Sign In</h4>
                </div>
                <form action="#">
                  <div className="row">
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
                        <div className="remember-forgot-info">
                          <div className="remember">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label">Remember me</label>
                          </div>
                          <div className="forgot-password">
                            <a href="/forgot-password">Forgot Password?</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <button type="button" className="btn-theme">Sign In</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="login-register-form-info">
                  <p>Don't you have an account? <a href="/registration">Register</a></p>
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
  );
}

export default Login;