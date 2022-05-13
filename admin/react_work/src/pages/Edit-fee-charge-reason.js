import React, { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const EditFeeChargeReason = () => {

    const [name, setName] = useState();
    const [error, setError] = useState(false);

    const params = useParams();

    useEffect(()=>{
        getEditChargeReason();
    },[]);

    const getEditChargeReason =  async()=>{
        let result = await fetch(`http://localhost:12345/edit-fee-charge-reason/${params.id}`);
        result = await result.json();
        setName(result[0].name);
    }

    const navigate = useNavigate();

    const updateFeeChargeReason = async()=>{
        if(!name){
            setError(true);
            return false;
        }

        let result = await fetch(`http://localhost:12345/update-fee-charge-reason/${params.id}`,{
            method:"put",
            body:JSON.stringify({name}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();

        navigate("/manage-fee-charge-reasons");
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
                            
                                <h4 className="card-title">Edit Fee Charge Reason</h4>
                                
                                <div className="form-group">
                                    <label for="name">Fee Charge Reason</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Fee Charge Reason" defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
                                    {error && !name && <span className="invalid-input">Enter valid name</span> }
                                </div>
                                
                                <button type="submit" className="btn btn-primary mr-2" onClick={updateFeeChargeReason}>Update</button>
                                
                                <a href="/manage-fee-charge-reasons">
                                    <span className="btn btn-light">Cancel</span>
                                </a>

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

export default EditFeeChargeReason;