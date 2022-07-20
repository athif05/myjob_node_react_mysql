import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import validator from 'validator'; //email validation

const Registration = () =>{

  const [user_type, setUserType] = useState(1);
  const [name_cand, setNameCand] = useState('');
  const [number_cand, setNumberCand] = useState('');
  const [email_cand, setEmailCand] = useState('');
  const [password_cand, setPasswordCand] = useState('');
  const [confirm_password_cand, setConfirmPasswordCand] = useState('');
  const [policy_cand, setPolicyCand] = useState();

  const [error, setError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [success, setSuccess] = useState(false);

  /* const [name_empl, setNameEmpl] = useState('');
  const [number_empl, setNumberEmpl] = useState('');
  const [email_empl, setEmailEmpl] = useState('');
  const [password_empl, setPasswordEmpl] = useState('');
  const [confirm_password_empl, setConfirmPasswordEmpl] = useState('');
  const [policy_empl, setPolicyEmpl] = useState(); */

  /* const [error_empl, setErrorEmpl] = useState(false);
  const [emailError_empl, setEmailErrorEmpl] = useState(false);
  const [success_empl, setSuccessEmpl] = useState(false); */

  useEffect(() => {
    document.title = 'BVC | Registration';
  });

  function handleClick(event, param) {
    console.log('call function cand'+event+' / '+param);
    setUserType(param);
  }

  const doRegisterCand = async()=>{
    

    if(!name_cand || !number_cand || !email_cand || !password_cand || !confirm_password_cand || !policy_cand){
      setError(true);
      setSuccess(false);
      return false;
    }

    if(number_cand.length<10){
      setNumberError('Enter valid number!');
      return false;
    }  else {
      setNumberError('');
    }

    if (!validator.isEmail(email_cand)) {   
      setEmailError('Enter valid Email!');
      return false;
    }  else {
      setEmailError('');
    }

    if(!password_cand.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
      setPasswordError('1. Password length should be 8.\n2. Password must contain one upper case letter.\n3. Password must contain one special character.\n4. Password must contain one numeric character.');
      return false;
    } else {
      setPasswordError('');
    }

    if(password_cand !== confirm_password_cand){
      setConfirmPasswordError('Password and Confirm Password are not match.');
      return false;
    } else {
      setConfirmPasswordError('');
    }

    console.log('doRegisterCand');

    setError(false);
    setSuccess(true);

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
                  {success && <div class="alert alert-success" role="alert">Added Successfully</div>}
                </div>
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="candidate-tab" data-bs-toggle="pill" data-bs-target="#candidate" type="button" role="tab" aria-controls="candidate" aria-selected="true" onClick={event => handleClick(event, '1')} ><i className="icofont-businessman"></i> Candidate</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="employer-tab" data-bs-toggle="pill" data-bs-target="#employer" type="button" role="tab" aria-controls="employer" aria-selected="false" onClick={event => handleClick(event, '2')} ><i className="icofont-bag-alt"></i> Employer</button>
                  </li>

                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="candidate" role="tabpanel" aria-labelledby="candidate-tab">
                    <form action="#">
                    <input type="text" name="user_type" id="user_type" value={user_type} onChange={(e)=>setUserType(e.target.value)}/>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="text" name="name_cand" id="name_cand" placeholder="Name" pattern="[a-zA-Z ]*" value={name_cand} onChange={(e) => setNameCand((v) => (e.target.validity.valid ? e.target.value : v))} maxLength={100}/>
                            {error && !name_cand && <span className="invalid-input">Enter name</span> }
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input type="text" pattern="[0-9]*" title="number only" name="number_cand" id="number_cand" placeholder="Number" value={number_cand} onChange={(e) => setNumberCand((v) => (e.target.validity.valid ? e.target.value : v))} maxLength={10} className="form-control"/>
                            {error && !number_cand && <span className="invalid-input">Enter number</span> }
                            <span style={{color: 'red',}}>{numberError}</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="email" name="email_cand" id="email_cand" placeholder="Email" value={email_cand} onChange={(e)=>setEmailCand(e.target.value)} maxLength={50}/>
                            {error && !email_cand && <span className="invalid-input">Enter email</span> }
                            <span style={{color: 'red',}}>{emailError}</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="password" name="password_cand" id="password_cand" placeholder="Password" value={password_cand} onChange={(e)=>setPasswordCand(e.target.value)}/>
                            {error && !password_cand && <span className="invalid-input">Enter password</span> }
                            <span className="display-linebreak" style={{color: 'red',}}>{passwordError}</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="password" name="confirm_password_cand" id="confirm_password_cand" placeholder="Confirm Password" value={confirm_password_cand} onChange={(e)=>setConfirmPasswordCand(e.target.value)}/>
                            {error && !confirm_password_cand && <span className="invalid-input">Enter confirm password</span> }
                            <span style={{color: 'red',}}>{confirmPasswordError}</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <div className="remember-forgot-info">
                              <div className="remember">
                                <input className="form-check-input" type="radio" value="1" name="policy_cand" id="policy_cand" onChange={(e)=>setPolicyCand(e.target.value)}/>
                                <label className="form-check-label">Accept our terms and conditions and privacy policy.</label><br/>
                                {error && !policy_cand && <span className="invalid-input">Please accept terms and conditions and privacy policy</span> }
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button type="button" className="btn-theme" onClick={doRegisterCand}>Register Now</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* <div className="tab-pane fade" id="employer" role="tabpanel" aria-labelledby="employer-tab">
                    <form action="#">
                      <input type="hidden" name="user_type" id="user_type_empl" value="2"/>
                      <div className="row">
                      <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="text" name="name_empl" id="name_empl" placeholder="Name" value={name_empl} onChange={(e)=>setNameEmpl(e.target.value)}/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="text" name="number_empl" id="number_empl" placeholder="Number" value={number_empl} onChange={(e)=>setNumberEmpl(e.target.value)}/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="email" name="email_empl" id="email_empl" placeholder="Email" value={email_empl} onChange={(e)=>setEmailEmpl(e.target.valueAsNumber)}/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="password" name="password_empl" id="password_empl" placeholder="Password" value={password_empl} onChange={(e)=>setPasswordEmpl(e.target.value
                              )}/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="password" name="confirm_password_empl" id="confirm_password_empl" placeholder="Confirm Password" vale={confirm_password_empl} onChange={(e)=>setConfirmPasswordEmpl(e.target.value)}/>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <div className="remember-forgot-info">
                              <div className="remember">
                                <input className="form-check-input" type="radio" value="1" name="policy_empl" id="policy_empl" onChange={(e)=>setPolicyEmpl(e.target.value)}/>
                                <label className="form-check-label">Aaccept our terms and conditions and privacy policy.</label><br/>
                                {error_empl && !policy_empl && <span className="invalid-input">Please accept terms and conditions and privacy policy</span> }
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button type="button" className="btn-theme" onClick={doRegisterEmpl}>Register Now</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div> */}

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