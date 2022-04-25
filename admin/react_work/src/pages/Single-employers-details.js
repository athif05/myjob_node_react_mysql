import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const SingleEmployersDetails = () => {
    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper text-left">

                    <div className="row">

                    <div className="col-lg-6 grid-margin stretch-card">
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Personal Information</h4>
                            
                            <div className="form-group">
                                <label for="Name"><strong>Company Name : </strong>  ITG</label>
                            </div>
                            
                            <div className="form-group">
                                <label for="Name"><strong>Email : </strong> itg@gmail.com</label>
                            </div>

                            <div className="form-group">
                                <label for="Name"><strong>Company Website: </strong> itg.com</label>
                            </div>

                            <div className="form-group">
                                <label for="Name"><strong>Company Views: </strong> 0</label>
                            </div>
                            
                            <div className="form-group">
                                <label for="Name"><strong>Company Phone : </strong> +121-23457,89</label>
                            </div>

                            <div className="form-group">
                                <label for="Name"><strong>Mobile Number : </strong> 7867564578</label>
                            </div>
                            
                            <div className="form-group">
                                <label for="Name"><strong>Alternate Number : </strong> 786755555</label>
                            </div>
                            
                            <div className="form-group">
                                <label for="Name"><strong>Company Address : </strong>  H-315, Sector 62</label>
                            </div>
                            
                            <div className="form-group">
                                <label for="Name"><strong>State Name : </strong> Uttar Pradesh</label>
                            </div>
                            
                            <div className="form-group">
                                <label for="Name"><strong>City Name : </strong> Noida</label>
                            </div>


                        </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 grid-margin stretch-card">
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">About Company</h4>
                            
                            <div className="form-group">
                                <label for="Name"><strong>About Company : </strong> Another career option to consider if you're interested in counseling is social work. As is true with other disciplines, there are a variety of allied fields in social work. Social workers who practice psychotherapy are usually called either clinical social workers or psychiatric social workers. Clinical social workers are trained to diagnose and treat psychological problems. Psychiatric social workers provide services to individuals, married couples, families, and small groups. They work in ment</label>
                            </div>
                            
                            <div className="form-group">
                                <label for="Name"><strong>Company Domain : </strong> Tech</label>
                            </div>
                            
                            <div className="form-group">
                                <label for="Name"><strong>Company Established Year : </strong> 2017</label>
                            </div>
                            
                            <div className="form-group">
                                <label for="Name"><strong>Team Member : </strong> 50</label>
                            </div>
                            
                            <div className="form-group">
                                <label for="Name"><strong>Company Logo : </strong> 
                                
                                    <br/><img src="assests/images/bvc-logo.png" alt="logo"/>
                                
                                
                                </label>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Social Media</h4>		
                            
                            <div className="form-group">
                                <label for="Name"><strong>Facebook: </strong><a href="https://www.facebook.com/" > https://www.facebook.com/</a></label>
                            </div>

                            <div className="form-group">
                                <label for="Name"><strong>Twitter: </strong><a href="https://twitter.com/" > https://twitter.com/</a></label>
                            </div>

                            <div className="form-group">
                                <label for="Name"><strong>Skype: </strong><a href="https://www.skype.com/" > https://www.skype.com/</a></label>
                            </div>

                            <div className="form-group">
                                <label for="Name"><strong>Pinterest: </strong><a href="https://www.pinterest.com/" > https://www.pinterest.com/</a></label>
                            </div>
                            
                        </div>
                        </div>
                    </div>		


                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Job Post (12)</h4>
                            
                            <div className="form-group">

                                <div>

                            
                                <table className="table table-striped project-orders-table" id="my_datatable">
                                    <thead>
                                        <th>Job Title</th>
                                        <th>Salary</th>
                                        <th>Opening</th>
                                        <th>Job Location</th>
                                        <th>City</th>
                                        <th>Job Types</th>
                                        <th>Working Days</th>
                                        <th>Experience</th>
                                        <th>Skills</th>
                                        <th>Action</th>
                                    </thead>
                                    
                                    <tbody>
                                    
                                        <tr>
                                            <td>PHP Developer</td>  
                                            <td>25K</td>  
                                            <td>2</td> 
                                            <td>Delhi</td> 
                                            <td>Delhi</td>
                                            <td>Tech</td>
                                            <td>5 Days Working</td>
                                            <td>Experience</td>
                                            <td>PHP, Mysql, Node, React</td>   
                                            <td>
                                                <a href="/single-job-details" >Know More...</a>
                                            </td>
                                        </tr>
                                    
                                    </tbody>
                                    
                                </table>
                                
                                    <span className="danger">No work experience added by employer...</span>
                                    
                                </div>
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

export default SingleEmployersDetails;