import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const AddNewFeeChargeReason = () => {

    const [name, setName] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const addFeeChargeReason = async()=>{
        if(!name){
            setError(true);
            return false;
        }

        let result = await fetch(`http://localhost:12345/add-fee-charge-reason`,{
            method:"post",
            body:JSON.stringify({name}),
            headers:{
                "Content-Type":"application/json"
            }

        });

        setError(false);
        setSuccess(true);
        setName('');
    }

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
                                {success && <div class="alert alert-success" role="alert">Added Successfully</div>}

                                <div className="form-group">
                                    <label for="name">Fee Charge Reason</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Fee Charge Reason" value={name} onChange={(e)=>setName(e.target.value)}/>
                                    {error && !name && <span className="invalid-input">Enter valid name</span> }
                                </div>
                                
                                <button type="submit" className="btn btn-primary mr-2" onClick={addFeeChargeReason}>Submit</button>
                                
                                {/* <a href="/manage-fee-charge-reasons">
                                    <span className="btn btn-light">Cancel</span>
                                </a> */}

                                <Link to="/manage-fee-charge-reasons">
                                    <span className="btn btn-light">Cancel</span>
                                </Link>

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