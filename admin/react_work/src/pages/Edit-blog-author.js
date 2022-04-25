import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const EditBlogAuthor = () => {
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

                                    <h4 className="card-title">Edit Blog Author</h4>
                                    <form method="post" action="" className="forms-sample">

                                        <div className="form-group">
                                            <label for="name">Blog Category Name</label>
                                            <select name="blog_category_id" className="form-control" id="blog_category_id">
                                                <option value="">-- Blog Category Name --</option>
                                                <option>Blue coller Job</option>
                                                <option>White coller Job</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Author Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value="" />
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Email</label>
                                            <input type="text" className="form-control" id="email" name="email" placeholder="Email" value="" />
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Mobile Number</label>
                                            <input type="text" className="form-control" id="mobile_number" name="mobile_number" placeholder="Mobile Number" value="" />
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Alternate Number</label>
                                            <input type="text" className="form-control" id="alternate_number" name="alternate_number" placeholder="Alternate Number" value="" />
                                        </div>

                                        <div className="form-group">
                                            <label for="name">Address</label>
                                            <textarea rows="5" className="form-control" id="address" name="address" placeholder="Address"></textarea>
                                        </div>

                                        <button type="submit" className="btn btn-primary mr-2">Update</button>

                                        <a href="/manage-blog-authors">
                                            <span className="btn btn-light">Cancel</span>
                                        </a>

                                    </form>
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

export default EditBlogAuthor;