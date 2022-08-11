import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

import AOS from "aos";

const JobDetails = () =>{

  const [companyDetails, setCompanyDetails] = useState([]);

  const params = useParams();

  useEffect(() => {
    document.title = 'BVC | Company-Details';

    AOS.init();
    AOS.refresh();

    getCompanyDetails();

  },[]);


  const getCompanyDetails = async()=>{
    let result = await fetch(`http://localhost:12345/employer-deatils/${params.id}`);
    result = await result.json();

    setCompanyDetails(result);
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
                  <h2 className="title">Company Details</h2>
                  <nav className="breadcrumb-area">
                    <ul className="breadcrumb justify-content-center">
                      <li><a href="/">Home</a></li>
                      <li className="breadcrumb-sep">/</li>
                      <li>Company Details</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {
          companyDetails.map(item_company =>
        <section className="job-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="job-details-wrap">
                  <div className="job-details-info">
                    <div className="thumb">
                      { item_company.company_logo ? <img src={"http://localhost:3000/"+item_company.company_logo} alt={item_company.company_name}  style={imageStyle}/> : 
                        <img src="/assets/img/blog/no-image.jpg" alt="ssImage" style={imageStyle}/>
                      }
                      
                    </div>
                    <div className="content">
                      <h4 className="title">{item_company.company_name}</h4>
                      <h5 className="sub-title">{item_company.domain_name}</h5>
                      <ul className="info-list">
                        <li><i className="icofont-location-pin"></i> {item_company.city_name}, {item_company.state_name}</li>
                        <li><i className="icofont-phone"></i> {item_company.mobile_number}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="job-details-price">
                    <h5>Website : {item_company.company_website}</h5>
                    <h5>Company Views : {item_company.company_views}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="job-details-item">
                  <div className="content">
                    <h4 className="title">Description</h4>
                    <p className="desc"dangerouslySetInnerHTML={{__html:item_company.about_company}}></p>
                  </div>
                  {/* <div className="content">
                    <h4 className="title">Responsibilities</h4>
                    <ul className="job-details-list">
                      <li><i className="icofont-check"></i> Developing custom themes (WordPress.org & ThemeForest Standards)</li>
                      <li><i className="icofont-check"></i> Creating reactive website designs</li>
                      <li><i className="icofont-check"></i> Working under strict deadlines</li>
                      <li><i className="icofont-check"></i> Develop page speed optimized themes</li>
                    </ul>
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
                            <td className="table-name">Company Domain</td>
                            <td className="dotted">:</td>
                            <td data-text-color="#03a84e">{item_company.domain_name}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Email</td>
                            <td className="dotted">:</td>
                            <td>{item_company.email}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Mobile</td>
                            <td className="dotted">:</td>
                            <td>{item_company.mobile_number}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Company Phone</td>
                            <td className="dotted">:</td>
                            <td>{item_company.company_phone}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Alternate Number</td>
                            <td className="dotted">:</td>
                            <td>{item_company.alternate_number}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Company Address</td>
                            <td className="dotted">:</td>
                            <td>{item_company.company_address}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Established Year</td>
                            <td className="dotted">:</td>
                            <td>{item_company.company_established_year}</td>
                          </tr>
                          <tr>
                            <td className="table-name">Team Member</td>
                            <td className="dotted">:</td>
                            <td>{item_company.team_member}</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="widget-item">
                    <div className="widget-title">
                      <h3 className="title">Share With</h3>
                    </div>
                    <div className="social-icons">
                      <a href={item_company.facebook_links} rel="noopener" target="_blank"><i className="icofont-facebook"></i></a>
                      <a href={item_company.twitter_links} rel="noopener" target="_blank"><i className="icofont-twitter"></i></a>
                      <a href={item_company.skype_links} rel="noopener" target="_blank"><i className="icofont-skype"></i></a>
                      <a href={item_company.pinterest_links} rel="noopener" target="_blank"><i className="icofont-pinterest"></i></a>
                    </div>
                  </div>
                                    
                </div>
              </div>
            </div>
          </div>
        </section>
        )
      }
        
      </main>

      <Footer />

    
      <div id="scroll-to-top" className="scroll-to-top"><span className="icofont-rounded-up"></span></div>

    
      <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabindex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
        <MobileMenu />
      </aside>
  
    </div>
  );
}

export default JobDetails;