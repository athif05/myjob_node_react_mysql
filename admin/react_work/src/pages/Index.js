import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';


const Index = () => {

  //set state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //set error message state
  const [errorMessage, setErrorMessage] = useState("");

  //create navigation
  const navigate = useNavigate();

  //check auth.
  useEffect(()=>{
    const auth = localStorage.getItem('react_user');
    if(auth){
        navigate('/dashboard');
    }
  });

  /* login function, start here */
  const handleLogin = async() =>{
    console.log('login api call here...');

    let result = await fetch('http://localhost:12345/login',{
      method: 'post',
      body: JSON.stringify({email, password}),
      headers:{
        'Content-Type': 'application/json'
      },
    });

    result = await result.json();
    console.warn(result);

    if(result[0].name!='No record found'){
      console.log(result[0].name);
      localStorage.setItem('react_user',JSON.stringify(result));
      navigate('/dashboard');
    }  else {
      setErrorMessage("Please enter correct details..");
    }

  }
  /* login function, end here */

    return(
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo text-center">
                    <img src="assests/images/bvc-logo.png" alt="logo"/>
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>

                  {errorMessage && (
                    <div class="alert alert-danger text-center">
                      {errorMessage}
                    </div>
                  )}

                    <div className="form-group">
                      <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="mt-3">
                      <input type="submit" name="submit" value="Sign In" onClick={handleLogin} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"/>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" name="remember_me" id="remember_me" className="form-check-input"/>
                          Keep me signed in
                        </label>
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>

    )
}

export default Index;