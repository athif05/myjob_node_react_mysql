import React, { useState, useEffect} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const EditBlogCategory = () => {

    const [name, setName] = useState();
    const [error, setError] = useState(false);

    const params = useParams();

    useEffect(()=>{
        getEditBlogCategory();
    },[]);

    const getEditBlogCategory =  async()=>{
        let result = await fetch(`http://localhost:12345/edit-blog-category/${params.id}`);
        result = await result.json();
        setName(result[0].name);
    }

    const navigate = useNavigate();

    const updateBlogCategories = async()=>{
        if(!name){
            setError(true);
            return false;
        }

        let result = await fetch(`http://localhost:12345/update-blog-category/${params.id}`,{
            method:"put",
            body:JSON.stringify({name}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();

        navigate("/manage-blog-categories");
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

                                    <h4 className="card-title">Edit Blog Category</h4>

                                        <div className="form-group">
                                            <label for="name">Category Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
                                            {error && !name && <span className="invalid-input">Enter valid name</span> }
                                        </div>

                                        <button type="submit" className="btn btn-primary mr-2" onClick={updateBlogCategories}>Update</button>

                                        <Link to="/manage-blog-categories">
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

export default EditBlogCategory;