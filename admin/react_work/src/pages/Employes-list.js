import React, {useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";//use for show tooltip/title on href
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';
import Pagination from './../components/Pagination';

const EmployesList = () => {

    const [all_candidates, setAllCandidates] = useState([]);

    useEffect(()=>{
        getAllCandidates();
    });

    //fetch all candidate list by api
    const getAllCandidates = async () =>{
        let result = await fetch("http://localhost:12345/all-candidates");
        result = await result.json();
        setAllCandidates(result);
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


    /* update status, start here */
    const updateStatus = useCallback(async (tbl, val, id) => {
        let result_status = await fetch(`http://localhost:12345/update-generic-status/${tbl}/${val}/${id}`);
    }, getAllCandidates());
    /* update status, end here */


    /* soft delete, start here */
    const softDelete = useCallback( async (tbl, val, id) => {
        let result_soft_delete = await fetch(`http://localhost:12345/generic-soft-delete/${tbl}/${val}/${id}`);
    }, getAllCandidates());
    /* soft delete, end here */


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
{
    ((all_candidates.length>0) && (all_candidates[0].name!=='No job found') ? all_candidates.slice(pagination.start, pagination.end).map((item, index) =>
                                                <tr>
                                                    <td>{index+1}.</td>
                                                    <td>
                                                    <Link to={"/candidate-details/"+item.user_id}  data-tip="Click Here For Show Candidate Details" className="text-decoration-none">{item.name}</Link>
                                                    <ReactTooltip />
                                                    </td>
                                                    <td>{item.email}</td>
                                                    <td>{item.mobile_number}</td>
                                                    <td>{item.job_title}</td>
                                                    <td>{item.job_keywords}</td>
                                                    <td>{item.city_name}</td>
                                                    <td>{item.work_experience_name}</td>
                                                    <td>{item.skills}</td>
                                                    <td>{item.notice_period_name}</td>
                                                    <td>Download</td>
                                                    <td>

                                                        {
                                                        (item.status==='1') ? 
                                                            
                                                        <label class="toggle-switch toggle-switch-success">
                                                            <input type="checkbox" onClick={()=>updateStatus('candidate_details','0',item.id)} checked/>
                                                            <span class="toggle-slider round"></span>												  
                                                        </label>
                                                        : 
                                                        <label class="toggle-switch toggle-switch-success">
                                                            <input type="checkbox" onClick={()=>updateStatus('candidate_details','1',item.id)} />
                                                            <span class="toggle-slider round"></span>												  
                                                        </label>
                                                        }
                                                        

                                                    </td>

                                                    <td>
                                                        {
                                                            (item.is_deleted==='1') ? 
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox"  onClick={()=>softDelete('candidate_details','0',item.id)} checked/>
                                                                <span class="toggle-slider round"></span>
                                                            </label>
                                                            :
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox"  onClick={()=>softDelete('candidate_details','1',item.id)} />
                                                                <span class="toggle-slider round"></span>
                                                            </label>
                                                        }
                                                         

                                                    </td>					
                                                </tr>)
                                                :
                                                null)
                                                }
                                            </tbody>
                                            
                                        </table>

                                        {
                                        (((Math.ceil(all_candidates.length/showPerPage))>1) && (all_candidates[0].name!=='No job found')) ? 
                                        <div className="row paging_gap">
                                            <div className="col-lg-12 text-center">
                                                <div className="pagination-area">
                                                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={all_candidates.length}/>
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

export default EmployesList;