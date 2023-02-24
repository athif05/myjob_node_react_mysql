import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const AddNewCity = () => {

    const [name, setName] = useState('');
    const [state_id, setStateId] = useState('');
    const [all_state_name, setAllStateName] = useState([]);
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        getAllStateName();
    },[]);

    const getAllStateName = async()=>{
        let result = await fetch(`http://localhost:12345/all-states`);
        result = await result.json();
        setAllStateName(result);
    }

    const addCity = async()=>{

        if(!name || !state_id){
            setError(true);
            return false;
        }

        let result = await fetch("http://localhost:12345/add-new-city",{
            method: "post",
            body:JSON.stringify({name, state_id}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();
        setSuccess(true);
        setError(false);
        setName('');
        setStateId('');

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

                                    <h4 className="card-title">Add New City</h4>
                                    {success && <div class="alert alert-success" role="alert">Added Successfully</div>}

                                        <div className="form-group">
                                            <label for="name">City Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                            {error && !name && <span className="invalid-input">Enter valid name</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">State Name</label>
                                            <select name="state_id" value={state_id} onChange={(e)=>setStateId(e.target.value)} className="form-control" id="exampleFormControlSelect2">
                                                <option value="">-- Select State Name --</option>
                                                { all_state_name.map((item_st)=>
                                                    <option value={item_st.id} key={item_st.id}>
                                                        {item_st.name}
                                                    </option>
                                                )}
                                            </select>
                                            {error && !state_id && <span className="invalid-input">Select State name</span> }
                                        </div>


                                        <button type="submit" className="btn btn-primary mr-2" onClick={addCity}>Submit</button>

                                        {/* <a href="/cities">
                                            <span className="btn btn-light">Cancel</span>
                                        </a> */}
                                        <Link to="/cities">
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

export default AddNewCity;