import React, { useCallback, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import ReactTooltip from "react-tooltip";//use for show tooltip/title on href


const EmployersList = () => {

    const [all_emaployers, setAllEmaployers] = useState([]);

    useEffect(()=>{
        getAllEmaployers();
    });

    
    const getAllEmaployers = async () => {

        let result = await fetch(`http://localhost:12345/all-employers-data`);

        result = await result.json();

        setAllEmaployers(result);

    }

    /* update status, start here */
    const updateStatus = useCallback(async (tbl, val, id) => {
        let result_status = await fetch(`http://localhost:12345/update-generic-status/${tbl}/${val}/${id}`);
    }, getAllEmaployers());
    /* update status, end here */


    /* soft delete, start here */
    const softDelete = useCallback( async (tbl, val, id) => {
        let result_soft_delete = await fetch(`http://localhost:12345/generic-soft-delete/${tbl}/${val}/${id}`);
        result_soft_delete = await result_soft_delete.json();
        console.log(result_soft_delete);
    }, getAllEmaployers());
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
                                    <h5 className="mb-2 text-titlecase mb-4 text-left">Manage Employers</h5>
                                </div>				
                            </div>
                        </div>
                        
                        
                            <div className="card">
                            <div className="table-responsive pt-3">
                                <table className="table table-striped project-orders-table" id="my_datatable">
                                <thead>
                                    <tr>
                                    <th className="ml-5">#</th>
                                    <th>Logo</th>
                                    <th>Company Name</th>
                                    <th>City</th>
                                    <th>Email</th>
                                    <th>Mobile No.</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Domain</th>
                                    <th>Website</th>
                                    <th>Established Year</th>
                                    <th>Status</th>
                                    <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ((all_emaployers.length>0) && (all_emaployers[0].name!=='No record found') ? all_emaployers.slice(pagination.start, pagination.end).map((item, index) => 
                                    <tr>
                                        <td>{index+1}.</td>
                                        <td>
                                            <img src="assests/images/bvc-logo.png" alt="logo"/> 
                                        </td>
                                        <td>
                                            <Link to={{pathname:`/employer-details/`+item.employer_id}} target="_blank" data-tip="Click Here For Show Employer Details" className="text-decoration-none">{item.company_name}</Link>
                                            <ReactTooltip />
                                        </td>
                                        <td>{item.city_name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile_number}</td>
                                        <td>{item.company_phone}</td>
                                        <td>{item.company_address}</td>
                                        <td>{item.domain_name}</td>
                                        <td>{item.company_website}</td>
                                        <td>{item.company_established_year}</td>
                                        <td>
                                                                        
                                            {
                                            (item.status==='1') ? 
                                                
                                            <label class="toggle-switch toggle-switch-success">
                                                <input type="checkbox" onClick={()=>updateStatus('employer_details','0',item.id)} checked/>
                                                <span class="toggle-slider round"></span>												  
                                            </label>
                                            : 
                                            <label class="toggle-switch toggle-switch-success">
                                                <input type="checkbox" onClick={()=>updateStatus('employer_details','1',item.id)} />
                                                <span class="toggle-slider round"></span>												  
                                            </label>
                                            }
                                        
                                        </td>
                                        
                                        <td>
                                                                        
                                            {
                                            (item.is_deleted==='1') ? 
                                            <label class="toggle-switch toggle-switch-success">
                                                <input type="checkbox" onClick={()=>softDelete('employer_details','0',item.id)} checked/>
                                                <span class="toggle-slider round"></span>
                                            </label>
                                            :
                                            <label class="toggle-switch toggle-switch-success">
                                                <input type="checkbox" onClick={()=>softDelete('employer_details','1',item.id)} />
                                                <span class="toggle-slider round"></span>
                                            </label>
                                            }
                                        
                                        </td>
                                    </tr>)
                                    :
                                    <tr>
                                        <td colSpan={13}>No record found...</td>
                                    </tr>)
                                    }
                                </tbody>
                                </table>
                                
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        {
                                            (((Math.ceil(all_emaployers.length / showPerPage)) > 1) && (all_emaployers[0].name !== 'No job found')) ?
                                                <div className="row paging_gap">
                                                    <div className="col-lg-12 text-center">
                                                        <div className="pagination-area">
                                                            <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={all_emaployers.length} />
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

export default EmployersList;