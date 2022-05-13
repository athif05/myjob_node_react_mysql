import React, {useState} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const AddNewWorkingDay = () => {

    const [name, setName] = useState();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const addWorkingDay = async()=>{
        if(!name){
            setError(true);
            setSuccess(false);
            return false;
        }

        const tbl = 'working_days';
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
                            
                                <h4 className="card-title">Add New Working Day</h4>
                                {success && <div class="alert alert-success" role="alert">Added Successfully</div>}                              

                                <div className="form-group">
                                    <label for="name">Working Day</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Fee Charge Reason" value={name} onChange={(e)=>setName(e.target.value)}/>
                                    {error && !name && <span className="invalid-input">Enter valid name</span> }
                                </div>
                                
                                <button type="submit" className="btn btn-primary mr-2" onClick={addWorkingDay}>Submit</button>
                                
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

export default AddNewWorkingDay;