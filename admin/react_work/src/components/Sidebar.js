import React from "react";
/* import {Route, Link } from 'react-router-dom'; */
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
const Sidebar = () =>{
    return (
        <div>
            <div className="theme-setting-wrapper">
                <div id="settings-trigger"><i className="typcn typcn-cog-outline"></i></div>
                <div id="theme-settings" className="settings-panel">
                <i className="settings-close typcn typcn-times"></i>
                <p className="settings-heading">SIDEBAR SKINS</p>
                <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
                <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
                <p className="settings-heading mt-2">HEADER SKINS</p>
                <div className="color-tiles mx-0 px-4">
                    <div className="tiles success"></div>
                    <div className="tiles warning"></div>
                    <div className="tiles danger"></div>
                    <div className="tiles info"></div>
                    <div className="tiles dark"></div>
                    <div className="tiles default"></div>
                </div>
                </div>
            </div>
                    
                    
                    
            <div id="right-sidebar" className="settings-panel">
                <i className="settings-close typcn typcn-times"></i>
                <ul className="nav nav-tabs" id="setting-panel" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
                    </li>
                </ul>
                <div className="tab-content" id="setting-content">
                    <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                        <div className="add-items d-flex px-3 mb-0">
                        <form className="form w-100">
                            <div className="form-group d-flex">
                            <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                            <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                            </div>
                        </form>
                        </div>
                        <div className="list-wrapper px-3">
                        <ul className="d-flex flex-column-reverse todo-list">
                            <li>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input className="checkbox" type="checkbox"/>
                                Team review meeting at 3.00 PM
                                </label>
                            </div>
                            <i className="remove typcn typcn-delete-outline"></i>
                            </li>
                            <li>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input className="checkbox" type="checkbox"/>
                                Prepare for presentation
                                </label>
                            </div>
                            <i className="remove typcn typcn-delete-outline"></i>
                            </li>
                            <li>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input className="checkbox" type="checkbox"/>
                                Resolve all the low priority tickets due today
                                </label>
                            </div>
                            <i className="remove typcn typcn-delete-outline"></i>
                            </li>
                            <li className="completed">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input className="checkbox" type="checkbox" checked/>
                                Schedule meeting for next week
                                </label>
                            </div>
                            <i className="remove typcn typcn-delete-outline"></i>
                            </li>
                            <li className="completed">
                            <div className="form-check">
                                <label className="form-check-label">
                                <input className="checkbox" type="checkbox" checked/>
                                Project review
                                </label>
                            </div>
                            <i className="remove typcn typcn-delete-outline"></i>
                            </li>
                        </ul>
                        </div>
                        <div className="events py-4 border-bottom px-3">
                        <div className="wrapper d-flex mb-2">
                            <i className="typcn typcn-media-record-outline text-primary mr-2"></i>
                            <span>Feb 11 2018</span>
                        </div>
                        <p className="mb-0 font-weight-thin text-gray">Creating component page</p>
                        <p className="text-gray mb-0">build a js based app</p>
                        </div>
                        <div className="events pt-4 px-3">
                        <div className="wrapper d-flex mb-2">
                            <i className="typcn typcn-media-record-outline text-primary mr-2"></i>
                            <span>Feb 7 2018</span>
                        </div>
                        <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                        <p className="text-gray mb-0 ">Call Sarah Graves</p>
                        </div>
                    </div>
                    {/* <!-- To do section tab ends --> */}
                    <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                        <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                        <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
                        </div>
                        <ul className="chat-list">
                        <li className="list active">
                            <div className="profile"><img src="images/faces/face1.jpg" alt="bvc"/><span className="online"></span></div>
                            <div className="info">
                            <p>Thomas Douglas</p>
                            <p>Available</p>
                            </div>
                            <small className="text-muted my-auto">19 min</small>
                        </li>
                        <li className="list">
                            <div className="profile"><img src="images/faces/face2.jpg" alt="bvc"/><span className="offline"></span></div>
                            <div className="info">
                            <div className="wrapper d-flex">
                                <p>Catherine</p>
                            </div>
                            <p>Away</p>
                            </div>
                            <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                            <small className="text-muted my-auto">23 min</small>
                        </li>
                        <li className="list">
                            <div className="profile"><img src="images/faces/face3.jpg" alt="bvc"/><span className="online"></span></div>
                            <div className="info">
                            <p>Daniel Russell</p>
                            <p>Available</p>
                            </div>
                            <small className="text-muted my-auto">14 min</small>
                        </li>
                        <li className="list">
                            <div className="profile"><img src="images/faces/face4.jpg" alt="bvc"/><span className="offline"></span></div>
                            <div className="info">
                            <p>James Richardson</p>
                            <p>Away</p>
                            </div>
                            <small className="text-muted my-auto">2 min</small>
                        </li>
                        <li className="list">
                            <div className="profile"><img src="images/faces/face5.jpg" alt="bvc"/><span className="online"></span></div>
                            <div className="info">
                            <p>Madeline Kennedy</p>
                            <p>Available</p>
                            </div>
                            <small className="text-muted my-auto">5 min</small>
                        </li>
                        <li className="list">
                            <div className="profile"><img src="images/faces/face6.jpg" alt="bvc"/><span className="online"></span></div>
                            <div className="info">
                            <p>Sarah Graves</p>
                            <p>Available</p>
                            </div>
                            <small className="text-muted my-auto">47 min</small>
                        </li>
                        </ul>
                    </div>
                    {/*  <!-- chat tab ends --> */}
                </div>
            </div>
            {/*  <!-- partial --> */}

            {/* <!-- partial:partials/_sidebar.html, start here --> */}
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/dashboard">
                        <i className="typcn typcn-device-desktop menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                        
                        </a> */}

                        <Link to="/dashboard" className="nav-link">
                            <i className="typcn typcn-device-desktop menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/all-applied-jobs">
                        <i className="typcn typcn-document-text menu-icon"></i>
                        <span className="menu-title">All Applied Jobs</span>
                        </a> */}

                        <Link to="/all-applied-jobs" className="nav-link">
                            <i className="typcn typcn-device-desktop menu-icon"></i>
                            <span className="menu-title">All Applied Jobs</span>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <i className="typcn typcn-document-text menu-icon"></i>
                        <span className="menu-title">Manage Employes</span>
                        <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">

                            {/* <li className="nav-item"> <a className="nav-link" href="/employes-list">Employes List</a></li>
                            <li className="nav-item"> <a className="nav-link" href="/manage-qualifications">Qualifications</a></li> */}

                            <li>
                                <Link to="/employes-list" className="nav-link">
                                    <span className="menu-title">Employes List</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-qualifications" className="nav-link">
                                    <span className="menu-title">Qualifications</span>
                                </Link>
                            </li>

                        </ul>
                        </div>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-employers" aria-expanded="false" aria-controls="ui-employers">
                        <i className="typcn typcn-document-text menu-icon"></i>
                        <span className="menu-title">Manage Employers</span>
                        <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-employers">
                        <ul className="nav flex-column sub-menu">
                            {/* <li className="nav-item"> <a className="nav-link" href="/employers-list">Employers List</a></li>
                            <li className="nav-item"> <a className="nav-link" href="/manage-company-domains">Company Domains</a></li> */}

                            <li>
                                <Link to="/employers-list" className="nav-link">
                                    <span className="menu-title">Employers List</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-company-domains" className="nav-link">
                                    <span className="menu-title">Company Domains</span>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-jobs" aria-expanded="false" aria-controls="ui-jobs">
                        <i className="typcn typcn-document-text menu-icon"></i>
                        <span className="menu-title">Manage Jobs</span>
                        <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-jobs">
                        <ul className="nav flex-column sub-menu">
                            
                            {/* <li className="nav-item"> <a className="nav-link" href="/all-job-lists">Jobs List</a></li>
                            <li className="nav-item"> <a className="nav-link" href="/manage-job-categories">Job Category</a></li>
                            <li className="nav-item"> <a className="nav-link" href="/manage-job-domains">Job Domain</a></li>
                            <li className="nav-item"> <a className="nav-link" href="/manage-notice-periods">Notice Periods</a></li>
                            <li className="nav-item"> <a className="nav-link" href="/manage-fee-charge-reasons">Fees charges reasons</a></li>
                            <li className="nav-item"> <a className="nav-link" href="/manage-working-days">Working days</a></li>
                            <li className="nav-item"> <a className="nav-link" href="/manage-work-experiance">Work experiance</a></li> */}

                            <li>
                                <Link to="/all-job-lists" className="nav-link">
                                    <span className="menu-title">Jobs List</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-job-categories" className="nav-link">
                                    <span className="menu-title">Job Category</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-job-domains" className="nav-link">
                                    <span className="menu-title">Job Domain</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-notice-periods" className="nav-link">
                                    <span className="menu-title">Notice Periods</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-fee-charge-reasons" className="nav-link">
                                    <span className="menu-title">Fees charges reasons</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-working-days" className="nav-link">
                                    <span className="menu-title">Working days</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-work-experiance" className="nav-link">
                                    <span className="menu-title">Work experiance</span>
                                </Link>
                            </li>

                        </ul>
                        </div>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-location" aria-expanded="false" aria-controls="ui-location">
                        <i className="typcn typcn-film menu-icon"></i>
                        <span className="menu-title">Manage Location</span>
                        <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-location">
                        <ul className="nav flex-column sub-menu">
                            {/* <li className="nav-item"><a className="nav-link" href="/states">Manage State</a></li>
                            <li className="nav-item"><a className="nav-link" href="/cities">Manage City</a></li> */}

                            <li>
                                <Link to="/states" className="nav-link">
                                    <span className="menu-title">Manage State</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/cities" className="nav-link">
                                    <span className="menu-title">Manage City</span>
                                </Link>
                            </li>

                        </ul>
                        </div>
                    </li>
                    
                    
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#form-user" aria-expanded="false" aria-controls="form-user">
                        <i className="typcn typcn-film menu-icon"></i>
                        <span className="menu-title">Admin Users</span>
                        <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="form-user">
                        <ul className="nav flex-column sub-menu">
                            {/* <li className="nav-item"><a className="nav-link" href="/manage-role">Manage Role</a></li>
                            <li className="nav-item"><a className="nav-link" href="/manage-admin-account">Manage Account</a></li> */}

                            <li>
                                <Link to="/manage-role" className="nav-link">
                                    <span className="menu-title">Manage Role</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-admin-account" className="nav-link">
                                    <span className="menu-title">Manage Account</span>
                                </Link>
                            </li>

                        </ul>
                        </div>
                    </li>
                    
                    
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/contact-us-emails">
                        <i className="typcn typcn-document-text menu-icon"></i>
                        <span className="menu-title">Contact Message</span>
                        </a> */}

                        <Link to="/contact-us-emails" className="nav-link">
                            <i className="typcn typcn-document-text menu-icon"></i>
                            <span className="menu-title">Contact Message</span>
                        </Link>

                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#form-website" aria-expanded="false" aria-controls="form-website">
                        <i className="typcn typcn-film menu-icon"></i>
                        <span className="menu-title">Manage Website</span>
                        <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="form-website">
                        <ul className="nav flex-column sub-menu">
                            {/* <li className="nav-item"><a className="nav-link" href="/about-us">About Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contact-us">Contact Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="/blog-lists">Blog List</a></li>
                            <li className="nav-item"><a className="nav-link" href="/manage-blog-categories">Blog Category</a></li>
                            <li className="nav-item"><a className="nav-link" href="/manage-blog-authors">Blogs Author</a></li> */}

                            <li>
                                <Link to="/about-us" className="nav-link">
                                    <span className="menu-title">About Us</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact-us" className="nav-link">
                                    <span className="menu-title">Contact Us</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/blog-lists" className="nav-link">
                                    <span className="menu-title">Blog List</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-blog-categories" className="nav-link">
                                    <span className="menu-title">Blog Category</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/manage-blog-authors" className="nav-link">
                                    <span className="menu-title">Blogs Author</span>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </li>
                
                
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;