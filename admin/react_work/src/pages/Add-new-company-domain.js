import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const AddNewCompanyDomain = () => {

    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const addDomain = async () =>{
        if(!name){
            setError(true);
            setSuccess(false);
            return false;
        } 

        let result = await fetch("http://localhost:12345/add-domian-data",{
            method: "post",
            body:JSON.stringify({name}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();
        setSuccess(true);
        setError(false);
        setName('');

        navigate('/add-new-company-domain');
    }

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

                                    <h4 className="card-title">Add New Company Domain</h4>
                                    { success && <div class="alert alert-success" role="alert">Added Successfully</div> }

                                        <div className="form-group">
                                            <label for="name">Company Domain Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                                            {error && !name && <span className="invalid-input">Enter valid name</span>}
                                        </div>

                                        <button type="submit" className="btn btn-primary mr-2" onClick={addDomain}>Submit</button>

                                        <a href="manage-company-domains">
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

export default AddNewCompanyDomain;