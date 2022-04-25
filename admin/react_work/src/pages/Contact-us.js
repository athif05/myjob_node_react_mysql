import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const ContactUs = () => {

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

                                    <h4 className="card-title">Manage Contact-Us</h4>
                                    <form method="post" action="" className="forms-sample" enctype="multipart/form-data">
                                        
                                        <input type="hidden" name="edit_id" id="edit_id" value="" />

                                            <div className="form-group">
                                                <label for="name">Email 1</label>
                                                <input type="text" className="form-control" id="email1" name="email1" placeholder="Email 1" value="" />
                                            </div>

                                            <div className="form-group">
                                                <label for="name">Email 2</label>
                                                <input type="text" className="form-control" id="email2" name="email2" placeholder="Email 2" value="" />
                                            </div>

                                            <div className="form-group">
                                                <label for="name">Contact Number 1</label>
                                                <input type="text" className="form-control" id="contact_number1" name="contact_number1" placeholder="Contact Number 1" value="" />
                                            </div>

                                            <div className="form-group">
                                                <label for="name">Contact Number 2</label>
                                                <input type="text" className="form-control" id="contact_number2" name="contact_number2" placeholder="Contact Number 2" value="" />
                                            </div>


                                            <div className="form-group">
                                                <label for="name">Address Line 1</label>
                                                <textarea rows="3" className="form-control" id="address_line1" name="address_line1" placeholder="Address Line 1"></textarea>
                                            </div>

                                            <div className="form-group">
                                                <label for="name">Address Line 2</label>
                                                <textarea rows="3" className="form-control" id="address_line2" name="address_line2" placeholder="Address Line 2"></textarea>
                                            </div>


                                            <div className="form-group">
                                                <label for="name">Google Map</label>
                                                <input type="text" className="form-control" name="google_map" id="google_map" value="" />
                                            </div>


                                            <button type="submit" className="btn btn-primary mr-2">Update Cotact-Us</button>


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

export default ContactUs;