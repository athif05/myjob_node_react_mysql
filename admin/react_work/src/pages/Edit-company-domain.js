import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const EditCompanyDomain = () => {
    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper text-left">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">

                                <div className="card-body">

                                    <h4 className="card-title">Edit Company Domain</h4>
                                    <form method="post" action="" className="forms-sample">

                                        <div className="form-group">
                                            <label for="name">Company Domain Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value="" />

                                        </div>

                                        <button type="submit" className="btn btn-primary mr-2">Update</button>

                                        <a href="manage-company-domains">
                                            <span className="btn btn-light">Cancel</span>
                                        </a>

                                    </form>
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

export default EditCompanyDomain;