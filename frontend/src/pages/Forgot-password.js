import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import validator from 'validator'; //email validation

const ForgotPassword = () =>{

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    document.title = 'BVC | Forgot Password';
  });

  const sendPassword = async()=>{

    setSuccess('');
    setEmailError('');
    setSuccess('');
    setFailed('');

    if(!email){
      setEmailError('Enter Email!');
    
    } else {

      if (!validator.isEmail(email)) { 
        
        setEmailError('Enter valid Email!');
        return false;

      }  else {

        let result = await fetch("http://localhost:12345/forgot-password", {
          method: "post",
          body:JSON.stringify({email}),
          headers:{
            "Content-Type":"application/json"
          }
        });

        result = await result.json();

        if(result[0].name==='No record found'){
          setFailed('This email not registered with us.');
          
        } else {
          
          setSuccess('Password reset link sent on registered email.');
        }
        console.log(result);
        console.log();
      }
    }

  }

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
                  
                  {success && <div className="alert alert-success" role="alert">{success}</div>}
                  {failed && <div className="alert alert-danger" role="alert">{failed}</div>}
          
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} maxLength={50} placeholder="Email"/>
                        <span style={{color: 'red',}}>{emailError}</span>
                      </div>
                    </div>
                    
                    
                    <div className="col-12">
                      <div className="form-group">
                        <button type="button" className="btn-theme" onClick={sendPassword}>Send Password Reset Link on Email</button>
                      </div>
                    </div>
                  </div>
                
                {/* <div className="login-register-form-info">
                  <p>Back to <a href="/login">Login</a></p>
                </div> */}
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