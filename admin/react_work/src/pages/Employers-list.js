import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const EmployersList = () => {
    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">

                        <div className="row">
                        <div className="col-md-12">
                        
                        <div className="">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="mb-2 text-titlecase mb-4 text-left">Manage Employers</h5>
                                </div>				
                            </div>
                        </div>
                        
                        
                            <div className="card">
                            <div className="table-responsive pt-3">
                                <table className="table table-striped project-orders-table" id="my_datatable">
                                <thead>
                                    <tr>
                                    <th className="ml-5">#</th>
                                    <th>Logo</th>
                                    <th>Company Name</th>
                                    <th>City</th>
                                    <th>Email</th>
                                    <th>Mobile No.</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Domain</th>
                                    <th>Website</th>
                                    <th>Established Year</th>
                                    <th>Status</th>
                                    <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                    <td>1.</td>
                                    <td>
                                        <img src="assests/images/bvc-logo.png" alt="logo"/> 
                                    </td>
                                    <td>
                                       <a href="/single-employers-details" target="_blank">ITG</a>
                                    </td>
                                    <td>Noida</td>
                                    <td>itg@gmail.com</td>
                                    <td>7867564578</td>
                                    <td>+121-23457,89</td>
                                    <td>H-315, Sector 62</td>
                                    <td>Tech</td>
                                    <td>itg.com</td>
                                    <td>2017</td>
                                    <td>
                                                                    
                                        <label className="toggle-switch toggle-switch-success">
                                            <input type="checkbox" id="employer_detail_1"/>
                                            <span className="toggle-slider round"></span>												  
                                        </label>
                                    
                                    </td>
                                    
                                    <td>
                                                                    
                                        <label className="toggle-switch toggle-switch-success">
                                            <input type="checkbox" id="employer_detail_del_1" checked />
                                            <span className="toggle-slider round"></span>
                                        </label> 
                                    
                                    </td>
                                    </tr>
                                
                                </tbody>
                                </table>
                                
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                    <div className="pagination-area">
                                        <nav>
                                        <ul className="page-numbers d-inline-flex">
                                        
                                            paging
                                        
                                        </ul>
                                        </nav>
                                    </div>
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>
                        </div>

                        </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default EmployersList;