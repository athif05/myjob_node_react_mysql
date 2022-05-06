import React, { useEffect, useState, useCallback} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import ReactTooltip from "react-tooltip";


const AllJobLists = () => {

    const [all_jobs, setAllJob] = useState([]);
    const [cities, setCity] = useState([]);

    useEffect(()=>{
        getAllJob();
        getCity();
    });

    const getAllJob = async ()=>{
        let result = await fetch(`http://localhost:12345/all-jobs`);

        result = await result.json();
        setAllJob(result);
    }

    const getCity = async ()=>{
        let result_city = await fetch(`http://localhost:12345/all-cities`);
		result_city = await result_city.json();
		setCity(result_city);
    }

    /* update status, start here */
    const updateStatus = useCallback(async (tbl, val, id) => {
        let result_status = await fetch(`http://localhost:12345/update-generic-status/${tbl}/${val}/${id}`);
    }, getAllJob());
    /* update status, end here */


    /* soft delete, start here */
    const softDelete = useCallback( async (tbl, val, id) => {
        let result_soft_delete = await fetch(`http://localhost:12345/generic-soft-delete/${tbl}/${val}/${id}`);
        result_soft_delete = await result_soft_delete.json();
        console.log(result_soft_delete);
    }, getAllJob());
    /* soft delete, end here */


    /* Pagination, start here */
    const [showPerPage, setShowPerPage] = useState(10);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };
    /* Pagination, end here */

    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper text-left">

                        <div className="row">
                            <div className="col-md-12">

                                <div className="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5 className="mb-2 text-titlecase mb-4">Job Lists</h5>
                                        </div>
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="table-responsive pt-3">
                                        <table className="table table-striped project-orders-table" id="my_datatable">
                                            <thead>
                                                <tr>
                                                    <th className="ml-5">#</th>
                                                    <th>Company Name</th>
                                                    <th>Job Title</th>
                                                    <th>Salary</th>
                                                    <th>Opening</th>
                                                    <th>Job Location</th>
                                                    <th>City</th>
                                                    <th>Job Types</th>
                                                    <th>Working Days</th>
                                                    <th>Experience</th>
                                                    <th>Skills</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                ((all_jobs.length>0) && (all_jobs[0].name!=='No record found') ? all_jobs.slice(pagination.start, pagination.end).map((item, index) =>
                                                <tr>
                                                    <td>{index+1}.</td>
                                                    <td>
                                                        <Link to={"/employer-details/"+item.employer_id} target="_blank" data-tip="Click Here For Show Company Details" className="text-decoration-none">{item.company_name}</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={"/job-details/"+item.id} target="_blank" data-tip="Click Here For Show Job Details" className="text-decoration-none">{item.job_title}</Link>
                                                        <ReactTooltip />
                                                    </td>
                                                    <td>{item.salary}</td>
                                                    <td>{item.no_of_opening}</td>
                                                    <td>
                                                        {
                                                            cities.map((item_city, index)=>
                                                             (item_city.id===item.job_location_id) ? item_city.name : null
                                                            )
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            cities.map((item_city, index)=>
                                                             (item_city.id===item.city_id) ? item_city.name : null
                                                            )
                                                        }
                                                    </td>
                                                    <td>{item.job_type_name}</td>
                                                    <td>{item.working_day_name}</td>
                                                    <td>{item.experience_required}</td>
                                                    <td>{item.skills}</td>
                                                </tr>)
                                                :
                                                <tr>
                                                    <td colspan={11}>No record found...</td>
                                                </tr>)
                                            }
                                            </tbody>
                                        </table>

                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                {
                                                    (((Math.ceil(all_jobs.length / showPerPage)) > 1) && (all_jobs[0].name !== 'No job found')) ?
                                                        <div className="row paging_gap">
                                                            <div className="col-lg-12 text-center">
                                                                <div className="pagination-area">
                                                                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={all_jobs.length} />
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
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default AllJobLists;