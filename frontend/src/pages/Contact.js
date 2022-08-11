import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import validator from 'validator'; //email validation

const Contact = () =>{

  /* for show contact details */
  const [contact_detials, setContactDetials] = useState([]);

  /* for save get in touch details */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);


  useEffect(() => {
    document.title = 'BVC | Contact Us';

    getContactUs();

  },[]);


  const getContactUs = async () =>{
    const tbl = 'contactuses';
    let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
    result = await result.json();

    setContactDetials(result);
}

/* save message into db, start here */
const sendMessage = async() =>{

  if(!name || !email || !subject || !message){
    setError(true);
    setSuccess(false);
    return false;
  }

  if (!validator.isEmail(email)) { 
    setEmailError('Enter valid Email!');
    return false;
  }  else {
    setEmailError('');
  }

  let result = await fetch("http://localhost:12345/contact-email",{
    method: "post",
    body:JSON.stringify({name, email, subject, message}),
    headers:{
        "Content-Type":"application/json"
    }
  });

  result = await result.json();
  console.log(result);

  setError(false);
  setSuccess('Thanks for contact us.');
  setName('');
  setEmail('');
  setSubject('');
  setMessage('');

  getContactUs();

}
/* save message into db, end here */

  return (
    <div className="wrapper">
  
      <Header />
      
      <main className="main-content">
        
        <div className="page-header-area sec-overlay sec-overlay-black contact-us-bck-img">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title">Contact Us</h2>
                  <nav className="breadcrumb-area">
                    <ul className="breadcrumb justify-content-center">
                      <li><a href="/">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          ((contact_detials.length>0) && (contact_detials[0].name!=='No record found') ? contact_detials.map((item, index) =>
        <section className="contact-area contact-page-area">
          <div className="container">
            <div className="row contact-page-wrapper">
              <div className="col-lg-12">
                <div className="contact-info-wrap">
                  <div className="info-item">
                    <div className="icon">
                      <img src="assets/img/icons/c1.png" alt="iconmage" width="42" height="42"/>
                    </div>
                    <div className="info">
                      <h5 className="title">Call Us:</h5>
                      <p>
                        <a href={"tel://"+item.contact_number1}>{item.contact_number1}</a><br/>
                        <a href={"tel://"+item.contact_number2}>{item.contact_number2}</a>
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon">
                      <img src="assets/img/icons/c2.png" alt="dmage" width="43" height="73"/>
                    </div>
                    <div className="info">
                      <h5 className="title">Email:</h5>
                      <p>
                        <a href={"mailto://"+item.email1}>{item.email1}</a><br/>
                        <a href={"mailto://"+item.email2}>{item.email2}</a>
                      </p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon">
                      <img src="assets/img/icons/c3.png" alt="gmage" width="36" height="46"/>
                    </div>
                    <div className="info">
                      <h5 className="title">Address:</h5>
                      <p>
                        {item.address_line1} <br/>
                        {item.address_line2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                
                <div className="contact-form">
                  <h4 className="contact-form-title">Get in Touch</h4>
                  {success && <div className="alert alert-success" role="alert">{success}</div>}
                  <form id="contact-form" >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input className="form-control" type="text" name="name" id="name" pattern="[a-zA-Z ]*" value={name} onChange={(e) => setName((v)=>(e.target.validity.valid ? e.target.value : v))} placeholder="Name:" maxLength={100}/>
                          {error && !name && <span className="invalid-input">Enter name</span> }
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input className="form-control" type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} maxLength={50} placeholder="Email:"/>
                          {error && !email && <span className="invalid-input">Enter email</span> }
                          <span className="invalid-input">{emailError}</span>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input className="form-control" type="text" name="subject" id="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="Subject:"/>
                          {error && !subject && <span className="invalid-input">Enter subject</span> }
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" name="message" id="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message"></textarea>
                          {error && !message && <span className="invalid-input">Enter message</span> }
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb--0">
                          <button className="btn-theme d-block w-100" type="button" onClick={sendMessage}>Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                
                <div className="form-message"></div>
              </div>
              <div className="col-lg-6">
                <div className="map-area">
                  <iframe src={item.google_map}></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        ) : null)
      }
      </main>

      <Footer />

      
      <div id="scroll-to-top" className="scroll-to-top"><span className="icofont-rounded-up"></span></div>

      
      <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
        <MobileMenu />
      </aside>

    </div>
  )
}

export default Contact;