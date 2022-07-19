import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

const ForgotPassword = () =>{

  useEffect(() => {
    document.title = 'BVC | Forgot Password';
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
              <h2 className="title">Forgot Password</h2>
              <nav className="breadcrumb-area">
                <ul className="breadcrumb justify-content-center">
                  <li><a href="/">Home</a></li>
                  <li className="breadcrumb-sep">//</li>
                  <li>Forgot Password</li>
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
                  <h4 className="title">Forgot Password</h4>
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
                        <button type="button" className="btn-theme">Send Password on Email</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="login-register-form-info">
                  <p>Back to <a href="/login">Login</a></p>
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

export default ForgotPassword;