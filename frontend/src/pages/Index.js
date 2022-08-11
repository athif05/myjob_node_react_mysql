import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

import AOS from "aos";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Index = () => {

  const [jobLists, setJobLists] = useState([]);
  const [jobCategory, setJobCategory] = useState([]);
  const [jobCity, setJobCity] = useState([]);

  const [key_title, setKeyTitle] = useState('');
  const [city_id, setCityId] = useState('');
  const [category_id, setCategoryId] = useState('');

  const [jobCountsCategoryWise, setJobCountsCategoryWise] = useState([]);
  const [recentJobLists, setRecentJobLists] = useState([]);
  const [companyDetails, setCompanyDetails] = useState([]);

  //create navigation
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'BVC | Home';

    AOS.init();
    AOS.refresh();

    getJobLists();
    getJobCategory();
    getJobCountsCategoryWise();
    getRecentJobLists();

  },[]);

  /* fetch all Jobs, start here */
  const getJobLists = async () =>{
    let result = await fetch(`http://localhost:12345/all-active-jobs`);
    result = await result.json();
    setJobLists(result);
  }
  /* fetch all Jobs, end here */


  /* fetch cities and job category for search job, start here */
  const getJobCategory = async () =>{
    let result = await fetch(`http://localhost:12345/active-job-domain`);
    result = await result.json();

    setJobCategory(result);


    let result_cities = await fetch(`http://localhost:12345/jobs-cities`);
    result_cities = await result_cities.json();

    setJobCity(result_cities);
  }
  /* fetch cities and job category for search job, end here */


  /* fetch job category with job counts, start here */
  const getJobCountsCategoryWise = async () =>{
    let result_cities = await fetch(`http://localhost:12345/jobs-counts-with-category`);
    result_cities = await result_cities.json();

    setJobCountsCategoryWise(result_cities);
  }
  /* fetch job category with job counts, end here */

  
  const getRecentJobLists = async () =>{
    /* fetch recent added jobs, start here */
    let result = await fetch(`http://localhost:12345/recent-active-jobs-list`);
    result = await result.json();

    setRecentJobLists(result);
    /* fetch recent added jobs, end here */

    /* fetch recent added jobs, start here */
    let result_logo = await fetch(`http://localhost:12345/all-employers-data`);
    result_logo = await result_logo.json();
    setCompanyDetails(result_logo);
  }
  
  /* search jobs, start here */
  const searchHandler = async() => {
    navigate('/jobs/search?key_title='+key_title+'&city_id='+city_id+'&category_id='+category_id);
  }
  /* search jobs, end here */

  const imageStyle = {
    width: "75px",
    Height: "75px"
  };

  return(
    <>
  <div className="wrapper">

  <Header />

  <main className="main-content">
    
    <section className="home-slider-area">
      <div className="home-slider-container default-slider-container">
        <div className="home-slider-wrapper slider-default">
          <div className="slider-content-area home-page-bck-img">
            <div className="container pt--0 pb--0">
              <div className="slider-container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 col-lg-8">
                    <div className="slider-content">
                      <h2 className="title"><span className="counter" data-counterup-delay="80">
                      {((jobLists.length>0) && (jobLists[0].name!=='No record found')) ? jobLists.length : 0 }
                      </span> job available <br/>You can choose your dream job</h2>
                      <p className="desc">Find great job for build your bright career. Have many job in this plactform.</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="job-search-wrap">
                      <div className="job-search-form">
                        
                          <div className="row row-gutter-10">
                            <div className="col-lg-auto col-sm-6 col-12 flex-grow-1">
                              <div className="form-group">
                                <input type="text" name="key_title" id="key_title" value={key_title} onChange={(e)=>setKeyTitle(e.target.value)} className="form-control" placeholder="Job title or keywords"/>
                              </div>
                            </div>
                            <div className="col-lg-auto col-sm-6 col-12 flex-grow-1">
                              <div className="form-group">
                                <select name="city_id" id="city_id" value={city_id} onChange={(e)=>setCityId(e.target.value)} className="form-control">
                                  <option value=""> Choose City </option>
                                  { jobCity.map(item_city =>
                                    <option value={item_city.id}>{item_city.name}</option>
                                    )
                                  }
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-auto col-sm-6 col-12 flex-grow-1">
                              <div className="form-group">
                                <select name="category_id" id="category_id" value={category_id} onChange={(e)=>setCategoryId(e.target.value)} className="form-control">
                                  <option value=""> Choose Category </option>
                                  { jobCategory.map(item_main_category =>
                                    <option value={item_main_category.id}>{item_main_category.name}</option>
                                    )
                                  }
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-auto col-sm-6 col-12 flex-grow-1">
                              <div className="form-group">
                                <button type="button" className="btn-form-search" onClick={searchHandler}><i className="icofont-search-1"></i></button>
                              </div>
                            </div>
                          </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container pt--0 pb--0">
        <div className="row">
          <div className="col-12">
            <div className="play-video-btn">
              <a href="https://www.youtube.com/mcvqOUtcAJg" className="video-popup">
                <img src="/assets/img/icons/play.png" alt="myjob" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="home-slider-shape">
        <img className="shape1" data-aos="fade-down" data-aos-duration="1500" src="/assets/img/slider/vector1.png" width="270" height="234" alt="myjob"/>
        <img className="shape2" data-aos="fade-left" data-aos-duration="2000" src="/assets/img/slider/vector2.png" width="201" height="346" alt="myjob"/>
        <img className="shape3" data-aos="fade-right" data-aos-duration="2000" src="/assets/img/slider/vector3.png" width="276" height="432" alt="myjob"/>
        <img className="shape4" data-aos="flip-left" data-aos-duration="1500" src="/assets/img/slider/vector4.png" width="127" height="121" alt="myjob"/>
      </div>
    </section>
    
    <section className="job-category-area">
      <div className="container" data-aos="fade-down">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 className="title">Popular Category</h3>
              <div className="desc">
                <p>Many desktop publishing packages and web page editors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-gutter-20" >

          {
            ((jobCountsCategoryWise.length>0) ? jobCountsCategoryWise.map((item_cat_job) =>
          
          <div className="col-sm-6 col-lg-3">
            <div className="job-category-item">
              <div className="content">
                <h3 className="title"><a href={"jobs/"+item_cat_job.id}>{item_cat_job.name} <span>({item_cat_job.total_jobs})</span></a></h3>
              </div>
              <a className="overlay-link" href={"jobs/"+item_cat_job.id}>&nbsp;</a>
            </div>
          </div>
            ): null)
          }

        </div>
      </div>
    </section>
   
    <section className="recent-job-area bg-color-gray">
      <div className="container" data-aos="fade-down">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 className="title">Recent Job Circulars</h3>
              <div className="desc">
                <p>Many desktop publishing packages and web page editors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            recentJobLists.map((item_recent) =>
          <div className="col-md-6 col-lg-4">
            <div className="recent-job-item">
              <div className="company-info">
                <div className="logo">
                  <a href={"/company-details/"+item_recent.employer_id}>
                    { item_recent.company_logo ? <img src={"http://localhost:3000/"+item_recent.company_logo} alt={item_recent.job_title}  style={imageStyle}/> : 
                      <img src="/assets/img/blog/no-image.jpg" alt="ssImage" style={imageStyle}/>
                    }
                  </a>
                </div>
                <div className="content">
                  <h4 className="name"><a href={"/company-details/"+item_recent.employer_id}>{item_recent.company_name}</a></h4>
                  <p className="address">{item_recent.job_location_city_name}, {item_recent.job_location_state_name}</p>
                </div>
              </div>
              <div className="main-content">
                <h3 className="title"><a href={"/job-details/"+item_recent.id}>{item_recent.job_title}</a></h3>
                <h5 className="work-type">{item_recent.job_type_name}</h5>
                <p className="desc">{item_recent.skills}</p>
              </div>
              <div className="recent-job-info">
                <div className="salary">
                  <h4>{item_recent.salary} INR</h4>
                  <p>/monthly</p>
                </div>
                <a className="btn-theme btn-sm" href={"/job-details/"+item_recent.id}>Apply Now</a>
              </div>
            </div>
          </div>
            )
          }
          
          
        </div>
      </div>
    </section>
    
    <section className="work-process-area">
      <div className="container" data-aos="fade-down">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center" >
              <h3 className="title">How It Work?</h3>
              <div className="desc">
                <p>Many desktop publishing packages and web page editors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="working-process-content-wrap">
              <div className="working-col">
                
                <div className="working-process-item">
                  <div className="icon-box">
                    <div className="inner">
                      <img className="icon-img" src="/assets/img/icons/w1.png" alt="myjob"/>
                      <img className="icon-hover" src="/assets/img/icons/w1-hover.png" alt="myjob"/>
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="title">Create an Account</h4>
                    <p className="desc">It is long established fact reader distracted readable content</p>
                  </div>
                  <div className="shape-arrow-icon">
                    <img className="shape-icon" src="/assets/img/icons/right-arrow.png" alt="myjob"/>
                    <img className="shape-icon-hover" src="/assets/img/icons/right-arrow2.png" alt="myjob"/>
                  </div>
                </div>
                
              </div>
              <div className="working-col">
               
                <div className="working-process-item">
                  <div className="icon-box">
                    <div className="inner">
                      <img className="icon-img" src="/assets/img/icons/w2.png" alt="myjob"/>
                      <img className="icon-hover" src="/assets/img/icons/w2-hover.png" alt="myjob"/>
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="title">CV/Resume</h4>
                    <p className="desc">It is long established fact reader distracted readable content</p>
                  </div>
                  <div className="shape-arrow-icon">
                    <img className="shape-icon" src="/assets/img/icons/right-arrow.png" alt="myjob"/>
                    <img className="shape-icon-hover" src="/assets/img/icons/right-arrow2.png" alt="myjob"/>
                  </div>
                </div>
                
              </div>
              <div className="working-col">
                
                <div className="working-process-item">
                  <div className="icon-box">
                    <div className="inner">
                      <img className="icon-img" src="/assets/img/icons/w3.png" alt="myjob"/>
                      <img className="icon-hover" src="/assets/img/icons/w3-hover.png" alt="myjob"/>
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="title">Find Your Job</h4>
                    <p className="desc">It is long established fact reader distracted readable content</p>
                  </div>
                  <div className="shape-arrow-icon">
                    <img className="shape-icon" src="/assets/img/icons/right-arrow.png" alt="myjob"/>
                    <img className="shape-icon-hover" src="/assets/img/icons/right-arrow2.png" alt="myjob"/>
                  </div>
                </div>
                
              </div>
              <div className="working-col">
                
                <div className="working-process-item">
                  <div className="icon-box">
                    <div className="inner">
                      <img className="icon-img" src="/assets/img/icons/w4.png" alt="myjob"/>
                      <img className="icon-hover" src="/assets/img/icons/w4-hover.png" alt="myjob"/>
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="title">Save & Apply</h4>
                    <p className="desc">It is long established fact reader distracted readable content</p>
                  </div>
                  <div className="shape-arrow-icon d-none">
                    <img className="shape-icon" src="/assets/img/icons/right-arrow.png" alt="myjob"/>
                    <img className="shape-icon-hover" src="/assets/img/icons/right-arrow2.png" alt="myjob"/>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="sec-overlay sec-overlay-theme bg-img" data-bg-img="/assets/img/photos/bg1.webp">
      <div className="container pt--0 pb--0">
        <div className="row justify-content-center divider-style1">
          <div className="col-lg-10 col-xl-7">
            <div className="divider-content text-center">
              <h4 className="sub-title" data-aos="fade-down">Trial Version Available</h4>
              <h2 className="title" data-aos="fade-down">Download Our Mobile App. <br/>You Can Ready Resume & Apply Job.</h2>
              <div className="divider-btn-group">
                <a className="btn-divider" data-aos="fade-down" href="page-not-found">
                  <img src="/assets/img/photos/google-play.png" width="201" height="63" className="icon" alt="myjob"/>
                </a>
                <a className="btn-divider btn-divider-app-store" data-aos="fade-down" href="page-not-found">
                  <img src="/assets/img/photos/mac-os.png" width="201" height="63" className="icon" alt="myjob"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-layer-style1"></div>
      <div className="bg-layer-style2"></div>
    </section>
    
    <section className="team-area">
      <div className="container" data-aos="fade-down">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center" >
              <h3 className="title">Best Candidate</h3>
              <div className="desc">
                <p>Many desktop publishing packages and web page editors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            
            <div className="team-item">
              <div className="thumb">
                <a href="candidate-details">
                  <img src="/assets/img/team/1.jpg" width="160" height="160" alt="myjob"/>
                </a>
              </div>
              <div className="content">
                <h4 className="title"><a href="candidate-details">Lauran Benitez</a></h4>
                <h5 className="sub-title">Web Designer</h5>
                <div className="rating-box">
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                </div>
                <p className="desc">CSS3, HTML5, Javascript Bootstrap, Jquery</p>
                <a className="btn-theme btn-white btn-sm" href="candidate-details">View Profile</a>
              </div>
              <div className="bookmark-icon"><img src="/assets/img/icons/bookmark1.png" alt="myjob"/></div>
              <div className="bookmark-icon-hover"><img src="/assets/img/icons/bookmark2.png" alt="myjob"/></div>
            </div>
            
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            
            <div className="team-item">
              <div className="thumb">
                <a href="candidate-details">
                  <img src="/assets/img/team/2.jpg" width="160" height="160" alt="myjob"/>
                </a>
              </div>
              <div className="content">
                <h4 className="title"><a href="candidate-details">Valentine Anders</a></h4>
                <h5 className="sub-title">UI/UX Designer</h5>
                <div className="rating-box">
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                </div>
                <p className="desc">CSS3, HTML5, Javascript Bootstrap, Jquery</p>
                <a className="btn-theme btn-white btn-sm" href="candidate-details">View Profile</a>
              </div>
              <div className="bookmark-icon"><img src="/assets/img/icons/bookmark1.png" alt="myjob"/></div>
              <div className="bookmark-icon-hover"><img src="/assets/img/icons/bookmark2.png" alt="myjob"/></div>
            </div>
            
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            
            <div className="team-item">
              <div className="thumb">
                <a href="candidate-details">
                  <img src="/assets/img/team/3.jpg" width="160" height="160" alt="myjob"/>
                </a>
              </div>
              <div className="content">
                <h4 className="title"><a href="candidate-details">Shakia Aguilera</a></h4>
                <h5 className="sub-title">Web Designer</h5>
                <div className="rating-box">
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                </div>
                <p className="desc">CSS3, HTML5, Javascript Bootstrap, Jquery</p>
                <a className="btn-theme btn-white btn-sm" href="candidate-details">View Profile</a>
              </div>
              <div className="bookmark-icon"><img src="/assets/img/icons/bookmark1.png" alt="myjob"/></div>
              <div className="bookmark-icon-hover"><img src="/assets/img/icons/bookmark2.png" alt="myjob"/></div>
            </div>
            
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            
            <div className="team-item">
              <div className="thumb">
                <a href="candidate-details">
                  <img src="/assets/img/team/4.jpg" width="160" height="160" alt="myjob"/>
                </a>
              </div>
              <div className="content">
                <h4 className="title"><a href="candidate-details">Assunta Manson</a></h4>
                <h5 className="sub-title">App. Developer</h5>
                <div className="rating-box">
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                  <i className="icofont-star"></i>
                </div>
                <p className="desc">CSS3, HTML5, Javascript Bootstrap, Jquery</p>
                <a className="btn-theme btn-white btn-sm" href="candidate-details">View Profile</a>
              </div>
              <div className="bookmark-icon"><img src="/assets/img/icons/bookmark1.png" alt="myjob"/></div>
              <div className="bookmark-icon-hover"><img src="/assets/img/icons/bookmark2.png" alt="myjob"/></div>
            </div>
            
          </div>
        </div>
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
                        ((companyDetails.length>0) && (companyDetails[0]!=='No record found') ? companyDetails.map((item_logo, index)=>
                        
                        <SwiperSlide>
                          <div className="swiper-slide">
                            
                            <div className="brand-logo-item">
                            <img src={"http://localhost:3000/"+item_logo.company_logo} alt={item_logo.company_name}/>
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
    
    <section className="testimonial-area bg-color-gray">
          <div className="container" data-aos="fade-down">
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
                      <div className="testimonial-item">
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
                      <div className="testimonial-item">
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
                      <div className="testimonial-item">
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
                      <div className="testimonial-item">
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
                      <div className="testimonial-item">
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
    
    {/* <section className="blog-area blog-home-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 className="title">Recent News Articles</h3>
              <div className="desc">
                <p>Many desktop publishing packages and web page editors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center post-home-style row-gutter-40">
          <div className="col-md-6 col-lg-4" data-aos="fade-right">
            
            <div className="post-item">
              <div className="thumb">
                <a href="blog-details"><img src="/assets/img/blog/1.jpg" alt="demo" width="370" height="270"/></a>
              </div>
              <div className="content">
                <div className="author">By <a href="blog">Walter Houston</a></div>
                <h4 className="title"><a href="blog-details">It long established fact that reader will distracted the readable.</a></h4>
                <div className="meta">
                  <span className="post-date">03 April, 2022</span>
                  <span className="dots"></span>
                  <span className="post-time">10 min read</span>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-md-6 col-lg-4" data-aos="fade-left">
            
            <div className="post-item">
              <div className="thumb mb--0">
                <a href="blog-details"><img src="/assets/img/blog/h1.jpg" alt="demo" width="370" height="440"/></a>
              </div>
            </div>
            
          </div>
          <div className="col-lg-4" data-aos="fade-left">
            <div className="post-home-list-style">
              
              <div className="post-item">
                <div className="content">
                  <div className="author">By <a href="blog">Walter Houston</a></div>
                  <h4 className="title"><a href="blog-details">Established fact and readeren will distracted the readable content.</a></h4>
                  <div className="meta">
                    <span className="post-date">03 April, 2022</span>
                    <span className="dots"></span>
                    <span className="post-time">10 min read</span>
                  </div>
                </div>
              </div>
              

              
              <div className="post-item">
                <div className="content">
                  <div className="author">By <a href="blog">Walter Houston</a></div>
                  <h4 className="title"><a href="blog-details">With WooLentor's drag-and drop interface for creating...</a></h4>
                  <div className="meta">
                    <span className="post-date">03 April, 2022</span>
                    <span className="dots"></span>
                    <span className="post-time">10 min read</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section> */}
    
  </main>

  <Footer />

  
  <div id="scroll-to-top" className="scroll-to-top"><span className="icofont-rounded-up"></span></div>

  
  <MobileMenu />
  
</div>
  </>
  )
}

export default Index;