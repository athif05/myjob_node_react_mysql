import React, { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import axios from 'axios';

const EditBlog = () => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [blog_category_id, setBlogCategoryId] = useState();
    const [author_id, setAuthorId] = useState();
    const [showFile, setShowFile] = useState();
    const [error, setError] = useState(false);

    const [all_category, setAllCategory] = useState([]);
    const [all_author, setAllAuthor] = useState([]);

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const params = useParams();

    useEffect(()=>{
        getEditBlog();
        getAllCategory();
        getAllAuthor();
    },[]);

    /* CKEditor function */
    const handelChange = (e, editor) => {
        const data = editor.getData();
        setDescription(data);
    }

    const getAllCategory = async()=>{
        const tbl = 'blog_categories';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result = await result.json();
        setAllCategory(result);
    }

    const getAllAuthor = async()=>{
        const tbl = 'authors';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result = await result.json();
        setAllAuthor(result);
    }

    const getEditBlog = async()=>{
        let result = await fetch(`http://localhost:12345/edit-blog/${params.id}`);
        result = await result.json();
        setTitle(result[0].title);
        setDescription(result[0].description);
        setBlogCategoryId(result[0].blog_category_id);
        setAuthorId(result[0].author_id);
        setShowFile(result[0].image);
    }

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const navigate = useNavigate();

    
    const updateBlogs = async()=>{

        if(!title || !description || !blog_category_id || !author_id){
            setError(true);
            return false;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("blog_category_id", blog_category_id);
        formData.append("author_id", author_id);


        /* let result = await fetch(`http://localhost:12345/update-blog/${params.id}`,{
            method:"put",
            body:JSON.stringify({title, description, blog_category_id, author_id}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json(); */

        try {
            const res = await axios.put(
              `http://localhost:12345/update-blog/${params.id}`,
              formData
            );
            console.log(res);
            navigate("/blog-lists");
            
        } catch (ex) {
            console.log(ex);
        }

    }

    const imageStyle = {
        width: "120px",
        height: "80px"
    };

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

                                    <h4 className="card-title">Edit Blog</h4>

                                        <div className="form-group">
                                            <label for="name">Title</label>
                                            <input type="text" className="form-control" id="title" name="title" placeholder="Title" defaultValue={title} onChange={(e)=>setTitle(e.target.value)}/>
                                            { error && !title && <span className="invalid-input">Enter title</span>}
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Description</label>
                                            <CKEditor
                                                    editor={ ClassicEditor }
                                                    data={description}
                                                    onChange={handelChange}
                                                />
                                            { error && !description && <span className="invalid-input">Enter description</span>}
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Blog Category Name</label>
                                            <select name="blog_category_id" value={blog_category_id || ""} onChange={(e)=>setBlogCategoryId(e.target.value)} className="form-control" id="blog_category_id">
                                                <option value="">-- Blog Category Name --</option>
                                                { all_category.map((item_cat, index)=>
                                                <option value={item_cat.id}>{item_cat.name}</option>
                                                )}
                                            </select>
                                            { error && !blog_category_id && <span className="invalid-input">Enter blog category</span>}
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Author Name</label>
                                            <select name="author_id" value={author_id || ""} onChange={(e)=>setAuthorId(e.target.value)} className="form-control" id="author_id">
                                                <option value="">-- Author Name --</option>
                                                { all_author.map((item_aut, index)=>
                                                <option value={item_aut.id}>{item_aut.name}</option>
                                                )}
                                            </select>
                                            { error && !author_id && <span className="invalid-input">Enter author</span>}
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Image</label>
                                            <input type="file" onChange={saveFile} className="form-control" accept="image/png, image/jpeg, image/jpg" />
                                            { showFile ? <img src={showFile} alt="Aboutus" style={imageStyle}/> : null}
                                        </div>

                                        <button type="submit" className="btn btn-primary mr-2" onClick={updateBlogs}>Update</button>

                                        <a href="/blog-lists">
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

export default EditBlog;