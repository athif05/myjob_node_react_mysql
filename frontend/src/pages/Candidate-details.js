import React, { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import Moment from 'moment'; //use for convert date format.

const CandidateDetails = () => {

  const [candidateDetails, setCandidateDetails] = useState('');
  const [candidateQualifications, setCandidateQualifications] = useState([]);
  const [candidateWorkExperiences, setCandidateWorkExperiences] = useState([]);

  const params = useParams();

  const [skills_name, setSkills_name] = useState([]);


  useEffect(()=>{
    getCandidateDetails();
  });


  const getCandidateDetails = async()=>{
    let result = await fetch(`http://localhost:12345/candidate-details/${params.id}`);
    result = await result.json();
    
    var skillsName=result[0].skills;
    skillsName = skillsName.split(',');

    setSkills_name(skillsName);

    setCandidateDetails(result);


    let resultQualifications = await fetch(`http://localhost:12345/candidate-qualifications/${params.id}`);
    resultQualifications = await resultQualifications.json();
    setCandidateQualifications(resultQualifications);


    let resultWorkExperiences = await fetch(`http://localhost:12345/candidate-work-experience/${params.id}`);
    resultWorkExperiences = await resultWorkExperiences.json();
    setCandidateWorkExperiences(resultWorkExperiences);
  }


  const imageStyle = {
    width: "130px",
    Height: "130px"
  }


    return (
    
      <div className="wrapper">

        <Header />
      
        {
          ((candidateDetails.length>0) && (candidateDetails[0].name!=='No record found') ? candidateDetails.map((itemCandidate)=>
        <main className="main-content">
          
          <div className="page-header-area sec-overlay sec-overlay-black blog-bck-img">
            <div className="container pt--0 pb--0">
              <div className="row">
                <div className="col-12">
                  <div className="page-header-content">
                    <h2 className="title">{itemCandidate.name}</h2>
                    <nav className="breadcrumb-area">
                      <ul className="breadcrumb justify-content-center">
                        <li><a href="/">Home</a></li>
                        <li className="breadcrumb-sep">//</li>
                        <li>Candidate Details</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <section className="team-details-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="team-details-wrap">
                    <div className="team-details-info">
                      <div className="thumb">
                        { itemCandidate.image ? <img src={"http://localhost:3000/"+itemCandidate.image} alt={itemCandidate.name}  style={imageStyle}/> : 
                          <img src="/assets/img/blog/no-image.jpg" alt="ssImage" style={imageStyle}/>
                        }
                      </div>
                      <div className="content">
                        <h4 className="title">{itemCandidate.name}</h4>
                        <h5 className="sub-title">{itemCandidate.job_title}</h5>
                        <ul className="info-list">
                          <li><i className="icofont-location-pin"></i> {itemCandidate.citie_name}, {itemCandidate.state_name}</li>
                          <li><i className="icofont-phone"></i> {itemCandidate.mobile_number}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-details-btn">
                      <Link to={"/edit-candidate/"+itemCandidate.user_id}>
                        <button type="button" className="btn-theme" style={{"marginBottom":"10px"}}>Edit</button>
                      </Link>
                      <button type="button" className="btn-theme btn-light">Short List</button>
                      <button type="button" className="btn-theme">Download Resume</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7 col-xl-8">
                  <div className="team-details-item">
                    <div className="content">
                      <h4 className="title">Job Profile</h4>
                      <p className="desc" dangerouslySetInnerHTML={{__html:itemCandidate.describe_job_profile}}></p>
                    </div>
                    <div className="candidate-details-wrap">
                      <h4 className="content-title">Education</h4>
                      <div className="candidate-details-content">
                        {
                          ((candidateQualifications.length>0) && (candidateQualifications[0].name!=='No record found') ? candidateQualifications.map((itemQualifications) => 
                        <div className="content-item">
                          <h4 className="title text-uppercase">{itemQualifications.qualification} <span>//</span> <span>{itemQualifications.year}</span></h4>
                          <h5 className="sub-title">With {itemQualifications.marks} %</h5>
                          <p className="desc">{itemQualifications.college_university}</p>
                        </div>
                        ) : null )
                      }
                        
                      </div>
                    </div>
                    <div className="candidate-details-wrap">
                      <h4 className="content-title">Work & Experience</h4>
                      <div className="candidate-details-content">
                      {
                          ((candidateWorkExperiences.length>0) && (candidateWorkExperiences[0].name!=='No record found') ? candidateWorkExperiences.map((itemWorkExperiences) => 
                        <div className="content-item">
                          <h4 className="title">{itemWorkExperiences.designation_name} 
                          <span>//</span> 
                          <span>
                            {Moment(itemWorkExperiences.date_from).format('DD-MM-YYYY')} To {Moment(itemWorkExperiences.date_to).format('DD-MM-YYYY')}
                          </span>
                          </h4>
                          <h5 className="sub-title">{itemWorkExperiences.organization_name}</h5>
                          <p className="desc" dangerouslySetInnerHTML={{__html:itemWorkExperiences.describe_role}}></p>
                        </div>
                        ) : null )
                      }
                        
                        
                      </div>
                    </div>
                    <div className="content-list-wrap">
                      <div className="content mb--0">
                        <h4 className="title">Professional Skills</h4>
                        <ul className="team-details-list mb--0">                     
                          {
                            skills_name.map(name => 
                              <li><i className="icofont-check"></i>{name}</li>
                            )
                          }
                        </ul>
                      </div>
                      {/* <div className="content mb--0">
                        <h4 className="title">Software Skills</h4>
                        <ul className="team-details-list mb--0">
                          <li><i className="icofont-check"></i> Adobe Photoshop</li>
                          <li><i className="icofont-check"></i> Adobe Illustrator</li>
                          <li><i className="icofont-check"></i> Adobe XD</li>
                          <li><i className="icofont-check"></i> Figma</li>
                          <li><i className="icofont-check"></i> Sketch</li>
                          <li><i className="icofont-check"></i> InVision Studio</li>
                          <li><i className="icofont-check"></i> UXPin</li>
                          <li><i className="icofont-check"></i> MockFlow</li>
                          <li><i className="icofont-check"></i> Balsamiq</li>
                          <li><i className="icofont-check"></i> Microsoft Word</li>
                          <li><i className="icofont-check"></i> Microsoft Excel</li>
                          <li><i className="icofont-check"></i> Microsoft PowerPoint</li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xl-4">
                  <div className="team-sidebar">
                    <div className="widget-item">
                      <div className="widget-title">
                        <h3 className="title">Information</h3>
                      </div>
                      <div className="summery-info">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="table-name">Job Title</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.job_title}</td>
                            </tr>
                            <tr>
                              <td className="table-name">Job Keywords</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.job_keywords}</td>
                            </tr>
                            <tr>
                              <td className="table-name">Email</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.email}</td>
                            </tr>
                            <tr>
                              <td className="table-name">Alternate Number</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.alternate_number}</td>
                            </tr>
                            <tr>
                              <td className="table-name">Permanent Address</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.permanent_address}</td>
                            </tr>
                            <tr>
                              <td className="table-name">Current Address</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.current_address}</td>
                            </tr>
                            <tr>
                              <td className="table-name">State</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.state_name}</td>
                            </tr>
                            <tr>
                              <td className="table-name">City</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.citie_name}</td>
                            </tr>
                            <tr>
                              <td className="table-name">Work Experience</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.work_experience_name}</td>
                            </tr>
                            <tr>
                              <td className="table-name">Notice Period</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.notice_period}</td>
                            </tr>
                            <tr>
                              <td className="table-name">Last CTC</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.last_ctc}</td>
                            </tr>
                            <tr>
                              <td className="table-name">English</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.english_required_id}</td>
                            </tr>
                            <tr>
                              <td className="table-name">Working</td>
                              <td className="dotted">:</td>
                              <td>{itemCandidate.working_or_not}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* <div className="widget-item">
                      <div className="widget-title">
                        <h3 className="title">Share With</h3>
                      </div>
                      <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="icofont-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener"><i className="icofont-twitter"></i></a>
                        <a href="https://www.skype.com/" target="_blank" rel="noopener"><i className="icofont-skype"></i></a>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i className="icofont-pinterest"></i></a>
                        <a href="https://dribbble.com/" target="_blank" rel="noopener"><i className="icofont-dribbble"></i></a>
                      </div>
                    </div> */}

                    {/* <div className="widget-item widget-contact">
                      <div className="widget-title">
                        <h3 className="title">Contact Now</h3>
                      </div>
                      <div className="widget-contact-form">
                        <form id="contact-form" action="https://whizthemes.com/mail-php/raju/arden/mail.php" method="POST">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input className="form-control" type="text" name="con_name" placeholder="Name:"/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input className="form-control" type="email" name="con_email" placeholder="Email:"/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea className="form-control" name="con_message" placeholder="Message"></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group mb--0">
                                <button className="btn-theme d-block w-100" type="submit">Send Message</button>
                              </div>
                            </div>
                          </div>
                        </form>

                        
                        <div className="form-message"></div>
                      </div>
                    </div> */}

                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </main>
        ):null)
        }
  
        <Footer />

  
        <div id="scroll-to-top" className="scroll-to-top"><span className="icofont-rounded-up"></span></div>

  
        <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
          <MobileMenu />
        </aside>
      </div>
      
    )
}

export default CandidateDetails;