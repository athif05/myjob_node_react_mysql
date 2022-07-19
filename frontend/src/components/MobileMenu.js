import React from "react";

const MobileMenu = () => {

    return (
        <>
            <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h1 className="d-none" id="offcanvasExampleLabel">Aside Menu</h1>
                    <button className="btn-menu-close" data-bs-dismiss="offcanvas" aria-label="Close">menu <i className="icofont-simple-left"></i></button>
                </div>
                <div className="offcanvas-body">

                    <div className="mobile-menu-items">
                        <ul className="nav-menu">
                            <li><a href="index">Home</a></li>
                            <li><a href="test-url">Find Jobs</a>
                                <ul className="sub-menu">
                                    <li><a href="/jobs">Jobs</a></li>
                                    <li><a href="/job-details">Job Details</a></li>
                                </ul>
                            </li>
                            <li><a href="employers-details">Employers Details</a></li>
                            <li><a href="test-url">Candidates</a>
                                <ul className="sub-menu">
                                    <li><a href="candidate">Candidates</a></li>
                                    <li><a href="candidate-details">Candidate Details</a></li>
                                </ul>
                            </li>
                            <li><a href="test-url">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-grid">Blog Grid</a></li>
                                    <li><a href="blog">Blog Left Sidebar</a></li>
                                    <li><a href="blog-right-sidebar">Blog Right Sidebar</a></li>
                                    <li><a href="blog-details">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="test-url">Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="about-us">About us</a></li>
                                    <li><a href="login">Login</a></li>
                                    <li><a href="registration">Registration</a></li>
                                    <li><a href="page-not-found">Page Not Found</a></li>
                                </ul>
                            </li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </aside>
        </>
    )
}

export default MobileMenu;