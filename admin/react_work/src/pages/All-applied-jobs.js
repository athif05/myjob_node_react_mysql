import React from "react";
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';

const AllAppliedJobs = () => {
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
                                            <h5 className="mb-2 text-titlecase mb-4 text-left">Manage Applied Jobs</h5>
                                        </div>				
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="table-responsive pt-3">
                                        <table className="table table-striped project-orders-table" id="my_datatable">
                                            <thead>
                                                <tr>
                                                    <th className="ml-5">#</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile</th>
                                                    <th>Job Title</th>
                                                    <th>CTC</th>
                                                    <th>Job Location</th>
                                                    <th>Company Name</th>
                                                    <th>Applied Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td>1.</td>
                                                    <td>Sunny</td>
                                                    <td>sunny@gmail.com</td>
                                                    <td>6789098778</td>
                                                    <td>Developer</td>
                                                    <td>4L</td>
                                                    <td>Delhi</td>
                                                    <td>BVC</td>
                                                    <td>12-Apr-2022</td>
                                                    <td>

                                                        <div className="btn-group-vertical" role="group" aria-label="Basic example">

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" id="job_status_id_{{$all_applied_job['id']}}">
                                                                New
                                                                </button>
                                                                {/* <div className="dropdown-menu" style="font-size:13px;">
                                                                <a className="dropdown-item">New</a>
                                                                <a className="dropdown-item" onclick="job_status('2','{{$all_applied_job['id']}}')">Progress</a>
                                                                <a className="dropdown-item" onclick="job_status('3','{{$all_applied_job['id']}}')">Selected</a>
                                                                <a className="dropdown-item" onclick="job_status('0','{{$all_applied_job['id']}}')">Rejected</a>
                                                                </div>   */}                        
                                                            </div>
                                                        </div>
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

export default AllAppliedJobs;