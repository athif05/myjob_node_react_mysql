import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const AboutUs = () => {
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

                                    <h4 className="card-title">Manage About-Us</h4>
                                    <form method="post" action="" className="forms-sample" enctype="multipart/form-data">

                                        <input type="hidden" name="edit_id" id="edit_id" value="" />

                                            <div className="form-group">
                                                <label for="name">Title</label>
                                                <input type="text" className="form-control" id="title" name="title" placeholder="Title" value="" />
                                            </div>

                                            <div className="form-group">
                                                <label for="name">Description</label>
                                                
                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    data=""
                                                    onReady={ editor => {
                                                        // You can store the "editor" and use when it is needed.
                                                        console.log( 'Editor is ready to use!', editor );
                                                    } }
                                                    onChange={ ( event, editor ) => {
                                                        const data = editor.getData();
                                                        console.log( { event, editor, data } );
                                                    } }
                                                    onBlur={ ( event, editor ) => {
                                                        console.log( 'Blur.', editor );
                                                    } }
                                                    onFocus={ ( event, editor ) => {
                                                        console.log( 'Focus.', editor );
                                                    } }
                                                />

                                                {/* <textarea rows="10" className="form-control" id="description" name="description" placeholder="Description"></textarea> */}
                                            </div>


                                            <div className="form-group">
                                                <label for="name">Image</label>
                                                <input type="file" className="form-control" name="image" id="image" accept="image/png, image/jpeg, image/jpg" />
                                            </div>


                                                    <button type="submit" className="btn btn-primary mr-2">Update</button>


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

                export default AboutUs;