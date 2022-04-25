import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const AddNewFeeChargeReason = () => {

    return(

        <div className="container-scroller">
            
            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />

                <div className="main-panel">
                    <div className="content-wrapper">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                        
                            <div className="card-body text-left">
                            
                                <h4 className="card-title">Add New Fee Charge Reason</h4>
                                <form method="post" action="" className="forms-sample">
                                

                                <div className="form-group">
                                    <label for="name">Fee Charge Reason</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Fee Charge Reason" value=""/>
                                    
                                </div>
                                
                                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                
                                <a href="/manage-fee-charge-reasons">
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

export default AddNewFeeChargeReason;