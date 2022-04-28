import React, {useEffect, useState} from "react";
import { useParams} from 'react-router-dom';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const SingleJobDetails = () => {

	//set state for show all jobs
    const [job_detials, setJobDetials] = useState([]);
	const [all_states, setAllStates] = useState([]);
	const [all_cities, setAllCities] = useState([]);
	const [all_qualifications, setAllQualifications] = useState([]);
	const [total_job_applied_by_candidate, setTotalJobAppliedByCandidate] = useState([]);

	const params = useParams();
	useEffect(()=>{
		getJobDeatils();
		getAllQualifications();
		getAllStates();
		getAllCities();
		getTotalJobAppliedByCandidate();
	});

	/* call all qualifications, start here */
	const getAllQualifications = async () => {
		let result_qualifications = await fetch(`http://localhost:12345/all-qualifications`);
		result_qualifications = await result_qualifications.json();
		setAllQualifications(result_qualifications);
	}
	/* call all qualifications, end here */


	/* call all states, start here */
	const getAllStates = async () => {
		let result_state = await fetch(`http://localhost:12345/all-states`);
		result_state = await result_state.json();
		setAllStates(result_state);
	}
	/* call all states, end here */


	/* call all cities, start here */
	const getAllCities = async () => {
		let result_city = await fetch(`http://localhost:12345/all-cities`);
		result_city = await result_city.json();
		setAllCities(result_city);
	}
	/* call all cities, end here */


	/* call details AudioParam, start here */
	const getJobDeatils = async () => {

		/* candidate details api, start here */
        let result = await fetch(`http://localhost:12345/job-details/${params.id}`);

		result = await result.json();
		
		setJobDetials(result);
	}
	/* call details AudioParam, end here */

	/* count total no job applied by candidate, start here */
	const getTotalJobAppliedByCandidate =  async () => {

		let result_total_job = await fetch(`http://localhost:12345/total-job-applied-by-candidate/${params.id}`);

		result_total_job = await result_total_job.json();

		setTotalJobAppliedByCandidate(result_total_job);

	}
	/* count total no job applied by candidate, end here */

	const regex = /(<([^>]+)>)/ig; //remove <p> tag from string

	var myArray='';

    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper text-left">
						{
							((job_detials.length>0) && (job_detials[0].name!=='No record found') ? job_detials.map((item, index) =>
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
												<label for="Name"><strong>Job Description : </strong> {item.job_description.replace(regex, '')}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Job Responsibilities : </strong> {item.job_responsibilities.replace(regex, '')}</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>Job Requirements : </strong> {item.job_requirements.replace(regex, '')}</label>
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
													Min Experience - {item.min_experience_required}
													
													
													<br/>
													Max Experience - {item.max_experience_required}
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
												<span style={{display:'none'}}>
													{ 
														myArray = item.qualification_ids.split(',')
													}
												</span>

												{
													/* for loop of qualification data */
													((all_qualifications.length>0) && (all_qualifications[0].name!=='No record found') ? all_qualifications.map((item_qualification,index) =>
													<>
													{
														/* foor loop of an array */
														((myArray.length>0) ? myArray.map((item_qual,index) =>
														<>
															{
															/* if condition */
															(item_qual==item_qualification.id) ? <>{item_qualification.name}, </> : null
															}
														</>
														)
														: 
														null)
													}
													</>
													)
													: 
													null)
												} 
													
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
												{
													//for loop start here
													((all_states.length>0) && (all_states[0].name!=='No record found') ? all_states.map((item_state, index) =>
													<>
													{
														//if condition
														(item_state.id===item.job_address_state) ? item_state.name : null
													}
													</>)
													: 
													null
													) 
												}						
												</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>City : </strong> 
												{
													//for loop
													((all_cities.length>0) && (all_cities[0].name!=='No record found') ? all_cities.map((item_city, index) => 
													<>
													{
														//if condition
														(item_city.id===item.job_address_city) ? item_city.name : null
													}
													</> )
													:
													null
													)
												}
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
												{
													//for loop start here
													((all_states.length>0) && (all_states[0].name!=='No record found') ? all_states.map((item_state, index) =>
													<>
													{
														//if condition
														(item_state.id===item.interview_address_state) ? item_state.name : null
													}
													</>)
													: 
													null
													) 
												}
												</label>
											</div>
											
											<div className="form-group">
												<label for="Name"><strong>City : </strong> 
												{
													//for loop
													((all_cities.length>0) && (all_cities[0].name!=='No record found') ? all_cities.map((item_city, index) => 
													<>
													{
														//if condition
														(item_city.id===item.interview_address_city) ? item_city.name : null
													}
													</> )
													:
													null
													)
												}
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
											
											{
												(item.candidate_fee_charged==='Yes') ?
												<>
												<div className="form-group">
													<label for="Name"><strong>Fee Amount : </strong> {item.candidate_fee_amount}</label>
												</div>
												
												<div className="form-group">
													<label for="Name"><strong>Reason : </strong> {item.fee_charged_reason_name}</label>
												</div>
												{
													(item.candidate_fee_reasons==='5') ? 
													<div className="form-group">
														<label for="Name"><strong>Other Reason : </strong> {item.candidate_fee_other_reasons}</label>
													</div>
													:
													null
												}
												</> 
												: 
												null 
											}
											
											
										</div>
									</div>
								</div>


								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Total Job Applied by Candidate</h4>
										
											<div className="form-group">
												<label for="Name"><strong>Applied by : </strong> 
												{
													(total_job_applied_by_candidate.map((item_total_job, index) =>
														item_total_job.total_applied_job
													))
												}
												&nbsp;Candidates</label>
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