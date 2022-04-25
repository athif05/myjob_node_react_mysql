import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const ContactUsEmails = () => {
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
                                            <h5 className="mb-2 text-titlecase mb-4">Contact Us Email</h5>
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
                                                    <th>Subject</th>
                                                    <th>Message</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                                <tr>
                                                    <td>1.</td>
                                                    <td>Athif Hussain</td>
                                                    <td>admin@gmail.com</td>
                                                    <td>test with date</td>
                                                    <td>I am testing my first mail from contact us page.</td>
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

export default ContactUsEmails;