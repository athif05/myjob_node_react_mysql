import React, {useEffect, useState} from "react";
import { useParams} from 'react-router-dom';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const SingleJobDetails = () => {

	//set state for show all jobs
    const [job_detials, setJobDetials] = useState([]);

	const params = useParams();
	useEffect(()=>{
		getJobDeatils();
	});

	/* call details AudioParam, start here */
	const getJobDeatils = async () => {

		/* candidate details api, start here */
        let result = await fetch(`http://localhost:12345/job-details/${params.id}`);

		result = await result.json();
		//console.log(result[0].job_title);
		setJobDetials(result);
	}
	/* call details AudioParam, end here */


    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper text-left">
						{
							((job_detials.length>0) && (job_detials[0].name!='No record found') ? job_detials.map((item, index) =>
							<div className="row">

								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Basic Job Details</h4>
											
											<div className="form-group">
												<label for="Name"><strong>Job Title : </strong> {item.job_title}</label>
											</div>
									
											<div className="form-group">
												<label for="Name"><strong>Salary : </strong> {item.salary}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>No of Opening : </strong> {item.no_of_opening}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Job Location : </strong> 
												{item.job_location_name}
												</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>State Name : </strong> {item.state_name}</label>
											</div>
											
											{/* <div className="form-group">
												<label for="Name"><strong>City Name : </strong> {item.job_title}</label>
											</div> */}
											
											<div className="form-group">
												<label for="Name"><strong>Job Description : </strong> {item.job_description}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Job Responsibilities : </strong> {item.job_responsibilities}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Job Requirements : </strong> {item.job_requirements}</label>
											</div>


												</div>
												</div>
											</div>
											
											<div className="col-lg-6 grid-margin stretch-card">
												<div className="card">
												<div className="card-body">
													<h4 className="card-title">Additional Job Details</h4>
													
													<div className="form-group">
												<label for="Name"><strong>Job Category : </strong> {item.main_job_category}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Types Of Job : </strong> {item.types_of_job_name}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Working Days : </strong> {item.working_day_name}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Working Hours : </strong> {item.working_hours}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Experience : </strong> 
												{item.experience_required}
													
													{ 
													(item.experience_required === 'Experience') ?
													<>
													<br/>
													Min Experience - {item.job_title}
													
													
													<br/>
													Max Experience - {item.job_title}
													</>
													: 
													<></>
													} 
											
												</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>CTC : </strong> {item.ctc}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Skills : </strong> {item.skills}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Qualification : </strong> 
													{item.qualification_ids}
												</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Gender : </strong> {item.gender}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Candidate Requirements : </strong> {item.candidate_requirements}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>English : </strong> {item.english_required}</label>
											</div>
											
										</div>
									</div>
								</div>
							
								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Interview Information</h4>
										
											<div className="form-group">
												<label for="Name"><strong>Company Name : </strong> {item.interview_information_company_name}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>HR Name : </strong> {item.interview_information_hr_name}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>HR Contact No : </strong> {item.interview_information_hr_number}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>HR Email : </strong> {item.interview_information_hr_email}</label>
											</div>
											
										</div>
									</div>
								</div>		


								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Job Address</h4>
											
											<div className="form-group">
												<label for="Name"><strong>Full Address : </strong> {item.job_address_flat_address}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>State : </strong> 
													{item.job_address_state}						
												</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>City : </strong> 
													{item.job_address_city}	
												</label>
											</div>
											
										</div>
									</div>
								</div>

								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Interview Address</h4>
										
											<div className="form-group">
												<label for="Name"><strong>Full Address : </strong> {item.interview_address_full_address}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>State : </strong> 
													{item.interview_address_state}
												</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>City : </strong> 
													{item.interview_address_city}
												</label>
											</div>
											
										</div>
									</div>
								</div>
						
								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Fee Charged</h4>
										
											<div className="form-group">
												<label for="Name"><strong>If there any fee charged to the candidate? : </strong> {item.candidate_fee_charged}</label>
											</div>
											
											
											<div className="form-group">
												<label for="Name"><strong>Fee Amount : </strong> {item.candidate_fee_amount}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Reason : </strong> {item.candidate_fee_reasons}</label>
											</div>
										
												<div className="form-group">
													<label for="Name"><strong>Other Reason : </strong> {item.candidate_fee_other_reasons}</label>
												</div>
											
											
										</div>
									</div>
								</div>


								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Total Job Applied by Candidate</h4>
										
											<div className="form-group">
												<label for="Name"><strong>Applied by : </strong> {item.job_title} Candidates</label>
											</div>
											
										</div>
									</div>
								</div>

							
							</div>)
							:
							null)
						}

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default SingleJobDetails;