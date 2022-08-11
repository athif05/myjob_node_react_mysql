import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

const Login = () =>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //set error message state
  const [errorMessage, setErrorMessage] = useState("");

  //create navigation
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'BVC | Login';

    const auth = localStorage.getItem('react_user_front');
    if(auth){
      navigate('/jobs');
    }

  });

  /* login function, start here */
  const handleLogin = async() =>{

    let result = await fetch('http://localhost:12345/user-login',{
      method: 'post',
      body: JSON.stringify({email, password}),
      headers:{
        'Content-Type': 'application/json'
      },
    });

    result = await result.json();
    console.warn(result);

    if(result.name!=='No record found'){
      //console.log(result.name);
      localStorage.setItem('react_user_front',JSON.stringify(result));
      navigate('/jobs');
    }  else {
      setErrorMessage("Please enter correct details..");
    }

  }
  /* login function, end here */

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
                  {errorMessage && (
                    <div className="alert alert-danger text-center">
                      {errorMessage}
                    </div>
                  )}
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
                        <button type="button" className="btn-theme" onClick={handleLogin}>Sign In</button>
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