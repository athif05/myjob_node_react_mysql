import React, {useEffect, useState} from "react";
import { useParams} from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ReactTooltip from 'react-tooltip'; //use for show tooltip/title on href

const CandidateDetails = () => {

    //set state for show all jobs
    const [candidate_detials, setCandidateDetials] = useState([]);
    const [work_experience, setWorkExperience] = useState([]);
    const [qualification, setQualification] = useState([]);

    const params = useParams();
    useEffect(()=>{
        getCandidateDeatils();
    },[]);

    //call candidate details api
    const getCandidateDeatils = async () => {

        /* candidate details api, start here */
        let result = await fetch(`http://localhost:12345/candidate-details/${params.id}`);

        result = await result.json();

        let user_id=result[0]['user_id'];

        setCandidateDetials(result);
        /* candidate details api, end here */

        
        /* call work experience api, start here */
        let user_work_experience = await fetch(`http://localhost:12345/candidate-work-experience/${user_id}`);

        user_work_experience = await user_work_experience.json();

        setWorkExperience(user_work_experience);
        /* call work experience api, end here */


        /* call qualification api, start here */
        let user_qualification = await fetch(`http://localhost:12345/candidate-qualifications/${user_id}`);

        user_qualification = await user_qualification.json();

        setQualification(user_qualification);
        /* call qualification api, end here */
    }

    return(

        <div className="container-scroller">
            
            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />

                <div className="main-panel text-left">
                    <div className="content-wrapper">

                        {
                            ((candidate_detials.length>0) && (candidate_detials[0].name!=='No record found') ? candidate_detials.map((item, index) =>

                        <div className="row">

                        <div className="col-lg-6 grid-margin stretch-card">
                            <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Personal Information</h4>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Name : </strong> {item.name}</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Email : </strong> {item.email}</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Mobile Number : </strong> {item.mobile_number}</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Alternate Number : </strong> {item.alternate_number}</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Permanent Address : </strong> {item.permanent_address}</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Current Address : </strong> {item.current_address}</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>State Name : </strong> {item.state_name}</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>City Name : </strong> {item.citie_name}</label>
                                </div>

                            </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 grid-margin stretch-card">
                            <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Other Information</h4>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Describe Job Profile : </strong> {item.describe_job_profile}</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Skills : </strong> {item.skills}</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Notice Period : </strong>  {item.notice_period}</label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Last CTC : </strong> {item.last_ctc}</label>
                                </div>
                                                    
                                <div className="form-group">
                                    <label for="Name">
                                        <strong>Resume : </strong> 
                                        {
                                            (item.resume_file) ? 
                                            <a href="" download data-tip="Click Here For Download Resume">Download Resume</a>
                                            
                                            :
                                            <></>
                                        }
                                       
                                    </label>
                                </div>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Profile Image : </strong> 
                                    
                                        <br/><img src="assests/images/bvc-logo.png" alt="profile"/>
                                        <br/><a href="assests/images/bvc-logo.png" download data-tip="Click Here For Download Profile Image.">Download Profile Image</a>
                                    
                                    
                                    </label>
                                </div>
                                <ReactTooltip />
                            </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Work Experience</h4>
                                
                                <div className="form-group">
                                    <label for="Name"><strong>Experience: </strong> {item.work_experience_name}</label>
                                </div>
                                
                                
                                <div className="form-group">
                                
                                    <table className="table table-striped project-orders-table" id="my_datatable">
                                        <thead>
                                            <th>Designation</th>
                                            <th>Company Name</th>
                                            <th>Date From</th>
                                            <th>Date To </th>
                                            <th>Describe Role</th>
                                        </thead>
                                        
                                        <tbody>
                                            
                                        {
                                        ((work_experience.length>0) && (work_experience[0].name!=='No record found') ? work_experience.map((item_work, index) =>
                                            <tr>
                                                <td>{item_work.designation_name}</td>  
                                                <td>{item_work.organization_name}</td>  
                                                <td>{item_work.date_from}</td> 
                                                <td>{item_work.date_to}</td> 
                                                <td>{item_work.describe_role}</td>   
                                            </tr>
                                            )
                                            :
                                            <tr>
                                                <td colSpan={5}>No work experience added by candidate...</td>
                                            </tr>)
                                        }
                                                
                                            
                                        </tbody>
                                        
                                    </table>
                                                                            
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
                                        <thead>
                                            <th>Course Name</th>
                                            <th>College/University</th>
                                            <th>Year</th>
                                            <th>Marks</th>
                                        </thead>
                                        
                                        <tbody>
                                        {
                                            ((qualification.length>0) && (qualification[0].name!=='No record found') ? qualification.map((item_qualification, index) =>
                                            <tr>
                                                <td>{item_qualification.qualification.toUpperCase()}</td>  
                                                <td>{item_qualification.college_university}</td>  
                                                <td>{item_qualification.year}</td> 
                                                <td>{item_qualification.marks}</td>  
                                            </tr>)
                                            :
                                            <tr>
                                                <td colSpan={4}>No qualification added by candidate...</td>
                                            </tr>
                                        )}
                                        </tbody>
                                        
                                    </table>
                                        
                                </div>
                                
                            </div>
                            </div>
                        </div>			
                        
                        </div>)
                        :
                        null)}

                        </div>
                    <Footer />
                </div>
            </div>

        </div>
    )

}

export default CandidateDetails;