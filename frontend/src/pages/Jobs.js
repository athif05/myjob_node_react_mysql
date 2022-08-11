import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import Pagination from './../components/Pagination';

import AOS from "aos";

const Jobs = () =>{

  const [jobLists, setJobLists] = useState([]);
  const [jobCategory, setJobCategory] = useState([]);
  const [jobCity, setJobCity] = useState([]);

  const [key_title, setKeyTitle] = useState('');
  const [city_id, setCityId] = useState('');
  const [category_id, setCategoryId] = useState('');

  const params = useParams();

  var search = useLocation().search;
  var url_query = new URLSearchParams(search);

  useEffect(() => {
    document.title = 'BVC | Jobs';

    AOS.init();
    AOS.refresh();

    getJobLists();
    getJobCategory();

  },[]);

  /* fetch all Jobs, start here */
  const getJobLists = async () =>{
    
    if(url_query.get('key_title') || url_query.get('city_id') || url_query.get('category_id')){

      //console.log('title: '+url_query);

      if(url_query.get('key_title')) {
        var key_title=url_query.get('key_title');
      } else {
        var key_title='NULL';
      }

      if(url_query.get('city_id')) {
        var city_id=url_query.get('city_id');
      } else {
        var city_id='NULL';
      }

      if(url_query.get('category_id')) {
        var category_id=url_query.get('category_id');
      } else {
        var category_id='NULL';
      }

      var result_job= await fetch(`http://localhost:12345/all-active-jobs-with-url-query/${key_title}/${city_id}/${category_id}`);
    } else if(params.id){
      //console.log('params: '+params.id);
      var result_job= await fetch(`http://localhost:12345/all-active-jobs-with-category/${params.id}`);
    } else {
      //console.log('all');
      var result_job = await fetch(`http://localhost:12345/all-active-jobs`);
    }
    
    result_job = await result_job.json();

    setJobLists(result_job);
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


  /* search jobs, start here */
  const searchHandler = async() => {
    
    let result = await fetch('http://localhost:12345/search-jobs',{
      method: 'post',
      body: JSON.stringify({key_title, city_id, category_id}),
      headers:{
        'Content-Type': 'application/json'
      },
    });

    result = await result.json();
    console.warn(result);

    setJobLists(result);
  }
  /* search jobs, end here */

  const imageStyle = {
    width: "75px",
    Height: "75px"
  };


  /* Pagination, start here */
  const [showPerPage, setShowPerPage] = useState(12);
  const [pagination, setPagination] = useState({
      start: 0,
      end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
      setPagination({ start: start, end: end });
  };
  /* Pagination, end here */


  return (
    <div className="wrapper">
  
      <Header />
  
      <main className="main-content">
        
        <section className="home-slider-area">
      <div className="home-slider-container default-slider-container">
        <div className="home-slider-wrapper slider-default">
          <div className="slider-content-area jobs-bck-img" style={{maxHeight:400}}>
            <div className="container pt--0 pb--0">
              <div className="slider-container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 col-lg-8">
                    <div className="slider-content">
                      <h2 className="title"><span className="counter" data-counterup-delay="80">{((jobLists.length>0) && (jobLists[0].name!=='No record found')) ? jobLists.length : 0 }</span> job available <br/>You can choose your dream job</h2>
                      
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
      
      
    </section>
        
        <section className="recent-job-area recent-job-inner-area">
          <div className="container">
            <div className="row">

              {
                ((jobLists.length>0) && (jobLists[0].name!=='No record found') ? jobLists.slice(pagination.start, pagination.end).map((item, index) => 
                  <div className="col-md-6 col-lg-4">
                    
                    <div className="recent-job-item recent-job-style2-item">
                      <div className="company-info">
                        <div className="logo">
                          <a href={"/company-details/"+item.employer_id}>
                            { item.company_logo ? <img src={"http://localhost:3000/"+item.company_logo} alt={item.job_title}  style={imageStyle}/> : 
                              <img src="/assets/img/blog/no-image.jpg" alt="ssImage" style={imageStyle}/>
                            }
                          </a>
                        </div>
                        <div className="content">
                          <h4 className="name"><a href={"/company-details/"+item.employer_id}>{item.company_name}</a></h4>
                          <p className="address">{item.job_location_city_name}, {item.job_location_state_name}</p>
                        </div>
                      </div>
                      <div className="main-content">
                        <h3 className="title"><a href={"/job-details/"+item.id}>{item.job_title}</a></h3>
                        <h5 className="work-type">{item.job_type_name}</h5>
                        <p className="desc">{item.skills}</p>
                      </div>
                      <div className="recent-job-info">
                        <div className="salary">
                          <h4>{item.salary} INR</h4>
                          <p>/monthly</p>
                        </div>
                        <a className="btn-theme btn-sm" href={"/job-details/"+item.id}>Apply Now</a>
                      </div>
                    </div>
                    
                  </div>
                ) : null)
              }
              
              
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">

              {
                (((Math.ceil(jobLists.length / showPerPage)) > 1) && (jobLists[0].name !== 'No record found')) ?

                <div className="pagination-area">

                  <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={jobLists.length} />
                  
                </div>
                :
                  <></>
                }  


                {/* <nav>
                    <ul className="page-numbers d-inline-flex">
                      <li>
                        <a className="page-number active" href="job.html">1</a>
                      </li>
                      <li>
                        <a className="page-number" href="job.html">2</a>
                      </li>
                      <li>
                        <a className="page-number" href="job.html">3</a>
                      </li>
                      <li>
                        <a className="page-number next" href="job.html">
                          <i className="icofont-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav> */}

              </div>
            </div>
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

export default Jobs;