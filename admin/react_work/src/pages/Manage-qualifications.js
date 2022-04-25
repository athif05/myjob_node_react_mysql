import React from "react";
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';

const ManageQualifications = () => {

    const styleObj = {
        padding: 5
    }

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
                                    <h5 className="mb-2 text-titlecase mb-4 text-left">Manage Qualification</h5>
                                </div>
                                
                                <div className="col-md-6 text-right" style={styleObj}>
                                    <a href="/add-new-qualification">
                                        <button type="button" className="btn btn-primary">
                                            Add New Qualification
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
                                    
                                    <tr>
                                    <td>1.</td>
                                    <td>B.com</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                        <a href="/edit-qualification">
                                            <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                                Edit
                                                <i className="typcn typcn-edit btn-icon-append"></i>                          
                                            </button>
                                        </a>
                                        </div>
                                    </td>
                                    <td>
                                                                    
                                        <label className="toggle-switch toggle-switch-success">
                                            <input type="checkbox" id="qualification_1"/>
                                            <span className="toggle-slider round"></span>
                                        </label> 
                                    
                                    </td>
                                    <td>
                                                                    
                                        <label className="toggle-switch toggle-switch-success">
                                            <input type="checkbox" id="qualification_del_1" />
                                            <span className="toggle-slider round"></span>
                                        </label> 
                                    
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

export default ManageQualifications;