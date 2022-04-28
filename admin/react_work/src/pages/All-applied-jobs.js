import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';
import Pagination from './../components/Pagination';
import Moment from 'moment'; //use for convert date format.
import ReactTooltip from 'react-tooltip'; //use for show tooltip/title on href

const AllAppliedJobs = () => {

    //set state for show all jobs
    const [applied_jobs, setAppliedJob] = useState([]);

    //call all jobs
    useEffect( () => {
        getAppliedJobs();
    },[]);

    
    //fetch all applied jobs list
    const getAppliedJobs = async () => {
        let result = await fetch("http://localhost:12345/applied-jobs");
        //console.warn(result);
        result = await result.json();

        setAppliedJob(result);
    }

    /* Pagination, start here */
    const [showPerPage, setShowPerPage] = useState(10);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end});
    };
    /* Pagination, end here */

    /* update job status, start here */
    const jobStatus = async (val, id) => {
        let result_status = await fetch(`http://localhost:12345/update-applied-jobs-status/${val}/${id}`);

        getAppliedJobs();
    }
    /* update job status, end here */

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

                                                {
                                                    ((applied_jobs.length>0) && (applied_jobs[0].name!=='No job found') ? applied_jobs.slice(pagination.start, pagination.end).map((item, index) =>
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
                                                    <td>{Moment(item.applied_date).format('DD-MM-YYYY')}</td>
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
                                        
                                        {
                                        (((Math.ceil(applied_jobs.length/showPerPage))>1) && (applied_jobs[0].name!=='No job found')) ? 
                                        <div className="row paging_gap">
                                            <div className="col-lg-12 text-center">
                                                <div className="pagination-area">
                                                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={applied_jobs.length}/>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <></>
                                        }
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