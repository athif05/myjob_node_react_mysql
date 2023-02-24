import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ReactTooltip from "react-tooltip";//use for show tooltip/title on href


const SingleEmployersDetails = () => {

    const divStyle={
        overflowX: 'scroll',
        width:'100%',
        float: 'left',
        position:'relative'
      };

    const [details, setDetails] = useState([]);
    const [post_job, setPostJobs] = useState([]);
    const [all_cities, setAllCities] = useState([]);

    const params = useParams();

    useEffect(() => {
        getDetails();
        getPostJobs();
        getAllCities();
    });

    /* fetch employer details by api */
    const getDetails = async () => {
        let result = await fetch(`http://localhost:12345/employer-deatils/${params.id}`);
        result = await result.json();

        setDetails(result);
    }

    /* fetch all jobs posted by employer */
    const getPostJobs = async ()=>{
        let result_job = await fetch(`http://localhost:12345/employer-post-jobs/${params.id}`);
        result_job = await result_job.json();
        setPostJobs(result_job);
    }

    /* call all cities, start here */
	const getAllCities = async () => {
		let result_city = await fetch(`http://localhost:12345/all-cities`);
		result_city = await result_city.json();
		setAllCities(result_city);
	}
	/* call all cities, end here */

    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper text-left">
                        {
                            ((details.length>0) && (details[0].name!=='No record found') ? details.map((item, index) =>
                        <div className="row">

                            <div className="col-lg-6 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Personal Information</h4>

                                        <div className="form-group">
                                            <label for="Name"><strong>Company Name : </strong>  {item.company_name}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Email : </strong> {item.email}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Company Website: </strong> {item.company_website}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Company Views: </strong> {item.company_views}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Company Phone : </strong> {item.company_phone}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Mobile Number : </strong> {item.mobile_number}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Alternate Number : </strong> {item.alternate_number}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Company Address : </strong>  {item.company_address}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>State Name : </strong> {item.state_name}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>City Name : </strong> {item.city_name}</label>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">About Company</h4>

                                        <div className="form-group">
                                            <label for="Name"><strong>About Company : </strong> {item.about_company}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Company Domain : </strong> {item.domain_name}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Company Established Year : </strong> {item.company_established_year}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Team Member : </strong> {item.team_member}</label>
                                        </div>

                                        <div className="form-group">
                                            <label for="Name"><strong>Company Logo : </strong>

                                                <br /><img src="assests/images/bvc-logo.png" alt="logo" />


                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Social Media</h4>

                                        { (item.facebook_links) ?
                                        <div className="form-group">
                                            <label for="Name"><strong>Facebook: </strong><a href={item.facebook_links} > {item.facebook_links}</a></label>
                                        </div>
                                        :<></>
                                        }

                                        { (item.twitter_links) ?
                                        <div className="form-group">
                                            <label for="Name"><strong>Twitter: </strong><a href={item.twitter_links} > {item.twitter_links}</a></label>
                                        </div>
                                        :<></>
                                        }

                                        { (item.skype_links) ?
                                        <div className="form-group">
                                            <label for="Name"><strong>Skype: </strong><a href={item.skype_links} > {item.skype_links}</a></label>
                                        </div>
                                        :<></>
                                        }

                                        { (item.pinterest_links) ?
                                        <div className="form-group">
                                            <label for="Name"><strong>Pinterest: </strong><a href={item.pinterest_links} > {item.pinterest_links}</a></label>
                                        </div>
                                        :<></>
                                        }

                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Job Post ({post_job.length})</h4>

                                        <div className="form-group">

                                            <div style={divStyle}>


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
                                                    </thead>

                                                    <tbody>
                                                        {
                                                            ((post_job.length>0) && (post_job[0].name!=='No record found') ? post_job.map((item_job, index) =>
                                                        <tr>
                                                            <td>
                                                                
                                                                <Link to={{pathname:`/job-details/`+item_job.id}} data-tip="Click Here For Show Job Details" className="text-decoration-none">{item_job.job_title}</Link>
                                                                <ReactTooltip />
                                                            </td>
                                                            <td>{item_job.salary}</td>
                                                            <td>{item_job.no_of_opening}</td>
                                                            <td>
                                                            {
                                                                //for loop
                                                                ((all_cities.length>0) && (all_cities[0].name!=='No record found') ? all_cities.map((item_city, index) => 
                                                                <>
                                                                {
                                                                    //if condition
                                                                    (item_city.id===item_job.job_location_id) ? item_city.name : null
                                                                }
                                                                </> )
                                                                :
                                                                null
                                                                )
                                                            }
                                                            </td>
                                                            <td>
                                                            {
                                                                //for loop
                                                                ((all_cities.length>0) && (all_cities[0].name!=='No record found') ? all_cities.map((item_city, index) => 
                                                                <>
                                                                {
                                                                    //if condition
                                                                    (item_city.id===item_job.city_id) ? item_city.name : null
                                                                }
                                                                </> )
                                                                :
                                                                null
                                                                )
                                                            }
                                                            </td>
                                                            <td>{item_job.job_types}</td>
                                                            <td>{item_job.working_days_name}</td>
                                                            <td>{item_job.experience_required}</td>
                                                            <td>{item_job.skills}</td>
                                                        </tr>)
                                                        :
                                                        <tr>
                                                            <td colSpan={10}>No job post by employer....</td>
                                                        </tr>)
                                                        }
                                                    </tbody>

                                                </table>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                        )
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

export default SingleEmployersDetails;