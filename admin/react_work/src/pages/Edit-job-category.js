import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const EditJobCategory = () => {

    const [name, setName] = useState();
    const [error, setError] = useState(false);

    const params = useParams();

    useEffect(()=>{
		getEditJobCategory();
	},[]);

    const getEditJobCategory = async () => {

        let result = await fetch(`http://localhost:12345/edit-job-category/${params.id}`);

		result = await result.json();
		console.warn(result);
		setName(result[0].name);

    }

    const navigate = useNavigate();

    const updateJobCategory = async () => {
        console.warn(name);
        if(!name) {
            setError(true);
            return false;
        }

        let result = await fetch(`http://localhost:12345/update-job-category/${params.id}`,{
            method:'put',
            body:JSON.stringify({name}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();

        console.warn(result);

        navigate('/manage-job-categories');

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
                            
                                <h4 className="card-title">Edit Job Category</h4>
                                
                                <div className="form-group">
                                    <label for="name">Job Category Name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={name} className="form-control" id="name" name="name" placeholder="Name"/>
                                    {error && !name && <span className="invalid-input">Enter valid name</span> }
                                </div>
                                
                                <button type="submit" className="btn btn-primary mr-2" onClick={updateJobCategory}>Update</button>
                                
                                <a href="/manage-job-categories">
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

export default EditJobCategory;