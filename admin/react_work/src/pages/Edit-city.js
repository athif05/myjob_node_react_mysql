import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const EditCity = () => {

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

                                    <h4 className="card-title">Edit City</h4>
                                    <form method="post" action="" className="forms-sample">
                                    

                                        <div className="form-group">
                                            <label for="name">City Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value="" />
                                        </div>

                                        <div className="form-group">
                                            <label for="name">State Name</label>
                                            <select name="state_id" className="form-control" id="exampleFormControlSelect2">
                                                <option value="">-- Select State Name --</option>
                                                <option value="">Delhi</option>
                                                <option value="">Haryana</option>
                                            </select>
                                        </div>


                                        <button type="submit" className="btn btn-primary mr-2">Update</button>

                                        <a href="/cities">
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

export default EditCity;