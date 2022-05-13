import React, { useCallback, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";


const ManageFeeChargeReasons = () => {

    const [charge_reasons, setChargeReasons] = useState([]);

    useEffect(()=>{
        getChargeReasons();
    });

    const getChargeReasons = async()=>{
        const tbl = 'fee_charged_reasons';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result = await result.json();
        setChargeReasons(result);
    }

    /* update status, start here */
    const updateStatus = useCallback(async (tbl, val, id) => {
        let result_status = await fetch(`http://localhost:12345/update-generic-status/${tbl}/${val}/${id}`);
    }, getChargeReasons());
    /* update status, end here */


    /* soft delete, start here */
    const softDelete = useCallback( async (tbl, val, id) => {
        let result_soft_delete = await fetch(`http://localhost:12345/generic-soft-delete/${tbl}/${val}/${id}`);
    }, getChargeReasons());
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
                                            <h5 className="mb-2 text-titlecase mb-4">Manage Fee Charges</h5>
                                        </div>

                                        <div className="col-md-6 text-right">
                                            <a href="/add-new-fee-charge-reason">
                                                <button type="button" className="btn btn-primary">
                                                    Add New Fee Charge
                                                </button>
                                            </a>
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
                                                {((charge_reasons.length>0) && (charge_reasons[0].name!=='No record found') ? charge_reasons.slice(pagination.start, pagination.end).map((item, index)=> 
                                                <tr>
                                                    <td>{index+1}.</td>
                                                    <td>{item.name}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <Link to={"/edit-fee-charge-reason/"+item.id}>
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
                                                                <input type="checkbox" onClick={()=>updateStatus('fee_charged_reasons','0',item.id)} checked/>
                                                                <span class="toggle-slider round"></span>												  
                                                            </label>
                                                            : 
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox" onClick={()=>updateStatus('fee_charged_reasons','1',item.id)} />
                                                                <span class="toggle-slider round"></span>												  
                                                            </label>
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            (item.is_deleted==='1') ? 
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox" onClick={()=>softDelete('fee_charged_reasons','0',item.id)} checked/>
                                                                <span class="toggle-slider round"></span>
                                                            </label>
                                                            :
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox" onClick={()=>softDelete('fee_charged_reasons','1',item.id)} />
                                                                <span class="toggle-slider round"></span>
                                                            </label>
                                                        }
                                                    </td>
                                                </tr>)
                                                :
                                                <tr>
                                                    <td colSpan={5}>No record found...</td>
                                                </tr>)
                                                }
                                            </tbody>
                                        </table>

                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                {
                                                    (((Math.ceil(charge_reasons.length / showPerPage)) > 1) && (charge_reasons[0].name !== 'No record found')) ?
                                                        <div className="row paging_gap">
                                                            <div className="col-lg-12 text-center">
                                                                <div className="pagination-area">
                                                                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={charge_reasons.length} />
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

export default ManageFeeChargeReasons;