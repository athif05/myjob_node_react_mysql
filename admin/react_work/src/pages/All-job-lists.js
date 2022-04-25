import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const AllJobLists = () => {
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

                                                <tr>
                                                    <td>1.</td>
                                                    <td>
                                                        <a href="/single-employers-details">ITG</a>

                                                    </td>
                                                    <td>
                                                        <a href="/single-job-details"> Content Writer </a>
                                                    </td>
                                                    <td>16K</td>
                                                    <td>2</td>
                                                    <td>
                                                        Noida
                                                    </td>
                                                    <td>Noida</td>
                                                    <td>Rotational Shift</td>
                                                    <td>6 Days Working</td>
                                                    <td>5+ Year Experience</td>
                                                    <td>html,css,jquery,bootstrap</td>
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

export default AllJobLists;