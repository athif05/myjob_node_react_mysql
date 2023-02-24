import React, { useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const EditQualification = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);

    const params = useParams();

    useEffect(()=>{
		getEditProduct();
	},[]);

    const getEditProduct = async () => {

        let result = await fetch(`http://localhost:12345/edit-qualification/${params.id}`);

		result = await result.json();
		console.warn(result);
		setName(result[0].name);

    }

    const navigate = useNavigate();

    const updateQualification = async () => {
        console.warn(name);
        if(!name) {
            setError(true);
            return false;
        }

        let result = await fetch(`http://localhost:12345/update-qualification/${params.id}`,{
            method:'put',
            body:JSON.stringify({name}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();

        console.warn(result);

        navigate('/manage-qualifications');

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
                            
                                <h4 className="card-title">Edit Qualification</h4>
                                
                                <div className="form-group">
                                    <label for="name">Qualification Name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={name} className="form-control" id="name" name="name" placeholder="Name" />
                                    {error && !name && <span className="invalid-input">Enter valid name</span> }
                                </div>
                                
                                <button type="submit" className="btn btn-primary mr-2" onClick={updateQualification}>Update</button>
                                
                                {/* <a href="/manage-qualifications">
                                    <span className="btn btn-light">Cancel</span>
                                </a> */}

                                <Link to="/manage-qualifications">
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

export default EditQualification;