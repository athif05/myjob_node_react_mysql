import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import validator from 'validator'; //email validation

const Registration = () =>{

  /* set states for all inputs */
  const [user_type, setUserType] = useState(1);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [policy, setPolicy] = useState();

  const [error, setError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [success, setSuccess] = useState(false);

  /* this function called when this page load */
  useEffect(() => {
    document.title = 'BVC | Registration';
  });

  /* this function is used for changed the user type value by onclick on button */
  function handleClick(event, param) {
    console.log('User Type: '+param);
    setUserType(param);
  }


  /* this function call, when form submit */
  const doRegister = async()=>{
    
    if(!name || !number || !email || !password || !confirm_password || !policy){
      setError(true);
      setSuccess(false);
      return false;
    }

    if(number.length<10){
      setNumberError('Enter valid number!');
      return false;
    }  else {
      setNumberError('');
    }

    if (!validator.isEmail(email)) { 
      setEmailError('Enter valid Email!');
      return false;
    }  else {
      setEmailError('');
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
      setPasswordError('1. Password length should be 8.\n2. Password must contain one upper case letter.\n3. Password must contain one special character.\n4. Password must contain one numeric character.');
      return false;
    } else {
      setPasswordError('');
    }

    if(password !== confirm_password){
      setConfirmPasswordError('Password and Confirm Password are not match.');
      return false;
    } else {
      setConfirmPasswordError('');
    }

    console.log('doRegister');

    let result = await fetch("http://localhost:12345/user-registration",{
      method: "post",
      body:JSON.stringify({name, number, email, password, user_type}),
      headers:{
          "Content-Type":"application/json"
      }
    });

    result = await result.json();
    console.log(result);

    setError(false);
    setSuccess(true);
    setName('');
    setEmail('');
    setNumber('');
    setPassword('');
    setConfirmPassword('');

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
                  {success && <div className="alert alert-success" role="alert">Registered Successfully</div>}
                </div>
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="idate-tab" data-bs-toggle="pill" data-bs-target="#idate" type="button" role="tab" aria-controls="idate" aria-selected="true" onClick={event => handleClick(event, '1')} ><i className="icofont-businessman"></i> Candidate</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="employer-tab" data-bs-toggle="pill" data-bs-target="#employer" type="button" role="tab" aria-controls="employer" aria-selected="false" onClick={event => handleClick(event, '2')} ><i className="icofont-bag-alt"></i> Employer</button>
                  </li>

                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="idate" role="tabpanel" aria-labelledby="idate-tab">
                    <form action="#">
                    <input type="hidden" name="user_type" id="user_type" value={user_type} onChange={(e)=>setUserType(e.target.value)}/>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="text" name="name" id="name" placeholder="Name" pattern="[a-zA-Z ]*" value={name} onChange={(e) => setName((v) => (e.target.validity.valid ? e.target.value : v))} maxLength={100}/>
                            {error && !name && <span className="invalid-input">Enter name</span> }
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input type="text" pattern="[0-9]*" title="number only" name="number" id="number" placeholder="Number" value={number} onChange={(e) => setNumber((v) => (e.target.validity.valid ? e.target.value : v))} maxLength={10} className="form-control"/>
                            {error && !number && <span className="invalid-input">Enter number</span> }
                            <span style={{color: 'red',}}>{numberError}</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} maxLength={50}/>
                            {error && !email && <span className="invalid-input">Enter email</span> }
                            <span style={{color: 'red',}}>{emailError}</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            {error && !password && <span className="invalid-input">Enter password</span> }
                            <span className="display-linebreak" style={{color: 'red',}}>{passwordError}</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" value={confirm_password} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                            {error && !confirm_password && <span className="invalid-input">Enter confirm password</span> }
                            <span style={{color: 'red',}}>{confirmPasswordError}</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <div className="remember-forgot-info">
                              <div className="remember">
                                <input className="form-check-input" type="radio" value="1" name="policy" id="policy" onChange={(e)=>setPolicy(e.target.value)}/>
                                <label className="form-check-label">Accept our terms and conditions and privacy policy.</label><br/>
                                {error && !policy && <span className="invalid-input">Please accept terms and conditions and privacy policy</span> }
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button type="button" className="btn-theme" onClick={doRegister}>Register Now</button>
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