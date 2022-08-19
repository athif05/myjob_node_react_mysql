import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import axios from 'axios';

import WorkExperienceTableRows from "../components/WorkExperienceTableRows";
import QualificationTableRows from "../components/QualificationTableRows";

const EditCandidateDetails = () =>{

    const containerStyle={
        paddingTop: "15px"
    }

    const PersonalInfo = {
        borderBottom: "1px solid #ccc", 
        borderTop: "1px solid #ccc", 
        textAlign: "center", 
        backgroundColor: "#f4f4f4", 
        lineHeight: "30px"
    }

    const WorkExpThead = {
        color:"#656565", 
        fontWeight:"normal"
    }
    const WorkExpTh10 = {
        lineHeight:"15px",
        borderBottom:"1px solid #c9c8c8!important",
        width:"10%"
    }

    const WorkExpTh20 = {
        lineHeight:"15px",
        borderBottom:"1px solid #c9c8c8!important",
        width:"20%"
    }

    const WorkExpTh30 = {
        lineHeight:"15px",
        borderBottom:"1px solid #c9c8c8!important",
        width:"30%"
    }
    const WorkExpTd={
        height: "30px",
        fontSize: "14px",
        lineHeight: "18px"
    }

    const ProInfoH6 = {
        borderBottom:"1px solid #ccc", 
        borderTop:"1px solid #ccc", 
        textAlign:"center", 
        backgroundColor:"#f4f4f4",
        lineHeight: "30px",
        marginTop: "20px"
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile_number, setMobileNumber] = useState('');
    const [alternate_number, setAlternateNumber] = useState('');
    const [permanent_address, setPermanentAddress] = useState('');
    const [current_address, setCurrentAddress] = useState('');
    const [state_id, setStateId] = useState('');
    const [city, setCity] = useState('');
    const [work_experience, setWorkExperience] = useState('');
    const [designation, setDesignation] = useState([]);
    const [company_name, setCompanyName] = useState([]);
    const [date_from, setDateFrom] = useState([]);
    const [date_to, setDateTo] = useState([]);
    const [describe_role, setDescribeRole] = useState([]);
    const [course_name, setCourseName] = useState([]);
    const [college, setCollege] = useState([]);
    const [year, setYear] = useState([]);
    const [marks, setMarks] = useState([]);
    const [describe_job_profile, setDescribeJobProfile] = useState('');
    const [skills, setSkills] = useState('');
    const [notice_period, setNoticePeriod] = useState('');
    const [last_ctc, setLastCtc] = useState('');
    const [job_title, setJobTitle] = useState('');
    const [job_keywords, setJobKeywords] = useState('');
    const [job_category, setJobCategory] = useState('');
    const [job_locations, setJobLocations] = useState('');
    const [english_required, setEnglishRequired] = useState('');
    const [working_or_not, setWorkingorNot] = useState('');
    
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [candidate_details, setCandidateDetails] = useState([]);
    const [all_states, setAllStates] = useState([]);
    const [all_cities, setAllCities] = useState([]);
    const [all_work_experiences, setAllWorkExperiences] = useState([]);
    const [all_notice_periods, setAllNoticePeriods] = useState([]);
    const [all_job_category, setAllJobCategory] = useState([]);

    const [candidate_work_experience, setCandidateWorkExperience] = useState([]);
    const [candidate_qualification, setCandidateQualification] = useState([]);

    const params = useParams();

    useEffect(()=>{
        getCandidateDetails();
    },[]);

    const getCandidateDetails = async() =>{
        let result = await fetch(`http://localhost:12345/candidate-details/${params.id}`);
        result = await result.json();
        //console.log(result);
        setCandidateDetails(result);

        setName(result[0].name);
        setEmail(result[0].email);
        setMobileNumber(result[0].mobile_number);
        setAlternateNumber(result[0].alternate_number);
        setPermanentAddress(result[0].permanent_address);
        setCurrentAddress(result[0].current_address);
        setStateId(result[0].state_id);
        setCity(result[0].city_id);
        setWorkExperience(result[0].work_experience);
        setDescribeJobProfile(result[0].describe_job_profile);
        setSkills(result[0].skills);
        setNoticePeriod(result[0].notice_period);
        setLastCtc(result[0].last_ctc);
        setJobTitle(result[0].job_title);
        setJobKeywords(result[0].job_keywords);
        setJobCategory(result[0].job_categories_id);
        setJobLocations(result[0].job_locations_id);
        setEnglishRequired(result[0].english_required_id);
        setWorkingorNot(result[0].working_or_not);

        let result_states = await fetch(`http://localhost:12345/all-states`);
        result_states = await result_states.json();
        setAllStates(result_states);

        let result_cities = await fetch(`http://localhost:12345/all-cities`);
        result_cities = await result_cities.json();
        setAllCities(result_cities);

        let result_work_experiences = await fetch(`http://localhost:12345/all-work-experiences`);
        result_work_experiences = await result_work_experiences.json();
        setAllWorkExperiences(result_work_experiences);


        let result_notice_periods = await fetch(`http://localhost:12345/all-notice-periods`);
        result_notice_periods = await result_notice_periods.json();
        setAllNoticePeriods(result_notice_periods);


        let result_job_category = await fetch(`http://localhost:12345/all-job-categories`);
        result_job_category = await result_job_category.json();
        setAllJobCategory(result_job_category);
        

        let result_candidate_work_experiences = await fetch(`http://localhost:12345/candidate-work-experience/${params.id}`);
        result_candidate_work_experiences = await result_candidate_work_experiences.json();
        setCandidateWorkExperience(result_candidate_work_experiences);


        let result_candidate_qualification = await fetch(`http://localhost:12345/candidate-qualifications/${params.id}`);
        result_candidate_qualification = await result_candidate_qualification.json();
        setCandidateQualification(result_candidate_qualification);

    }

    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            designation:'',
            companyName:'',
            dateFrom:'',
            dateTo:'',
            describeRole:''  
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }


   const [rowsDataQual, setRowsDataQual] = useState([]);
   
   const addTableRowsQual = ()=>{
  
    const rowsInputQual={
        courseName:'',
        college:'',
        year:'',
        marks:'' 
    } 
    setRowsDataQual([...rowsDataQual, rowsInputQual])
  
    }

    const deleteTableRowsQual = (index)=>{
        const rows = [...rowsDataQual];
        rows.splice(index, 1);
        setRowsDataQual(rows);
    }
    
    const handleChange = (index, evnt)=>{
        
        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput); 
    }

    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const updateDetails = async()=>{

        
        if(!name || !email || !mobile_number || !permanent_address || !current_address || !state_id || !city || !work_experience || !describe_job_profile || !skills || !job_title || !job_keywords || !job_category || !job_locations || !english_required || !working_or_not){
            setError(true);
            return false;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("mobile_number", mobile_number);
        formData.append("alternate_number", alternate_number);
        formData.append("permanent_address", permanent_address);
        formData.append("current_address", current_address);
        formData.append("state_id", state_id);
        formData.append("city_id", city);
        formData.append("work_experience", work_experience);
        formData.append("designation", designation);
        formData.append("company_name", company_name);
        formData.append("date_from", date_from);
        formData.append("date_to", date_to);
        formData.append("describe_role", describe_role);
        formData.append("course_name", course_name);
        formData.append("college", college);
        formData.append("year", year);
        formData.append("marks", marks);
        formData.append("describe_job_profile", describe_job_profile);
        formData.append("skills", skills);
        formData.append("notice_period", notice_period);
        formData.append("last_ctc", last_ctc);
        formData.append("job_title", job_title);
        formData.append("job_keywords", job_keywords);
        formData.append("job_category", job_category);
        formData.append("job_locations", job_locations);
        formData.append("english_required", english_required);
        formData.append("working_or_not", working_or_not);

        console.log('update');
        
        /* try {
            const res = await axios.post(
            `http://localhost:12345/update-candidate-details/${params.id}`,
            formData
            );
            console.log(res);
            setSuccess(true);
            setError(false);
            
        } catch (ex) {
            console.log(ex);
        } */

    }

    //console.log(job_locations);
    var job_locations_array = job_locations.split(',');
    //console.log(job_locations_array);

    return (
        <div className="wrapper">
            <Header />

            <main className="main-content">

                <div className="page-header-area sec-overlay sec-overlay-black blog-bck-img">
                    <div className="container pt--0 pb--0">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-header-content">
                                    <h2 className="title">Candidate Name</h2>
                                    <nav className="breadcrumb-area">
                                        <ul className="breadcrumb justify-content-center">
                                        <li><a href="/">Home</a></li>
                                        <li className="breadcrumb-sep">//</li>
                                        <li>Edit Candidate Details</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="team-details-area">

                    <div className="container" style={containerStyle}>
                        <form method="post" id="myForm" encType="multipart/form-data">
                            <div className="col-12" tabIndex="-1" role="dialog" id="myModal">
                                <div role="document" style={{width:"100%!important"}}>{/* className="modal-dialog" */}
                                    <div className="modal-content">
                                        <div className="modal-header" style={{ backgroundColor:"#ccc"}}>
                                            <h5 className="modal-title">Update Your Profile</h5>  
                                        </div>

                                        <div className="modal-body" style={{ backgroundColor:"#f9f9f9"}}>
                                            <h6 style={PersonalInfo}>Personal Information</h6>
                                            <input type="hidden" name="edit_id" id="edit_id" value=""/>
                                            
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Name">Name: <span className="error-msg-star">*</span></label>
                                                    <input type="text" className="form-control" name="name" id="name" maxLength="50" defaultValue={name} onChange={(e)=>setName(e.target.value)} required />
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Club">Email:</label>
                                                    <input type="text" className="form-control" name="email" id="email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} maxLength="50" readOnly={email ? "true" : "false"} />
                                                </div> 
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Country">Mobile Number: <span className="error-msg-star">*</span></label>
                                                    <input type="text" className="form-control" name="mobile_number" id="mobile_number" maxLength="10" defaultValue={mobile_number} onChange={(e)=>setMobileNumber(e.target.value)} required readOnly={mobile_number ? true : false}/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Alternate Number:</label>
                                                    <input type="text" className="form-control" name="alternate_number" id="alternate_number" maxLength="10" defaultValue={alternate_number} onChange={(e)=>setAlternateNumber(e.target.value)} required />
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Permanent Address: <span className="error-msg-star">*</span></label>
                                                    <textarea className="form-control" name="permanent_address" id="permanent_address" maxLength="500" defaultValue={permanent_address} onChange={(e)=>setPermanentAddress(e.target.value)} required></textarea>
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Current Address: <span className="error-msg-star">*</span></label>
                                                    <textarea className="form-control" name="current_address" id="current_address" maxLength="500" defaultValue={current_address} onChange={(e)=>setCurrentAddress(e.target.value)} required></textarea>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">State: <span className="error-msg-star">*</span></label>
                                                    <select className="form-control" name="state_id" id="state_id" value={state_id || ""} onChange={(e)=>setStateId(e.target.value)} required>
                                                        <option value="">-- Select State --</option>
                                                        { all_states.map((item_states) =>
                                                        <option value={item_states.id} key={item_states.id}>{item_states.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">City: <span className="error-msg-star">*</span></label>
                                                    <select className="form-control" name="city_id" id="city_id" value={city || ""} onChange={(e)=>setCity(e.target.value)} required>
                                                        <option value="">-- Select City --</option>
                                                        { all_cities.map((item_cities) =>
                                                        <option value={item_cities.id} key={item_cities.id}>{item_cities.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Work Experience: <span className="error-msg-star">*</span></label>
                                                    <select className="form-control" name="work_experience" id="work_experience" value={work_experience || ""} onChange={(e)=>setWorkExperience(e.target.value)} required>
                                                        <option value="">-- Select Work Experience --</option>
                                                        { all_work_experiences.map((item_work_experiences) =>
                                                        <option value={item_work_experiences.id} key={item_work_experiences.id}>{item_work_experiences.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-12">&nbsp;</div>
                                            <div className="row" id="work_experience_div" >
                                                <label htmlFor="Goal Score"><strong>Work Experience:</strong> <span className="error-msg-star">*</span></label>
                                                <div className="form-group col-12">
                                                    <table className="table table-bordered" id="dynamicWorkTable">  
                                                        <thead style={WorkExpThead}>
                                                            <tr>
                                                                
                                                            </tr>
                                                        </thead>
                                                        
                                                        <tbody>  
                                                            { candidate_work_experience.map((item_work_exp, index)=>
                                                        <tr key={index}>
                                                                <td><input type="text" name="addmore_designation[]" defaultValue={item_work_exp['designation_name']} onChange={(e)=>setDesignation(e.target.value)} placeholder="Enter your designation" className="form-control" style={WorkExpTd}/></td>
                                                                <td><input type="text" name="addmore_company_name[]" defaultValue={item_work_exp['organization_name']} onChange={(e)=>setCompanyName(e.target.value)} placeholder="Enter your company name" className="form-control" style={WorkExpTd}/></td>								
                                                                <td><input type="date" name="addmore_from[]" defaultValue={item_work_exp['date_from']} onChange={(e)=>setDateFrom(e.target.value)} placeholder="Enter from" className="form-control" style={WorkExpTd}/></td>
                                                                <td><input type="date" name="addmore_to[]" defaultValue={item_work_exp['date_to']} onChange={(e)=>setDateTo(e.target.value)} placeholder="Enter to" className="form-control" style={WorkExpTd}/></td>								
                                                                <td><input type="text" name="addmore_describe_role[]" defaultValue={item_work_exp['describe_role']} onChange={(e)=>setDescribeRole(e.target.value)} placeholder="Describe Role" className="form-control" style={WorkExpTd}/></td>  
                                                                <td>
                                                                 			
                                                                {/* <span className="btn btn-success" onClick={addTableRows} style={{ backgroundColor:"green", height:"23px", lineHeight:"6px", fontSize:"14px"}}>Add More</span> */}
                                                                { (index ==0 ) ?
                                                                <button type="button" className="btn btn-success" onClick={addTableRows} style={WorkExpTd}>Add More</button>
                                                                : <button type="button" className="btn btn-danger" onClick={()=>(deleteTableRows(index))} style={WorkExpTd}>Remove</button> }
                                                                </td>  
                                                            </tr>
                                                        )}
                                                            <WorkExperienceTableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                                                        </tbody>
                                                    </table> 
                                                </div>
                                            </div>

                                            <div className="row">
                                                <label htmlFor="Goal Score"><strong>Qualification:</strong> <span className="error-msg-star">*</span></label>
                                                <div className="form-group col-md-12">
                                                    <table className="table table-bordered" id="dynamicTable">  
                                                        <thead style={WorkExpThead}>
                                                            <th style={WorkExpTh20}>Course Name</th>
                                                            <th style={WorkExpTh30}>College/University</th>
                                                            <th style={WorkExpTh20}>Year</th>
                                                            <th style={WorkExpTh20}>Marks</th>
                                                            <th style={WorkExpTh10}>Action</th>
                                                        </thead>
                                                        
                                                        <tbody>     
                                                        { candidate_qualification.map((item_cand_qual, indexx)=>                                                            
                                                            <tr key={indexx}>
                                                                <td><input type="text" name="addmore_qualification[]" defaultValue={item_cand_qual['qualification']} onChange={(e)=>setCourseName(e.target.value)} placeholder="Enter your qualification" className="form-control" style={WorkExpTd}/></td>
                                                                <td><input type="text" name="addmore_college_university[]" defaultValue={item_cand_qual['college_university']} onChange={(e)=>setCollege(e.target.value)} placeholder="Enter your college/university" className="form-control" style={WorkExpTd}/></td>								
                                                                <td><input type="text" name="addmore_year[]" defaultValue={item_cand_qual['year']} onChange={(e)=>setYear(e.target.value)} placeholder="Enter your year" className="form-control" style={WorkExpTd}/></td>  
                                                                <td><input type="text" name="addmore_marks[]" defaultValue={item_cand_qual['marks']} onChange={(e)=>setMarks(e.target.value)} placeholder="Enter your marks" className="form-control" style={WorkExpTd}/></td>  
                                                                <td>			
                                                                    
                                                                { (indexx ==0 ) ?
                                                                <button type="button" className="btn btn-success"  onClick={addTableRowsQual}  style={WorkExpTd}>Add More</button>
                                                                : <button type="button" className="btn btn-danger" onClick={()=>(deleteTableRowsQual(indexx))} style={WorkExpTd}>Remove</button> }
                                                                    
                                                                </td>  
                                                            </tr>
                                                        )}
                                                            <QualificationTableRows rowsDataQual={rowsDataQual} deleteTableRowsQual={deleteTableRowsQual} handleChange={handleChange} />

                                                        </tbody> 
                                                    </table> 
                                                </div>
                                                
                                            </div>

                                            <div className="row">
                        
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Describe Job Profile:</label>
                                                    <textarea className="form-control" name="describe_job_profile" id="describe_job_profile" maxLength="500" defaultValue={describe_job_profile} onChange={(e)=>setDescribeJobProfile(e.target.value)}></textarea>
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Skills <span className="error-msg-star">*</span></label>
                                                    <input type="text" className="form-control" id="skills" data-role="tagsinput" name="skills" defaultValue={skills} onChange={(e)=>setSkills(e.target.value)} style={{padding: "8px 6px"}} required />
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Notice Period: <span className="error-msg-star">*</span></label>
                                                    <select className="form-control" name="notice_period" id="notice_period" value={notice_period || ""} onChange={(e)=>setNoticePeriod(e.target.value)} required>
                                                        <option value="">-- Select Notice Period --</option>
                                                        { all_notice_periods.map((item_notice_periods) =>
                                                        <option value={item_notice_periods.name} key={item_notice_periods.name}>{item_notice_periods.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                
                                            </div>

                                            <div className="row">
                        
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Last CTC:</label>
                                                    <input type="text" className="form-control" name="last_ctc" id="last_ctc" maxLength="10" defaultValue={last_ctc} onChange={(e)=>setLastCtc(e.target.value)} />
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Profile Image</label>
                                                    <input type="file" className="form-control" name="profile_image" id="profile_image" accept="image/png, image/jpeg, image/jpg" />
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Upload Resume <span className="error-msg-star">*</span></label>
                                                    <input type="file" className="form-control" name="resume_file" id="resume_file" accept="application/pdf, application/doc" />
                                                </div>
                                            </div>

                                            <h6 style={ProInfoH6}>Professional Information</h6>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Job Title: <span className="error-msg-star">*</span></label>
                                                    <input type="text" className="form-control" name="job_title" id="job_title" maxLength="100" defaultValue={job_title} onChange={(e)=>setJobTitle(e.target.value)} required />
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Job Keywords: <span className="error-msg-star">*</span></label>
                                                    <input type="text" className="form-control" name="job_keywords" id="job_keywords" data-role="tagsinput" defaultValue={job_keywords} onChange={(e)=>setJobKeywords(e.target.value)} required />
                                                </div>
                                                
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Job Category <span className="error-msg-star">*</span></label>
                                                    <select className="form-control" value={job_category || ""} onChange={(e)=>setJobCategory(e.target.value)} name="job_categories_id" id="job_categories_id" required>
                                                        <option value="">-- Select Job Category --</option>
                                                        { all_job_category.map((item_job_category) =>
                                                        <option value={item_job_category.id} key={item_job_category.id}>{item_job_category.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Job Locations <span className="error-msg-star">*</span> <p style={{fontSize:"10px", color:"red"}}>(Press Ctrl key for select multiple)</p></label>
                                                    <select multiple className="form-control select"  value={job_locations_array || ""} onChange={(e)=>setJobLocations(e.target.value)} name="job_locations_id[]" id="job_locations_id"   data-mdb-filter="true" required>
                                                        <option value="">-- Select Job Locations --</option>
                                                        { all_cities.map((item_cities) =>
                                                        <option value={item_cities.id} key={item_cities.id}>{item_cities.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                
                                                <div className="form-group col-md-8">
                                                    <label htmlFor="Goal Score">English Required <span className="error-msg-star">*</span></label><br/>
                                                
                                                    <input type="radio" name="english_required_id" value="No English" checked={english_required == 'No English'? true: false} onChange={(e)=>setEnglishRequired(e.target.value)} /> No English  &nbsp; &nbsp; &nbsp;
                                                
                                                    <input type="radio" name="english_required_id" value="Basic English" checked={english_required == 'Basic English'? true: false} onChange={(e)=>setEnglishRequired(e.target.value)} /> Basic English  &nbsp; &nbsp; &nbsp;
                                                
                                                    <input type="radio" name="english_required_id" value="Good English" checked={english_required == 'Good English'? true: false} onChange={(e)=>setEnglishRequired(e.target.value)} /> Good English  &nbsp; &nbsp; &nbsp;

                                                    <input type="radio" name="english_required_id" value="Excellent/Fluent English" checked={english_required == 'Excellent/Fluent English'? true: false} onChange={(e)=>setEnglishRequired(e.target.value)} /> Excellent/Fluent English
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="Goal Score">Working or Not <span className="error-msg-star">*</span></label><br/>
                                                    <input type="radio" name="working_or_not" value="Yes" checked={working_or_not == 'Yes'? true: false} onChange={(e)=>setWorkingorNot(e.target.value)}  /> Yes &nbsp; &nbsp;&nbsp; &nbsp;
                                                    <input type="radio" name="working_or_not" value="No" checked={working_or_not == 'No'? true: false} onChange={(e)=>setWorkingorNot(e.target.value)}/> No
                                                </div>
                                            </div>

                                        </div>

                                        <div className="modal-footer">
                                            <a href="#">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                            </a>
                                            <button  className="btn btn-success" id="submit-btn" onClick={updateDetails}>Update Profile</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </section>


            </main>

            <Footer />

            <div id="scroll-to-top" className="scroll-to-top"><span className="icofont-rounded-up"></span></div>

  
            <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
            <MobileMenu />
            </aside>

        </div>
    )

}

export default EditCandidateDetails;