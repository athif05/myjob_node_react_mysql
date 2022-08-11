import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import Moment from 'moment'; //use for convert date format.

import AOS from "aos";

const JobDetails = () =>{

  const [jobDetails, setJobDetails] = useState([]);
  const [qualifications, setQualifications] = useState([]);

  const params = useParams();

  useEffect(() => {
    document.title = 'BVC | Job-Details';

    AOS.init();
    AOS.refresh();

    getJobDetails();

  },[]);


  const getJobDetails = async()=>{
    let result = await fetch(`http://localhost:12345/job-details/${params.id}`);
    result = await result.json();

    setJobDetails(result);

    const qualification_ids = result[0].qualification_ids.split(',');

    let result_qualifications = await fetch(`http://localhost:12345/job-qualifications/${qualification_ids}`);
    result_qualifications = await result_qualifications.json();
    
    setQualifications(result_qualifications);
  }

  const imageStyle = {
    width: "130px",
    Height: "130px"
  }

  return (
    <div className="wrapper">
  
      <Header />
  
      <main className="main-content">
        
        <div className="page-header-area sec-overlay sec-overlay-black jobs-bck-img">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title">Job Details</h2>
                  <nav className="breadcrumb-area">
                    <ul className="breadcrumb justify-content-center">
                      <li><a href="/">Home</a></li>
                      <li className="breadcrumb-sep">/</li>
                      <li>Job Details</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {
          ((jobDetails.length>0) && (jobDetails[0].name!=='No record found') ? jobDetails.map((item_job, index)=>
        <section className="job-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="job-details-wrap">
                  <div className="job-details-info">
                    <div className="thumb">
                      { item_job.company_logo ? <img src={"http://localhost:3000/"+item_job.company_logo} alt={item_job.job_title}  style={imageStyle}/> : 
                        <img src="/assets/img/blog/no-image.jpg" alt="ssImage" style={imageStyle}/>
                      }
                    </div>
                    <div className="content">
                      <h4 className="title">{item_job.job_title}</h4>
                      <h5 className="sub-title">{item_job.company_name}</h5>
                      <ul className="info-list">
                        <li><i className="icofont-location-pin"></i> {item_job.job_location_name}, {item_job.state_name}</li>
                        <li><i className="icofont-phone"></i> {item_job.company_mobile_number}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="job-details-price">
                    <h4 className="title">{item_job.salary} INR <span>/monthly</span></h4>
                    <button type="button" className="btn-theme">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="job-details-item">
                  <div className="content">
                    <h4 className="title">Description</h4>
                    <p className="desc" dangerouslySetInnerHTML={{__html:item_job.job_description}}></p>
                  </div>
                  <div className="content">
                    <h4 className="title">Responsibilities</h4>
                    <p className="desc" dangerouslySetInnerHTML={{__html:item_job.job_responsibilities}}></p>
                    {/* <ul className="job-details-list">
                      <li><i className="icofont-check"></i> Developing custom themes (WordPress.org & ThemeForest Standards)</li>
                      <li><i className="icofont-check"></i> Creating reactive website designs</li>
                      <li><i className="icofont-check"></i> Working under strict deadlines</li>
                      <li><i className="icofont-check"></i> Develop page speed optimized themes</li>
                    </ul> */}
                  </div>
                  <div className="content">
                    <h4 className="title">Requirements</h4>
                    <p className="desc" dangerouslySetInnerHTML={{__html:item_job.job_requirements}}></p>
                    {/* <ul className="job-details-list">
                      <li><i className="icofont-check"></i> Having approved theme/s on ThemeForest will be given high preference.</li>
                      <li><i className="icofont-check"></i> Strong knowledge of WordPress Theme Standards</li>
                      <li><i className="icofont-check"></i> Ability to convert HTML templates into fully functional WordPress themes.</li>
                      <li><i className="icofont-check"></i> Good knowledge in O OP PHP and front-end stuffs like HTML, CSS, JS, jQuery, etc.</li>
                      <li><i className="icofont-check"></i> Moderate knowledge in WordPress Core APIs like options, metadata, REST, hooks, settings, etc.</li>
                      <li><i className="icofont-check"></i> Ability to debug and fix bugs arising from other developer’s code.</li>
                      <li><i className="icofont-check"></i> Sense of humor</li>
                      <li><i className="icofont-check"></i> Hard worker and passionate – we are growing super fast</li>
                    </ul> */}
                  </div>
                  <div className="content">
                    <h4 className="title">Candidate's Requirements</h4>
                    <p className="desc" dangerouslySetInnerHTML={{__html:item_job.candidate_requirements}}></p>
                  </div>
                  <div className="content">
                    <h4 className="title">Skills</h4>
                    <p className="desc" dangerouslySetInnerHTML={{__html:item_job.skills}}></p>
                  </div>
                  <div className="content">
                    <h4 className="title">Working Hours</h4>
                    <ul className="job-details-list">
                      <li><i className="icofont-check"></i> {item_job.working_hours}</li>
                      <li><i className="icofont-check"></i> {item_job.working_day_name}</li>
                    </ul>
                  </div>
                  {/* <div className="content">
                    <h4 className="title">Benefits</h4>
                    <ul className="job-details-list">
                      <li><i className="icofont-check"></i> Work in a flat organization where your voice is always heard.</li>
                      <li><i className="icofont-check"></i> Provident fund.</li>
                      <li><i className="icofont-check"></i> Gratuity.</li>
                      <li><i className="icofont-check"></i> Medical Fund.</li>
                      <li><i className="icofont-check"></i> Having Corporate deals with multiple Hospitals.</li>
                      <li><i className="icofont-check"></i> Performance bonus.</li>
                      <li><i className="icofont-check"></i> Increment: Yearly.</li>
                      <li><i className="icofont-check"></i> Festival Bonus: 2 (Yearly)</li>
                      <li><i className="icofont-check"></i> Lunch Facilities: Full Subsidize.</li>
                      <li><i className="icofont-check"></i> Unlimited Tea, Coffee & Snacks.</li>
                      <li><i className="icofont-check"></i> Annual tour.</li>
                      <li><i className="icofont-check"></i> Team Outing.</li>
                      <li><i className="icofont-check"></i> Marriage Bonus and Marriage Leave.</li>
                      <li><i className="icofont-check"></i> Paternity and Maternity Leave.</li>
                      <li><i className="icofont-check"></i> Yearly Family Tour.</li>
                      <li><i className="icofont-check"></i> Knowledge Sharing Session.</li>
                      <li><i className="icofont-check"></i> Leave Encashment Facilities.</li>
                      <li><i className="icofont-check"></i> Work with a vibrant team and amazing products.</li>
                      <li><i className="icofont-check"></i> Table Tennis(Ping Pong) :table_tennis_paddle_and_ball:</li>
                      <li><i className="icofont-check"></i> Training and learning materials to improve skills.</li>
                      <li><i className="icofont-check"></i> Last but not the least, WorldClass Work Environment.</li>
                    </ul>
                  </div>
                  <div className="content">
                    <h4 className="title">Statement</h4>
                    <p className="desc">Finate is committed to creating the happiest company working for and is proud to provide equal opportunity to all. All the qualified applicants will receive consideration for employment without regard to race, color, ancestry, religion, sex,  sexual orientation, age, citizenship, marital status, disability, gender identity, or any other basis protected by federal, state, or local law.</p>
                    <a className="btn-apply-now" href="contact.html">Apply Now <i className="icofont-long-arrow-right"></i></a>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="job-sidebar">
                  <div className="widget-item">
                    <div className="widget-title">
                      <h3 className="title">Summery</h3>
                    </div>
                    <div className="summery-info">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="table-name">Job Type</td>
                            <td className="dotted">:</td>
                            <td data-text-color="#03a84e"> {item_job.types_of_job_name}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Category</td>
                            <td className="dotted">:</td>
                            <td>{item_job.main_job_category}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Job Posted</td>
                            <td className="dotted">:</td>
                            <td>{Moment(item_job.created_at).format('DD-MM-YYYY')}</td>
                          </tr>
                          <tr>
                            <td className="table-name">CTC</td>
                            <td className="dotted">:</td>
                            <td>{item_job.ctc} INR / Monthly</td>
                          </tr>
                          <tr>
                            <td className="table-name">Experience</td>
                            <td className="dotted">:</td>
                            <td>
                              {item_job.experience_required}
                              { (item_job.experience_required==='Experience') ? <span><br/>Min: {item_job.min_experience_required}<br/>Max: {item_job.max_experience_required}</span> : null}
                            </td>
                          </tr>
                          <tr>
                            <td className="table-name">Gender</td>
                            <td className="dotted">:</td>
                            <td>{item_job.gender}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Qualification</td>
                            <td className="dotted">:</td>
                            <td>
                              { qualifications.map((item_qual, index) => 
                                <span>{item_qual.name}
                                {(qualifications.length > index+1) ? ", " : null}
                                </span>
                              )}                          
                            </td>
                          </tr>
                          <tr>
                            <td className="table-name">No of Opening</td>
                            <td className="dotted">:</td>
                            <td>{item_job.no_of_opening}</td>
                          </tr>
                          <tr>
                            <td className="table-name">English ?</td>
                            <td className="dotted">:</td>
                            <td>{item_job.english_required}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Applied</td>
                            <td className="dotted">:</td>
                            <td>{item_job.job_applied} Applicant</td>
                          </tr>
                          {/* <tr>
                            <td className="table-name">Application End</td>
                            <td className="dotted">:</td>
                            <td data-text-color="#ff6000">20 November, 2021</td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* <div className="widget-item">
                    <div className="widget-title">
                      <h3 className="title">Share With</h3>
                    </div>
                    <div className="social-icons">
                      <a href="https://www.facebook.com/" rel="noopener"><i className="icofont-facebook"></i></a>
                      <a href="https://twitter.com/" rel="noopener"><i className="icofont-twitter"></i></a>
                      <a href="https://www.skype.com/" rel="noopener"><i className="icofont-skype"></i></a>
                      <a href="https://www.pinterest.com/" rel="noopener"><i className="icofont-pinterest"></i></a>
                      <a href="https://dribbble.com/" rel="noopener"><i className="icofont-dribbble"></i></a>
                    </div>
                  </div> */}
                  {/* <div className="widget-item widget-tag">
                    <div className="widget-title">
                      <h3 className="title">Tags:</h3>
                    </div>
                    <div className="widget-tag-list">
                      <a href="/jobs">Cleaning</a>
                      <a href="/jobs">Cleaning Agency</a><br/>
                      <a href="/jobs">Business</a>
                      <a href="/jobs">Cleaning</a>
                      <a href="/jobs">Business</a>
                      <a href="/jobs">Cleaning</a>
                      <a href="/jobs">Cleaning Agency</a>
                      <a href="/jobs">Business</a>
                      <a href="/jobs">Cleaning Agency</a>
                      <a href="/jobs">Cleaning</a>
                      <a href="/jobs">Business</a>
                      <a href="/jobs">Business</a>
                      <a href="/jobs">Cleaning Agency</a>
                      <a href="/jobs">Business</a>
                    </div>
                  </div> */}
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
  );
}

export default JobDetails;