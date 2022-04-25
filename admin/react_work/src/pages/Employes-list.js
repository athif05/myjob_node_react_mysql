import React from "react";
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';

const EmployesList = () => {
    return(

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
                                            <h5 className="mb-2 text-titlecase mb-4 text-left">Manage Candidates</h5>
                                        </div>				
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="table-responsive pt-3">
                                        <table className="table table-striped project-orders-table" id="my_datatable">
                                            <thead>
                                                <tr>
                                                    <th class="ml-5">#</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile</th>
                                                    <th>Job Title</th>
                                                    <th>Job Keywords</th>
                                                    <th>City</th>
                                                    <th>Work Wxperience</th>
                                                    <th>Skills</th>
                                                    <th>Notice Period</th>
                                                    <th>Resume File</th>
                                                    <th>Status</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td>1.</td>
                                                    <td>Rohan link for details</td>
                                                    <td>rohan@gmail.com</td>
                                                    <td>8998889988</td>
                                                    <td>Writer</td>
                                                    <td>Content</td>
                                                    <td>Delhi</td>
                                                    <td>2 years</td>
                                                    <td>Content</td>
                                                    <td>1 Month</td>
                                                    <td>Download</td>
                                                    <td>

                                                        <label class="toggle-switch toggle-switch-success">
                                                            <input type="checkbox" id="employer_detail_id"/>
                                                            <span class="toggle-slider round"></span>												  
                                                        </label>

                                                    </td>

                                                    <td>

                                                        <label class="toggle-switch toggle-switch-success">
                                                            <input type="checkbox" id="employer_detail_del_id"/>
                                                            <span class="toggle-slider round"></span>
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

export default EmployesList;