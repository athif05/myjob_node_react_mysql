import React from "react";
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';

const Dashboard = () => {
    return(

        <div className="container-scroller">
            
            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />

                <div class="main-panel">
                    <div class="content-wrapper">
                        <div className="row">
                    
                            <div className="col-md-4 grid-margin stretch-card">
                                <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                                    <div>
                                        <p className="mb-2 text-md-center text-lg-left">Total Jobs</p>
                                        <h1 className="mb-0">20</h1>
                                    </div>
                                    <i className="typcn typcn-clipboard icon-xl text-secondary"></i>
                                    
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                    
                            <div className="col-md-4 grid-margin stretch-card">
                                <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                                    <div>
                                        <p className="mb-2 text-md-center text-lg-left">Total Candidates</p>
                                        <h1 className="mb-0">30</h1>
                                    </div>
                                    <i className="typcn typcn-chart-pie icon-xl text-secondary"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                    
                            <div className="col-md-4 grid-margin stretch-card">
                                <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                                    <div>
                                        <p className="mb-2 text-md-center text-lg-left">Total Employers</p>
                                        <h1 className="mb-0">10</h1>
                                    </div>
                                    <i className="typcn typcn-briefcase icon-xl text-secondary"></i>
                                    </div>
                                    {/* <canvas id="balance-chart" height="80"></canvas> */}
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                            
                                    <h5 className="mb-2 text-titlecase mb-4 text-left">Applied Jobs List</h5>
                            
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
                                                    <td> 1</td>
                                                    <td>Rohan</td>
                                                    <td>rohan@gmail.com</td>
                                                    <td>8980909880</td>
                                                    <td>Content Writer</td>
                                                    <td>5Lack</td>
                                                    <td>Gurugram</td>
                                                    <td>BVC</td>
                                                    <td>12-12-2021</td>
                                                    <td>
                                                        <div className="btn-group-vertical" role="group" aria-label="Basic example">

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" id="job_status_id_{{$all_applied_job['id']}}">
                                                                New
                                                                </button>
                                                                {/* <div className="dropdown-menu">
                                                                    <a alt="New" className="dropdown-item">New</a>
                                                                    <a alt="Progress" className="dropdown-item">Progress</a>
                                                                    <a alt="Selected" className="dropdown-item">Selected</a>
                                                                    <a alt="Rejected" className="dropdown-item">Rejected</a>
                                                                </div> */}                          
                                                            </div>
                                                        </div>
                                                    </td>        
                                                </tr>

                                                <tr>
                                                    <td colspan="10">No job record...</td>
                                                </tr>
                                            
                                            </tbody>
                                        </table>
                                
                            
                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                <div className="pagination-area">
                                                    <nav>
                                                        <ul className="page-numbers d-inline-flex">
                                                            Paging
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

export default Dashboard;