import React, { useEffect, useState, useCallback} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";


const ManageNoticePeriods = () => {

    const [notice_period, setNoticePeriod] = useState([]);

    useEffect(()=>{
        getNoticePeriod();
    });

    const getNoticePeriod = async ()=>{
        const tbl = 'notice_periods';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result = await result.json();
        setNoticePeriod(result);
    }


    /* update status, start here */
    const updateStatus = useCallback(async (tbl, val, id) => {
        let result_status = await fetch(`http://localhost:12345/update-generic-status/${tbl}/${val}/${id}`);
    }, getNoticePeriod());
    /* update status, end here */


    /* soft delete, start here */
    const softDelete = useCallback( async (tbl, val, id) => {
        let result_soft_delete = await fetch(`http://localhost:12345/generic-soft-delete/${tbl}/${val}/${id}`);
        result_soft_delete = await result_soft_delete.json();
        console.log(result_soft_delete);
    }, getNoticePeriod());
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
                                            <h5 className="mb-2 text-titlecase mb-4">Manage Notice Periods</h5>
                                        </div>

                                        <div className="col-md-6 text-right">
                                            {/* <a href="/add-new-notice-period">
                                                <button type="button" className="btn btn-primary">
                                                    Add New Notice Periods
                                                </button>
                                            </a> */}

                                            <Link to="/add-new-notice-period">
                                                <button type="button" className="btn btn-primary">
                                                    Add New Notice Periods
                                                </button>
                                            </Link>

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
                                                    <th>Actions</th>
                                                    <th>Status</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ((notice_period.length>0) && (notice_period[0].name!=='No record found') ? notice_period.slice(pagination.start, pagination.end).map((item, index)=>
                                                <tr>
                                                    <td>{index+1}.</td>
                                                    <td>{item.name}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <Link to={"/edit-notice-period/"+item.id}>
                                                                <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                                                    Edit
                                                                    <i className="typcn typcn-edit btn-icon-append"></i>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>

                                                        {
                                                            (item.status==='1') ? 
                                                                
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox" onClick={()=>updateStatus('notice_periods','0',item.id)} checked/>
                                                                <span class="toggle-slider round"></span>												  
                                                            </label>
                                                            : 
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox" onClick={()=>updateStatus('notice_periods','1',item.id)} />
                                                                <span class="toggle-slider round"></span>												  
                                                            </label>
                                                        }

                                                    </td>
                                                    <td>

                                                        {
                                                            (item.is_deleted==='1') ? 
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox" onClick={()=>softDelete('notice_periods','0',item.id)} checked/>
                                                                <span class="toggle-slider round"></span>
                                                            </label>
                                                            :
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox" onClick={()=>softDelete('notice_periods','1',item.id)} />
                                                                <span class="toggle-slider round"></span>
                                                            </label>
                                                        }

                                                    </td>
                                                </tr>)
                                                :
                                                <tr>
                                                    <td colSpan={5}></td>
                                                </tr>)
                                                }
                                            </tbody>
                                        </table>

                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                {
                                                    (((Math.ceil(notice_period.length / showPerPage)) > 1) && (notice_period[0].name !== 'No record found')) ?
                                                        <div className="row paging_gap">
                                                            <div className="col-lg-12 text-center">
                                                                <div className="pagination-area">
                                                                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={notice_period.length} />
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

export default ManageNoticePeriods;