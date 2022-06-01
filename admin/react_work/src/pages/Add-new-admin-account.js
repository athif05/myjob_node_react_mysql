import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import validator from 'validator'; //email validation
/* import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"; */

const AddNewAdminAccount = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [role_id, setRoleId] = useState();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [all_role, setAllRole] = useState([]);
    const [emailError, setEmailError] = useState('');

    useEffect(()=>{
        getAllRole();
    });

    const getAllRole = async()=>{
        const tbl = 'roles';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result = await result.json();
        setAllRole(result);
    }

    const addAdminAccount = async()=>{

        /* const isValid = isValidPhoneNumber(mobile);
        console.warn({ isValid })

        if(isValidPhoneNumber(mobile)==='false'){
            return false;
        } */

        if(!name || !mobile || !password || !role_id){
            setError(true);
            return false;
        }

        if (!validator.isEmail(email)) {
            
            setEmailError('Enter valid Email!');
            return false;
        }  else {
            setEmailError('');
        }

        

        let result = await fetch("http://localhost:12345/add-admin-account",{
            method: "post",
            body:JSON.stringify({name, email, mobile, password, role_id}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();
        setSuccess(true);
        setError(false);
        setName('');
        setEmail('');
        setMobile('');
        setPassword('');
        setRoleId('');
        
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

                                    <h4 className="card-title">Create Account</h4>
                                    {success && <div class="alert alert-success" role="alert">Added Successfully</div>}

                                        <div className="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                            {error && !name && <span className="invalid-input">Enter valid name</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Email</label>
                                            <input type="text" className="form-control" id="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            {error && !email && <span className="invalid-input">Enter Valid Email</span> }
                                            <span style={{fontWeight: 'bold', color: 'red',}}>{emailError}</span>
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Mobile</label>
                                            <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                                            {error && !mobile && <span className="invalid-input">Enter Mobile</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Password</label>
                                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                            {error && !password && <span className="invalid-input">Enter Password</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Role Name</label>
                                            <select name="role_id" value={role_id} onChange={(e)=>setRoleId(e.target.value)} className="form-control" id="exampleFormControlSelect2">
                                                <option value="">-- Select Role --</option>
                                                { all_role.map((item_role, index)=>
                                                <option value={item_role.id}>{item_role.name}</option>
                                                )}
                                            </select>
                                            {error && !role_id && <span className="invalid-input">Select Role</span> }
                                        </div>


                                        <button type="submit" className="btn btn-primary mr-2" onClick={addAdminAccount}>Submit</button>

                                        <a href="/manage-admin-account">
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

export default AddNewAdminAccount;