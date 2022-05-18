import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import  validator from "validator";

const EditAdminAccount = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [role_id, setRoleId] = useState('');
    const [error, setError] = useState(false);
    const [all_role, setAllRole] = useState([]);

    const params = useParams();

    useEffect(()=>{
        getAllRole();
        getEditAdmin();
    },[]);


    const getEditAdmin = async()=>{
        const tbl = 'admin_users';
        let result = await fetch(`http://localhost:12345/edit-generic-table/${tbl}/${params.id}`);
        result = await result.json();
        console.log(result);
        setName(result[0].name);
        setEmail(result[0].email);
        setMobile(result[0].mobile_number);
        setPassword(result[0].password);
        setRoleId(result[0].role_id);
    }


    const getAllRole = async()=>{
        const tbl = 'roles';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result = await result.json();
        setAllRole(result);
    }

    const navigate = useNavigate();

    const updateAdminAccount = async()=>{

        if(!name || !email || !mobile || !password || !role_id){
            setError(true);
            return false;
        }
        
        /* const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            setError(true);
            return false;
        }
        return true; */


        let result = await fetch(`http://localhost:12345/update-admin-account/${params.id}`,{
            method:"put",
            body:JSON.stringify({name, email, mobile, password, role_id}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();

        navigate("/manage-admin-account");

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

                                    <h4 className="card-title">Edit Account</h4>

                                        <div className="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
                                            {error && !name && <span className="invalid-input">Enter valid name</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Email</label>
                                            <input type="text" className="form-control" id="email" name="email" placeholder="Email"  defaultValue={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            {error && !email && <span className="invalid-input">Enter Email</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Mobile</label>
                                            <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile"  defaultValue={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                                            {error && !mobile && <span className="invalid-input">Enter Mobile</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Password</label>
                                            <input type="text" className="form-control" id="password" name="password" placeholder="Password"  defaultValue={password} onChange={(e)=>setPassword(e.target.value)}/>
                                            {error && !password && <span className="invalid-input">Enter Password</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Role Name</label>
                                            <select value={role_id || ""} onChange={(e)=>setRoleId(e.target.value)} name="role_id" className="form-control" id="exampleFormControlSelect2">
                                                <option value="">-- Select Role --</option>
                                                { all_role.map((item_role, index)=>
                                                <option value={item_role.id}>{item_role.name}</option>
                                                )}
                                            </select>
                                            {error && !role_id && <span className="invalid-input">Select Role</span> }
                                        </div>


                                        <button type="submit" className="btn btn-primary mr-2" onClick={updateAdminAccount}>Update</button>

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

export default EditAdminAccount;