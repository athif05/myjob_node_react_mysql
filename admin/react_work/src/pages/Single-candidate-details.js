import React from "react";
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import Footer from './../components/Footer';

const SingleCandidateDetails = () => {
    return(

        <div className="container-scroller">
            
            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />

                <div className="main-panel text-left">
                    <div className="content-wrapper">

                        <div className="row">

                        <div className="col-lg-6 grid-margin stretch-card">
                            <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Personal Information</h4>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Name : </strong> Rohan Bhalla</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Email : </strong> rohan@gmail.com</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Mobile Number : </strong> 8899889900</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Alternate Number : </strong> 6677889900</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Permanent Address : </strong> Ashram, Delhi</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Current Address : </strong> sector 18, gurugram</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>State Name : </strong> Delhi</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>City Name : </strong> New Delhi</label>
                                </div>

                            </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 grid-margin stretch-card">
                            <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Other Information</h4>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Describe Job Profile : </strong> web developer</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Skills : </strong> php, ci, html, js</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Notice Period : </strong>  1 Month</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Last CTC : </strong> 5L</label>
                                </div>
                                                    
                                <div className="form-group">
                                    <label for="Name">
                                        <strong>Resume : </strong> 
                                        
                                        Download Resume
                                        
                                    </label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Profile Image : </strong> 
                                    
                                        <br/><img src="assests/images/bvc-logo.png" alt="profile"/>
                                        <br/><a href="assests/images/bvc-logo.png" download title="Click here for download image.">Download Profile Image</a>
                                    
                                    
                                    </label>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Work Experience</h4>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Experience: </strong> 5+ Year Experience</label>
                                </div>
                                
                                
                                <div className="form-group">
                                
                                    <table className="table table-striped project-orders-table" id="my_datatable">
                                        <thead >
                                            <th >Designation</th>
                                            <th >Company Name</th>
                                            <th >Date From</th>
                                            <th >Date To </th>
                                            <th >Describe Role</th>
                                        </thead>
                                        
                                        <tbody>
                                        
                                            <tr>
                                                <td>Web Dessigner</td>  
                                                <td>ITG</td>  
                                                <td>2021-10-01</td> 
                                                <td>2021-10-31</td> 
                                                <td>Booking Engine</td>   
                                            </tr>
                                        
                                        </tbody>
                                        
                                    </table>
                                    
                                        <span className="danger">No work experience added by candidate...</span>
                                        
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Qualification</h4>		
                                
                                <div className="form-group">
                                
                                    <table className="table table-striped project-orders-table" id="my_datatable">
                                        <thead >
                                            <th >Course Name</th>
                                            <th >College/University</th>
                                            <th >Year</th>
                                            <th >Marks</th>
                                        </thead>
                                        
                                        <tbody>
                                        
                                            <tr>
                                                <td>mbc</td>  
                                                <td>MTU, Gautam Budh Nagar</td>  
                                                <td>2013</td> 
                                                <td>74</td>  
                                            </tr>
                                        
                                        </tbody>
                                        
                                    </table>
                                    
                                        <span className="danger">No qualification added by candidate...</span>
                                        
                                </div>
                                
                            </div>
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

export default SingleCandidateDetails;