import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';
import Pagination from './../components/Pagination';


const ManageQualifications = () => {

    const styleObj = {
        padding: 5
    }

    // set state
    const [all_qualifications, setAllQualifications] = useState([]);

    useEffect(() => {
        getAllQualifications();
    },[]);

    //call api
    const getAllQualifications = async () => {
        const tbl = 'qualifications';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);

        result = await result.json();

        setAllQualifications(result);
    }
    
    /* update status, start here */
    const updateStatus = useCallback(async (tbl, val, id) => {
        let result_status = await fetch(`http://localhost:12345/update-generic-status/${tbl}/${val}/${id}`);
    }, getAllQualifications());
    /* update status, end here */


    /* soft delete, start here */
    const softDelete = useCallback( async (tbl, val, id) => {
        let result_soft_delete = await fetch(`http://localhost:12345/generic-soft-delete/${tbl}/${val}/${id}`);
        result_soft_delete = await result_soft_delete.json();
        console.log(result_soft_delete);
    }, getAllQualifications());
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
                    <div className="content-wrapper">

                        <div className="row">
                            <div className="col-md-12">

                                <div className="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5 className="mb-2 text-titlecase mb-4 text-left">Manage Qualification</h5>
                                        </div>

                                        <div className="col-md-6 text-right" style={styleObj}>
                                            {/* <a href="/add-new-qualification">
                                                <button type="button" className="btn btn-primary">
                                                    Add New Qualification
                                                </button>
                                            </a> */}
                                            <Link to="/add-new-qualification">
                                                <button type="button" className="btn btn-primary">
                                                    Add New Qualification
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
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Actions</th>
                                                    <th>Status</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ((all_qualifications.length > 0) && (all_qualifications[0].name !== 'No record found') ? all_qualifications.slice(pagination.start, pagination.end).map((item, index) =>

                                                        <tr>
                                                            <td>{index + 1}.</td>
                                                            <td>{item.name}</td>
                                                            <td className="text-center">
                                                                
                                                                <Link to={"/edit-qualification/"+item.id}>
                                                                    <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                                                        Edit
                                                                        <i className="typcn typcn-edit btn-icon-append"></i>
                                                                    </button>
                                                                </Link>
                                                               
                                                            </td>
                                                            <td>

                                                            {
                                                            (item.status==='1') ? 
                                                                
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox" onClick={()=>updateStatus('qualifications','0',item.id)} checked/>
                                                                <span class="toggle-slider round"></span>												  
                                                            </label>
                                                            : 
                                                            <label class="toggle-switch toggle-switch-success">
                                                                <input type="checkbox" onClick={()=>updateStatus('qualifications','1',item.id)} />
                                                                <span class="toggle-slider round"></span>												  
                                                            </label>
                                                            }

                                                            </td>
                                                            <td>

                                                            {
                                                                (item.is_deleted==='1') ? 
                                                                <label class="toggle-switch toggle-switch-success">
                                                                    <input type="checkbox" onClick={()=>softDelete('qualifications','0',item.id)} checked/>
                                                                    <span class="toggle-slider round"></span>
                                                                </label>
                                                                :
                                                                <label class="toggle-switch toggle-switch-success">
                                                                    <input type="checkbox" onClick={()=>softDelete('qualifications','1',item.id)} />
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
                                                    (((Math.ceil(all_qualifications.length / showPerPage)) > 1) && (all_qualifications[0].name !== 'No job found')) ?
                                                        <div className="row paging_gap">
                                                            <div className="col-lg-12 text-center">
                                                                <div className="pagination-area">
                                                                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={all_qualifications.length} />
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

export default ManageQualifications;