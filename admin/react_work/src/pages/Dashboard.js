import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';
import ReactTooltip from 'react-tooltip'; //use for show tooltip/title on href

const Dashboard = () => {

    //set state for show all jobs
    const [applied_jobs, setAppliedJob] = useState([]);
    const [total_count, setTotalCount] = useState([]);

    //call all jobs
    useEffect( () => {
        getAppliedJobs();
        getTotalCount();
    },[]);

    
    /* fetch all applied jobs list, start here */
    const getAppliedJobs = async () => {
        let result = await fetch("http://localhost:12345/today-applied-jobs");
        //console.warn(result);
        result = await result.json();

        setAppliedJob(result);
    }
    /* fetch all applied jobs list, end here */


    /* update job status, start here */
    const jobStatus = async (val, id) => {
        let result_status = await fetch(`http://localhost:12345/update-applied-jobs-status/${val}/${id}`);

        getAppliedJobs();
    }
    /* update job status, end here */


    /* fetch all total jobs, candidate and employer, start here */
    const getTotalCount = async () => {
        let result_count_job = await fetch("http://localhost:12345/count-job-candidate-employer");
        //console.warn(result);
        result_count_job = await result_count_job.json();

        setTotalCount(result_count_job);
    }
    /* fetch all total jobs, candidate and employer, end here */

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
                                        <h1 className="mb-0">
                                        {
                                            (total_count.map((item_total_job, index) =>
                                                item_total_job.total_job
                                            ))
                                        }
                                        </h1>
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
                                        <h1 className="mb-0">
                                        {
                                            (total_count.map((item_total_job, index) =>
                                                item_total_job.total_candidate
                                            ))
                                        }
                                        </h1>
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
                                        <h1 className="mb-0">
                                        {
                                            (total_count.map((item_total_job, index) =>
                                                item_total_job.total_employer
                                            ))
                                        }
                                        </h1>
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
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    ((applied_jobs.length>0) && (applied_jobs[0].name!=='No job found') ? applied_jobs.map((item, index) =>
                                                <tr>
                                                    <td>{index+1}.</td>
                                                    <td>
                                                        <Link to={"/candidate-details/"+item.user_id} data-tip="Click Here For Show Candidate Details" className="text-decoration-none">{item.candidate_name}</Link>
                                                    </td>
                                                    <td>{item.candidate_email}</td>
                                                    <td>{item.candidate_mobile_number}</td>
                                                    <td>
                                                        <Link to={"/job-details/"+item.job_id} data-tip="Click Here For Show Job Details" className="text-decoration-none">{item.job_title}</Link>
                                                        <ReactTooltip delayHide={1000}/>
                                                    </td>
                                                    <td>{item.ctc}</td>
                                                    <td>{item.job_location_name}</td>
                                                    <td>{item.company_name}</td>
                                                    <td>

                                                        <div className="btn-group-vertical" role="group" aria-label="Basic example">

                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" id="job_status_id_{item.id}">
                                                                {(item.job_status==='0') ? "Rejected" :null}
                                                                {(item.job_status==='1') ? "New":null}
                                                                {(item.job_status==='2') ? "Progress" :null}
                                                                {(item.job_status==='3') ? "Selected" :null}
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" onClick={()=>jobStatus('1',item.id)}>New</a>
                                                                    <a className="dropdown-item" onClick={()=>jobStatus('2',item.id)}>Progress</a>
                                                                    <a className="dropdown-item" onClick={()=>jobStatus('3',item.id)}>Selected</a>
                                                                    <a className="dropdown-item" onClick={()=>jobStatus('0',item.id)}>Rejected</a>
                                                                </div>                       
                                                            </div>
                                                        </div>
                                                    </td>					
                                                </tr>
                                                )
                                                :
                                                <tr>
                                                    <td colSpan={10}>No job found...</td>
                                                </tr>
                                                    )
                                                    }
                                            </tbody>
                                        </table>
                                        
                                        
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