import React, {useState} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const AddNewWorkExperiance = () => {

    const [name, setName] = useState();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const addWorkExperiance = async()=>{
        if(!name){
            setError(true);
            setSuccess(false);
            return false;
        }

        const tbl = 'work_experiences';
        let result = await fetch(`http://localhost:12345/add-generic-data/${tbl}`,{
            method:"post",
            body:JSON.stringify({name}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();
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
                            
                                <h4 className="card-title">Add New Work Experiance</h4>
                                {success && <div class="alert alert-success" role="alert">Added Successfully</div>}

                                <div className="form-group">
                                    <label for="name">Work Experiance Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Fee Charge Reason" value={name} onChange={(e)=>setName(e.target.value)}/>
                                    {error && !name && <span className="invalid-input">Enter valid name</span> }
                                </div>
                                
                                <button type="submit" className="btn btn-primary mr-2" onClick={addWorkExperiance}>Submit</button>
                                
                                <a href="/manage-work-experiance">
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

export default AddNewWorkExperiance;