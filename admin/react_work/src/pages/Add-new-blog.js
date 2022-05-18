import React, { useState, useEffect} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const AddNewBlog = () => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [blog_category_id, setBlogCategoryId] = useState();
    const [author_id, setAuthorId] = useState();
    const [image, setImage] = useState();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [all_category, setAllCategory] = useState([]);
    const [all_author, setAllAuthor] = useState([]);

    useEffect(()=>{
        getAllCategory();
        getAllAuthor();
    });

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

    const addBlogs = async()=>{

        if(!title || !description || !blog_category_id || !author_id){
            setError(true);
            return false;
        }

        let result = await fetch("http://localhost:12345/add-blog",{
            method: "post",
            body:JSON.stringify({title, description, blog_category_id, author_id}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();
        setSuccess(true);
        setError(false);
        setTitle('');
        setDescription('');
        setBlogCategoryId('');
        setAuthorId('');

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


                                    <h4 className="card-title">Add Blog</h4>
                                    {success && <div class="alert alert-success" role="alert">Added Successfully</div>}

                                        <div className="form-group">
                                            <label for="name">Title</label>
                                            <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                            { error && !title && <span className="invalid-input">Enter title</span>}
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Description</label>
                                            <textarea rows="10" className="form-control" id="description" name="description" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                                            <script>
                                                CKEDITOR.replace( 'description' );
                                            </script>
                                            { error && !description && <span className="invalid-input">Enter description</span>}
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Blog Category Name</label>
                                            <select name="blog_category_id" onChange={(e)=>setBlogCategoryId(e.target.value)} className="form-control" id="blog_category_id">
                                                <option value="">-- Blog Category Name --</option>
                                                { all_category.map((item_cat, index)=>
                                                <option value={item_cat.id}>{item_cat.name}</option>
                                                )}
                                            </select>
                                            { error && !blog_category_id && <span className="invalid-input">Enter blog category</span>}
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Author Name</label>
                                            <select name="author_id" onChange={(e)=>setAuthorId(e.target.value)} className="form-control" id="author_id">
                                                <option value="">-- Author Name --</option>
                                                { all_author.map((item_aut, index)=>
                                                <option value={item_aut.id}>{item_aut.name}</option>
                                                )}
                                            </select>
                                            { error && !author_id && <span className="invalid-input">Enter author</span>}
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Image</label>
                                            <input type="file" className="form-control" name="image" id="image" accept="image/png, image/jpeg, image/jpg" />
                                        </div>

                                        <button type="submit" className="btn btn-primary mr-2" onClick={addBlogs}>Submit</button>

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

export default AddNewBlog;