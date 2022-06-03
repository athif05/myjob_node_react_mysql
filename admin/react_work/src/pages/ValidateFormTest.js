import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const ValidateFormTest = () =>{

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

                                <h4 className="card-title">Validate Form Test</h4>
                                

                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" value=""/>
                                       
                                    </div>

                                    <div className="form-group">
                                        <label for="name">Email</label>
                                        <input type="text" className="form-control" id="email" name="email" placeholder="Email" value=""/>
                                       
                                       
                                    </div>

                                    <div className="form-group">
                                        <label for="name">Mobile</label>
                                        <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile" value=""/>
                                       
                                    </div>

                                    <div className="form-group">
                                        <label for="name">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" value=""/>
                                       
                                    </div>

                                    <div className="form-group">
                                        <label for="name">Role Name</label>
                                        <select name="role_id" value="" className="form-control" id="exampleFormControlSelect2">
                                            <option value="">-- Select Role --</option>
                                            
                                        </select>
                                        
                                    </div>


                                    <button type="submit" className="btn btn-primary mr-2">Submit</button>


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

export default ValidateFormTest;