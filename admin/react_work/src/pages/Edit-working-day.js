import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const EditWorkingDay = () => {

    const [name, setName] = useState();
    const [error, setError] = useState(false);

    const params = useParams();

    useEffect(()=>{
        getEditWorkingDay();
    },[]);


    const getEditWorkingDay = async()=>{
        const tbl = 'working_days';
        let result = await fetch(`http://localhost:12345/edit-generic-table/${tbl}/${params.id}`);
        result = await result.json();
        setName(result[0].name);
    }

    const navigate = useNavigate();

    const updateWorkingDay = async()=>{
        if(!name){
            setError(true);
            return false;
        }

        const tbl = 'working_days';
        let result = await fetch(`http://localhost:12345/update-generic-table/${tbl}/${params.id}`,{
            method:"put",
            body:JSON.stringify({name}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();

        navigate("/manage-working-days");

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
                            
                                <h4 className="card-title">Edit Working Day</h4>                                

                                <div className="form-group">
                                    <label for="name">Working Day</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Fee Charge Reason" defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
                                    {error && !name && <span className="invalid-input">Enter valid name</span> }
                                </div>
                                
                                <button type="submit" className="btn btn-primary mr-2" onClick={updateWorkingDay}>Update</button>
                                
                                <a href="/manage-working-days">
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

export default EditWorkingDay;