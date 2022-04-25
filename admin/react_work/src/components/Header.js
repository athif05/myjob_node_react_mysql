import React from "react";

const Header = () => {
      
    return (
        <>
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  
                <div className="navbar-brand-wrapper d-flex justify-content-center">
                    <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">

                        <a className="navbar-brand brand-logo" href="/admin">
                            <img src="assests/images/bvc-logo.png" alt="logo"/>
                        </a>

                        <a className="navbar-brand brand-logo-mini" href="/admin">
                            <img src="assests/images/bvc-logo.png" alt="logo"/>
                        </a>

                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="typcn typcn-th-menu"></span>
                        </button>

                    </div>
                </div>

                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <ul className="navbar-nav mr-lg-2">
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link" href="/admin" data-toggle="dropdown" id="profileDropdown">
                                <img src="assests/images/faces/user-icon.png" alt="profile"/>
                                <span className="nav-profile-name">Admin</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item" href="/admin/logout">
                                    <i className="typcn typcn-eject text-primary"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul>

                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-date dropdown">
                            <span className="nav-link d-flex justify-content-center align-items-center">
                                <h6 className="date mb-0">Today : 20-Apr-2022</h6>
                                <i className="typcn typcn-calendar"></i>
                            </span>
                        </li>
                    </ul>

                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="typcn typcn-th-menu"></span>
                    </button>
                    
                </div>
                
            </nav>
        </>
    )
}

export default Header;