import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const EditCompanyDomain = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);

    const params = useParams();

    useEffect(()=>{
		getEditDomain();
	},[]);

    const getEditDomain = async () => {

        let result = await fetch(`http://localhost:12345/edit-domain/${params.id}`);

		result = await result.json();
		console.warn(result);
		setName(result[0].name);

    }

    const navigate = useNavigate();

    const updateDomain = async () =>{
        if(!name) {
            setError(true);
            return false;
        }

        let result = await fetch(`http://localhost:12345/update-domain/${params.id}`,{
            method:'put',
            body: JSON.stringify({name}),
            headers:{
                'Content-Type':'application/json'
            }
        });

        result = await result.json();

        navigate('/manage-company-domains');
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

                                    <h4 className="card-title">Edit Company Domain</h4>

                                        <div className="form-group">
                                            <label for="name">Company Domain Name</label>
                                            <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={name} className="form-control" id="name" name="name" placeholder="Name" />
                                            {error && !name && <span className="invalid-input">Enter valid name</span> }
                                        </div>

                                        <button type="submit" className="btn btn-primary mr-2" onClick={updateDomain}>Update</button>

                                        <a href="/manage-company-domains">
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

export default EditCompanyDomain;