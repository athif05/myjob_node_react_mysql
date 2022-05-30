import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const ContactUs = () => {

    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [contact_number1, setContactNumber1] = useState('');
    const [contact_number2, setContactNumber2] = useState('');
    const [address_line1, setAddressLine1] = useState('');
    const [address_line2, setAddressLine2] = useState('');
    const [google_map, setGoogleMap] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        getContactUs();
    },[]);


    const getContactUs = async () =>{
        const tbl = 'contactuses';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result = await result.json();
        console.warn(result);
        setEmail1(result[0].email1);
        setEmail2(result[0].email2);
        setContactNumber1(result[0].contact_number1);
        setContactNumber2(result[0].contact_number2);
        setAddressLine1(result[0].address_line1);
        setAddressLine2(result[0].address_line2);
        setGoogleMap(result[0].google_map);
    }

    const updateContactUs = async () => {

        if(!email1 || !contact_number1 || !address_line1 || !google_map){
            setError(true);
            setSuccess(false);
            return false;
        }

        let result = await fetch(`http://localhost:12345/update-contact-us`,{
            method:"put",
            body:JSON.stringify({email1, email2, contact_number1, contact_number2, address_line1, address_line2, google_map}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();

        setError(false);
        setSuccess(true);
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

                                    <h4 className="card-title">Manage Contact-Us</h4>
                                    { success && <div className="alert alert-success" role="alert">Updated Successfully</div> }

                                    <div className="form-group">
                                        <label for="name">Email 1</label>
                                        <input type="text" className="form-control" id="email1" name="email1" placeholder="Email 1" defaultValue={email1} onChange={(e)=>setEmail1(e.target.value)}/>
                                        {error && !email1 && <span className="invalid-input">Enter email</span>}
                                    </div>

                                    <div className="form-group">
                                        <label for="name">Email 2</label>
                                        <input type="text" className="form-control" id="email2" name="email2" placeholder="Email 2" defaultValue={email2} onChange={(e)=>setEmail2(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                        <label for="name">Contact Number 1</label>
                                        <input type="text" className="form-control" id="contact_number1" name="contact_number1" placeholder="Contact Number 1" defaultValue={contact_number1} onChange={(e)=>setContactNumber1(e.target.value)}/>
                                        {error && !contact_number1 && <span className="invalid-input">Enter contact number</span>}
                                    </div>

                                    <div className="form-group">
                                        <label for="name">Contact Number 2</label>
                                        <input type="text" className="form-control" id="contact_number2" name="contact_number2" placeholder="Contact Number 2" defaultValue={contact_number2} onChange={(e)=>setContactNumber2(e.target.value)}/>
                                    </div>


                                    <div className="form-group">
                                        <label for="name">Address Line 1</label>
                                        <textarea rows="3" className="form-control" id="address_line1" name="address_line1" placeholder="Address Line 1" value={address_line1} onChange={(e)=>setAddressLine1(e.target.value)}></textarea>
                                        {error && !address_line1 && <span className="invalid-input">Enter address</span>}
                                    </div>

                                    <div className="form-group">
                                        <label for="name">Address Line 2</label>
                                        <textarea rows="3" className="form-control" id="address_line2" name="address_line2" placeholder="Address Line 2" value={address_line2} onChange={(e)=>setAddressLine2(e.target.value)}>{address_line2}</textarea>
                                    </div>


                                    <div className="form-group">
                                        <label for="name">Google Map</label>
                                        <input type="text" className="form-control" name="google_map" id="google_map" defaultValue={google_map} onChange={(e)=>setGoogleMap(e.target.value)}/>
                                        {error && !google_map && <span className="invalid-input">Enter google map</span>}
                                    </div>


                                    <button type="submit" className="btn btn-primary mr-2" onClick={updateContactUs}>Update Cotact-Us</button>

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