import React, { useState, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const EditRole = () => {

    const [name, setName] = useState();
    const [error, setError] = useState(false);

    const params = useParams();

    useEffect(()=>{
        getEditRole();
    },[]);

    const getEditRole = async()=>{
        const tbl = 'roles';
        let result = await fetch(`http://localhost:12345/edit-generic-table/${tbl}/${params.id}`);
        result = await result.json();
        setName(result[0].name);
    }

    const navigate = useNavigate();

    const updateRole = async()=>{
        if(!name){
            setError(true);
            return false;
        }

        const tbl = 'roles';
        let result = await fetch(`http://localhost:12345/update-generic-table/${tbl}/${params.id}`,{
            method:"put",
            body:JSON.stringify({name}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();

        navigate("/manage-role");
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

                                    <h4 className="card-title">Edit Role</h4>                                    

                                        <div className="form-group">
                                            <label for="name">Role Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
                                            {error && !name && <span className="invalid-input">Enter valid name</span> }
                                        </div>

                                        <button type="submit" className="btn btn-primary mr-2" onClick={updateRole}>Update</button>

                                        <Link to="/manage-role">
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

export default EditRole;