import React, { useEffect, useState } from "react";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AboutUs = () =>{

  /* fetch about us details */
  const [aboutDetails, setAboutDetails] = useState([]);
  const [countJobCandidateCompany, setCountJobCandidateCompany] = useState([]);
  const [companyLogo, setCompanyLogo] = useState([]);

  useEffect(() => {
    document.title = 'BVC | About Us';

    AOS.init();
    AOS.refresh();

    getAboutUs();
    getCountJobCandidateCompany();
    getCompanyLogo();

  },[]);


  const getAboutUs = async() => {
    const tbl = 'aboutuses';
    let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
    result = await result.json();

    setAboutDetails(result);
  }

  const getCountJobCandidateCompany = async()=> {
    
    let result = await fetch(`http://localhost:12345/count-job-candidate-employer`);
    result = await result.json();
    //console.log(result[0]);
    setCountJobCandidateCompany(result);
  }

  const getCompanyLogo = async()=>{
    let result = await fetch(`http://localhost:12345/all-employers-data`);
    result = await result.json();
    //console.log(result[0]);
    setCompanyLogo(result);
  }


  const imageStyle = {
    width: "100%",
    maxHeight: "400px",
    marginBottom: "20px"
  };

  return (
    <div className="wrapper">

      <Header />
      
      <main className="main-content">
        
        <div className="page-header-area sec-overlay sec-overlay-black contact-us-bck-img">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title">About Us</h2>
                  <nav className="breadcrumb-area">
                    <ul className="breadcrumb justify-content-center">
                      <li><a href="/">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>About Us</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          ((aboutDetails.length>0) && (aboutDetails[0].name!=='No record found') ? aboutDetails.map((item, index) => 
        <section className="about-area about-default-wrapper">
          <div className="container">
            <div className="about-item">
              <div className="row">
                                
                <div className="col-lg-12 ">
                  <div className="about-content" data-aos="fade-down" data-aos-duration="1000">
                    <h4 className="sub-title">// About BVC</h4>
                    <h3 className="title">{item.title}</h3>

                    { item.image ? <img src={"http://localhost:3000/"+item.image} alt={item.title} style={imageStyle}/> : null}

                    <p className="desc" style={{textAlign:"justify"}} dangerouslySetInnerHTML={{__html:item.description}}></p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        ): null)
      }
        
        <section className="funfact-area bg-color-gray">
          <div className="container">
            <div className="row no-gutter">
              <div className="col-12">
                <div className="funfact-content-wrap">
                  <div className="funfact-col">
                    
                    <div className="funfact-item" data-aos="fade-down">
                      <h2 className="counter-number"><span className="counter" data-counterup-delay="50">
                      {
                          (countJobCandidateCompany.map((item_total_job, index) =>
                              item_total_job.total_job
                          ))
                      }
                      </span></h2>
                      <h6 className="counter-title">Total Jobs</h6>
                    </div>
                    
                  </div>
                  <div className="funfact-col">
                    
                    <div className="funfact-item" data-aos="fade-down" data-aos-duration="1500">
                      <h2 className="counter-number"><span className="counter" data-counterup-delay="50">
                      {
                          (countJobCandidateCompany.map((item_total_job, index) =>
                              item_total_job.total_candidate
                          ))
                      }  
                      </span></h2>
                      <h6 className="counter-title">Candidates</h6>
                    </div>
                    
                  </div>
                  <div className="funfact-col">
                    
                    <div className="funfact-item" data-aos="fade-down" data-aos-duration="1700">
                      <h2 className="counter-number"><span className="counter" data-counterup-delay="50">
                      {
                          (countJobCandidateCompany.map((item_total_job, index) =>
                              item_total_job.total_candidate
                          ))
                      }   
                      </span></h2>
                      <h6 className="counter-title">Resume</h6>
                    </div>
                    
                  </div>
                  <div className="funfact-col">
                    
                    <div className="funfact-item" data-aos="fade-down" data-aos-duration="1900">
                      <h2 className="counter-number"><span className="counter" data-counterup-delay="50">
                      {
                          (countJobCandidateCompany.map((item_total_job, index) =>
                              item_total_job.total_employer
                          ))
                      }  
                      </span></h2>
                      <h6 className="counter-title">Compnay’s</h6>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        

        
        <section className="team-area team-inner-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center" data-aos="fade-down">
                  <h3 className="title">Best Candidate</h3>
                  <div className="desc">
                    <p>Many desktop publishing packages and web page editors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-down">
              <div className="col-sm-6 col-lg-4 col-xl-3">
                
                <div className="team-item">
                  <div className="thumb">
                    <a href="candidate-details.html">
                      <img src="assets/img/team/1.jpg" width="160" height="160" alt="bvc"/>
                    </a>
                  </div>
                  <div className="content">
                    <h4 className="title"><a href="candidate-details.html">Lauran Benitez</a></h4>
                    <h5 className="sub-title">Web Designer</h5>
                    <div className="rating-box">
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                    </div>
                    <p className="desc">CSS3, HTML5, Javascript Bootstrap, Jquery</p>
                    <a className="btn-theme btn-white btn-sm" href="candidate-details.html">View Profile</a>
                  </div>
                  <div className="bookmark-icon"><img src="assets/img/icons/bookmark1.png" alt="bvc"/></div>
                  <div className="bookmark-icon-hover"><img src="assets/img/icons/bookmark2.png" alt="bvc"/></div>
                </div>
                
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                
                <div className="team-item">
                  <div className="thumb">
                    <a href="candidate-details.html">
                      <img src="assets/img/team/2.jpg" width="160" height="160" alt="bvc"/>
                    </a>
                  </div>
                  <div className="content">
                    <h4 className="title"><a href="candidate-details.html">Valentine Anders</a></h4>
                    <h5 className="sub-title">UI/UX Designer</h5>
                    <div className="rating-box">
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                    </div>
                    <p className="desc">CSS3, HTML5, Javascript Bootstrap, Jquery</p>
                    <a className="btn-theme btn-white btn-sm" href="candidate-details.html">View Profile</a>
                  </div>
                  <div className="bookmark-icon"><img src="assets/img/icons/bookmark1.png" alt="bvc"/></div>
                  <div className="bookmark-icon-hover"><img src="assets/img/icons/bookmark2.png" alt="bvc"/></div>
                </div>
                
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                
                <div className="team-item">
                  <div className="thumb">
                    <a href="candidate-details.html">
                      <img src="assets/img/team/3.jpg" width="160" height="160" alt="bvc"/>
                    </a>
                  </div>
                  <div className="content">
                    <h4 className="title"><a href="candidate-details.html">Shakia Aguilera</a></h4>
                    <h5 className="sub-title">Web Designer</h5>
                    <div className="rating-box">
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                    </div>
                    <p className="desc">CSS3, HTML5, Javascript Bootstrap, Jquery</p>
                    <a className="btn-theme btn-white btn-sm" href="candidate-details.html">View Profile</a>
                  </div>
                  <div className="bookmark-icon"><img src="assets/img/icons/bookmark1.png" alt="bvc"/></div>
                  <div className="bookmark-icon-hover"><img src="assets/img/icons/bookmark2.png" alt="bvc"/></div>
                </div>
                
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3">
                
                <div className="team-item">
                  <div className="thumb">
                    <a href="candidate-details.html">
                      <img src="assets/img/team/4.jpg" width="160" height="160" alt="bvc"/>
                    </a>
                  </div>
                  <div className="content">
                    <h4 className="title"><a href="candidate-details.html">Assunta Manson</a></h4>
                    <h5 className="sub-title">App. Developer</h5>
                    <div className="rating-box">
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                    </div>
                    <p className="desc">CSS3, HTML5, Javascript Bootstrap, Jquery</p>
                    <a className="btn-theme btn-white btn-sm" href="candidate-details.html">View Profile</a>
                  </div>
                  <div className="bookmark-icon"><img src="assets/img/icons/bookmark1.png" alt="bvc"/></div>
                  <div className="bookmark-icon-hover"><img src="assets/img/icons/bookmark2.png" alt="bvc"/></div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        

        
        <section className="sec-overlay sec-overlay-theme bg-img" data-bg-img="assets/img/photos/bg1.webp">
          <div className="container pt--0 pb--0">
            <div className="row justify-content-center divider-style1">
              <div className="col-lg-7">
                <div className="divider-content text-center">
                  <h4 className="sub-title" data-aos="fade-down">Trial Version Available</h4>
                  <h2 className="title" data-aos="fade-down">Download Our Mobile App. <br/>You Can Ready Resume & Apply Job.</h2>
                  <div className="divider-btn-group">
                    <a className="btn-divider" data-aos="fade-down" href="page-not-found.html">
                      <img src="assets/img/photos/google-play.png" width="201" height="63" className="icon" alt="bvc"/>
                    </a>
                    <a className="btn-divider btn-divider-app-store" data-aos="fade-down" href="page-not-found.html">
                      <img src="assets/img/photos/mac-os.png" width="201" height="63" className="icon" alt="bvc"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-layer-style1"></div>
          <div className="bg-layer-style2"></div>
        </section>
        

        
        <section className="testimonial-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center" data-aos="fade-down">
                  <h3 className="title">Our Happy Clients</h3>
                  <div className="desc">
                    <p>Many desktop publishing packages and web page editors</p>
                  </div>
                </div>
              </div>
            </div>

            <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
            <div className="row">
              <div className="col-12" data-aos="fade-down">
                <div className="swiper testi-slider-container">
                  <div className="swiper-wrapper">

                    <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="testimonial-item testimonial-style2-item">
                        <div className="testi-inner-content">
                          <div className="testi-author">
                            <div className="testi-thumb">
                              <img src="assets/img/testimonial/1.jpg" width="75" height="75" alt="bvc"/>
                            </div>
                            <div className="testi-info">
                              <h4 className="name">Roselia Hamets</h4>
                              <span className="designation">Hiring Manager</span>
                            </div>
                          </div>
                          <div className="testi-content">
                            <p className="desc">It is a long established fact that reader will distracted the readable content page looking at its layout point using that has more-or-less normal distribution of letters opposed using content making.</p>
                            <div className="rating-box">
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                            </div>
                            <div className="testi-quote"><img src="assets/img/icons/quote1.png" alt="bvc"/></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="testimonial-item testimonial-style2-item">
                        <div className="testi-inner-content">
                          <div className="testi-author">
                            <div className="testi-thumb">
                              <img src="assets/img/testimonial/2.jpg" width="75" height="75" alt="bvc"/>
                            </div>
                            <div className="testi-info">
                              <h4 className="name">Assunta Manson</h4>
                              <span className="designation">Hiring Manager</span>
                            </div>
                          </div>
                          <div className="testi-content">
                            <p className="desc">It is a long established fact that reader will distracted the readable content page looking at its layout point using that has more-or-less normal distribution of letters opposed using content making.</p>
                            <div className="rating-box">
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                            </div>
                            <div className="testi-quote"><img src="assets/img/icons/quote1.png" alt="bvc"/></div>
                          </div>
                        </div>
                      </div>  
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="testimonial-item testimonial-style2-item">
                        <div className="testi-inner-content">
                          <div className="testi-author">
                            <div className="testi-thumb">
                              <img src="assets/img/testimonial/3.jpg" width="75" height="75" alt="bvc"/>
                            </div>
                            <div className="testi-info">
                              <h4 className="name">Amira Shepard</h4>
                              <span className="designation">Hiring Manager</span>
                            </div>
                          </div>
                          <div className="testi-content">
                            <p className="desc">It is a long established fact that reader will distracted the readable content page looking at its layout point using that has more-or-less normal distribution of letters opposed using content making.</p>
                            <div className="rating-box">
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                            </div>
                            <div className="testi-quote"><img src="assets/img/icons/quote1.png" alt="bvc"/></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="swiper-slide">  
                      <div className="testimonial-item testimonial-style2-item">
                        <div className="testi-inner-content">
                          <div className="testi-author">
                            <div className="testi-thumb">
                              <img src="assets/img/testimonial/4.jpg" width="75" height="75" alt="bvc"/>
                            </div>
                            <div className="testi-info">
                              <h4 className="name">Joshua George</h4>
                              <span className="designation">Hiring Manager</span>
                            </div>
                          </div>
                          <div className="testi-content">
                            <p className="desc">It is a long established fact that reader will distracted the readable content page looking at its layout point using that has more-or-less normal distribution of letters opposed using content making.</p>
                            <div className="rating-box">
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                            </div>
                            <div className="testi-quote"><img src="assets/img/icons/quote1.png" alt="bvc"/></div>
                          </div>
                        </div>
                      </div>  
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="testimonial-item testimonial-style2-item">
                        <div className="testi-inner-content">
                          <div className="testi-author">
                            <div className="testi-thumb">
                              <img src="assets/img/testimonial/5.jpg" width="75" height="75" alt="bvc"/>
                            </div>
                            <div className="testi-info">
                              <h4 className="name">Rosie Patton</h4>
                              <span className="designation">Hiring Manager</span>
                            </div>
                          </div>
                          <div className="testi-content">
                            <p className="desc">It is a long established fact that reader will distracted the readable content page looking at its layout point using that has more-or-less normal distribution of letters opposed using content making.</p>
                            <div className="rating-box">
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                            </div>
                            <div className="testi-quote"><img src="assets/img/icons/quote1.png" alt="bvc"/></div>
                          </div>
                        </div>
                      </div>  
                    </div>
                    </SwiperSlide>

                  </div>

                  
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>

            </Swiper>

          </div>
        </section>
        

        
        <div className="brand-logo-area">
          <div className="container pt--0 pb--0" data-aos="fade-down">
            <div className="row">
              <div className="col-12">
                <div className="brand-logo-content" >

                  <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={6}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>

                  <div className="swiper brand-logo-slider-container">
                    <div className="swiper-wrapper">
                      {
                        ((companyLogo.length>0) && (companyLogo[0]!=='No record found') ? companyLogo.map((item, index)=>
                        
                          <SwiperSlide>
                            <div className="swiper-slide">
                              
                              <div className="brand-logo-item">
                                <img src={"http://localhost:3000/"+item.company_logo} alt={item.company_name}/>
                              </div>
                              
                            </div>
                          </SwiperSlide>
                        ) : null)
                      }
              
                    </div>
                  </div>
                  
                  {/* <div className="swiper-btn-wrap">
                    <div className="brand-swiper-btn-prev">
                      <i className="icofont-long-arrow-left"></i>
                    </div>
                    <div className="brand-swiper-btn-next">
                      <i className="icofont-long-arrow-right"></i>
                    </div>
                  </div> */}

                  </Swiper>


                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>

      <Footer />

      <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
        <MobileMenu />
      </aside>

    </div>
  )
}

export default AboutUs;