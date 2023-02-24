import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const AddNewBlogAuthor = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile_number, setMobileNumber] = useState();
    const [alternate_number, setAlternateNumber] = useState();
    const [address, setAddress] = useState();
    const [blog_category_id, setBlogCategoryId] = useState();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [all_category, setAllCategory] = useState([]);

    useEffect(()=>{
        getAllCategory();
    });

    const getAllCategory = async()=>{
        const tbl = 'blog_categories';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result = await result.json();
        setAllCategory(result);
    }

    const addAuthor = async()=>{
        if(!name || !email || !mobile_number || !address || !blog_category_id){
            setError(true);
            return false;
        }

        let result = await fetch("http://localhost:12345/add-author",{
            method: "post",
            body:JSON.stringify({name, email, mobile_number, alternate_number, address, blog_category_id}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();
        setSuccess(true);
        setError(false);
        setName('');
        setEmail('');
        setMobileNumber('');
        setAlternateNumber('');
        setAddress('');
        setBlogCategoryId('');
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

                                    <h4 className="card-title">Add Blog Author</h4>
                                    {success && <div class="alert alert-success" role="alert">Added Successfully</div>}

                                        <div className="form-group">
                                            <label for="name">Blog Category Name</label>
                                            <select name="blog_category_id" onChange={(e)=>setBlogCategoryId(e.target.value)} className="form-control" id="blog_category_id">
                                                <option value="">-- Blog Category Name --</option>
                                                { all_category.map((item, index)=>
                                                <option value={item.id}>{item.name}</option>
                                                )}
                                            </select>
                                            {error && !blog_category_id && <span className="invalid-input">Enter valid category</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Author Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                            {error && !name && <span className="invalid-input">Enter valid name</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Email</label>
                                            <input type="text" className="form-control" id="email" name="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            {error && !email && <span className="invalid-input">Enter valid email</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Mobile Number</label>
                                            <input type="text" className="form-control" id="mobile_number" name="mobile_number" placeholder="Mobile Number"  value={mobile_number} onChange={(e)=>setMobileNumber(e.target.value)}/>
                                            {error && !mobile_number && <span className="invalid-input">Enter mobile number</span> }
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Alternate Number</label>
                                            <input type="text" className="form-control" id="alternate_number" name="alternate_number" placeholder="Alternate Number"  value={alternate_number} onChange={(e)=>setAlternateNumber(e.target.value)}/>
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Address</label>
                                            <textarea rows="5" className="form-control" id="address" name="address" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}>{address}</textarea>
                                            {error && !address && <span className="invalid-input">Enter address</span> }
                                        </div>

                                        <button type="submit" className="btn btn-primary mr-2" onClick={addAuthor}>Submit</button>

                                        {/* <a href="/manage-blog-authors">
                                            <span className="btn btn-light">Cancel</span>
                                        </a> */}
                                        <Link to="/manage-blog-authors">
                                            <span className="btn btn-light">Cancel</span>
                                        </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div >
        </div >
    )
}

export default AddNewBlogAuthor;