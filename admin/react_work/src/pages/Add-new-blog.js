import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const AddNewBlog = () => {
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
                                    <form method="post" action="" className="forms-sample" enctype="multipart/form-data">

                                        <div className="form-group">
                                            <label for="name">Title</label>
                                            <input type="text" className="form-control" id="title" name="title" placeholder="Title" value="" />

                                        </div>

                                        <div className="form-group">
                                            <label for="name">Description</label>
                                            <textarea rows="10" className="form-control" id="description" name="description" placeholder="Description"></textarea>
                                            <script>
                                                CKEDITOR.replace( 'description' );
                                            </script>
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Blog Category Name</label>
                                            <select name="blog_category_id" className="form-control" id="blog_category_id">
                                                <option value="">-- Blog Category Name --</option>
                                                <option value="">Blue Caller Job</option>
                                                <option value="">White Caller Job</option>
                                            </select>

                                        </div>

                                        <div className="form-group">
                                            <label for="name">Author Name</label>
                                            <select name="author_id" className="form-control" id="author_id">
                                                <option value="">-- Author Name --</option>

                                                <option value="">Sunny</option>
                                                <option value="">Rohan</option>

                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Image</label>
                                            <input type="file" className="form-control" name="image" id="image" accept="image/png, image/jpeg, image/jpg" />

                                        </div>

                                        <button type="submit" className="btn btn-primary mr-2">Submit</button>

                                        <a href="/blog-lists">
                                            <span className="btn btn-light">Cancel</span>
                                        </a>

                                    </form>
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