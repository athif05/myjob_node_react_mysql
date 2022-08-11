import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    

    //get item from local storage
    const auth = localStorage.getItem('react_user_front');
    /* var auth_json=JSON.parse(JSON.stringify(auth)); //convert string into json
    setLoginDetails(auth_json);
    console.log(loginDetails); */

    if(auth){
        const userData = JSON.parse(localStorage.getItem('react_user_front'));
        var user_type = userData.user_type;
        var user_id = userData.id;
    } else {
        var user_type='';
        var user_id = '';
    }
    


    //logout function
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <>
        <header className="header-area transparent">
            <div className="container">
            <div className="row no-gutter align-items-center position-relative">
                <div className="col-12">
                <div className="header-align">
                    <div className="header-align-start">
                    <div className="header-logo-area">
                        <a href="/">
                            <img className="logo-main" src="/assets/img/bvc-logo.png" alt="BVC" />
                            <img className="logo-light" src="/assets/img/bvc-logo.png" alt="BVC" />
                        </a>
                    </div>
                    </div>
                    <div className="header-align-center">
                    <div className="header-navigation-area position-relative">
                        <ul className="main-menu nav">

                        <li><a href="/"><span>Home</span></a></li>

                        <li><a href="/jobs"><span>Jobs</span></a></li>

                        <li><a href="/blog"><span>Blog</span></a></li>

                        <li><a href="/about-us"><span>About Us</span></a></li>

                        <li><a href="/contact-us"><span>Contact Us</span></a></li>

                        { (auth) ?
                            <li className="has-submenu"><a href="/#"><span>My Account</span></a>
                                <ul className="submenu-nav">
                                    
                                    {(() => {
                                    switch (user_type) {
                                        case "1":   return <>
                                        <li><a href={"/candidate-details/"+user_id}><span>Profile</span></a></li>
                                        <li><a href="/job-details"><span>Job Listing</span></a></li>
                                        <li><a href="/login" onClick={logout}><span>Logout</span></a></li>
                                        </>;
                                        case "2": return <>
                                        <li><a href="/jobs"><span>Profile</span></a></li>
                                        <li><a href="/job-details"><span>All Jobs</span></a></li>
                                        <li><a href="/job-details"><span>Post New Job</span></a></li>
                                        <li><a href="/login" onClick={logout}><span>Logout</span></a></li>
                                        </>;
                                        default:      return "null";
                                    }
                                    })()}

                                </ul>
                            </li> 
                            : 
                            <li><a href="/login"><span>Login</span></a></li>
                        }
                        
                        

                        {/* <li className="has-submenu"><a href="/#"><span>Find Jobs</span></a>
                            <ul className="submenu-nav">
                            <li><a href="/jobs"><span>Jobs</span></a></li>
                            <li><a href="/job-details"><span>Job Details</span></a></li>
                            </ul>
                        </li>
                        <li><a href="employers-details"><span>Employers Details</span></a></li> */}
                        
                        </ul>
                    </div>
                    </div>
                    {/* <div className="header-align-end">
                    <div className="header-action-area">
                        <a className="btn-registration" href="registration"><span>+</span> Registration</a>
                        <button className="btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasMenu" aria-controls="AsideOffcanvasMenu">
                        <i className="icofont-navigation-menu"></i>
                        </button>
                    </div>
                    </div> */}
                </div>
                </div>
            </div>
            </div>
        </header>
        </>
    )

}

export default Header;