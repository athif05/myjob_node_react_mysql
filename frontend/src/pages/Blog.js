import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import Moment from 'moment'; //use for convert date format.
import Pagination from './../components/Pagination';

import AOS from "aos";

const Blog = () =>{

  const [blogDetails, setBlogDetails] = useState([]);
  const [blogCounts, setBlogCounts] = useState([]);
  const [latestBlog, setLatestBlog] = useState([]);

  const params = useParams();

  useEffect(() => {
    document.title = 'BVC | Company-Details';

    AOS.init();
    AOS.refresh();

    getBlogDetails();
    getBlogCounts();
    getLatestBlog();

  },[]);

  const blogByCategory = async(cat_id)=>{
    let result = await fetch(`http://localhost:12345/search-blog-by-category/${cat_id}`);
    result = await result.json();

    setBlogDetails(result);
  }

  const getBlogDetails = async() => {
    let result = await fetch(`http://localhost:12345/all-blogs-data`);
    result = await result.json();
    setBlogDetails(result);
  }

  const getBlogCounts =async() =>{
    let result = await fetch(`http://localhost:12345/count-blog-with-category`);
    result = await result.json();
    setBlogCounts(result);
  }

  const getLatestBlog = async() => {
    let result = await fetch(`http://localhost:12345/latest-blogs`);
    result = await result.json();
    setLatestBlog(result);
  }

  
  /* blog fetch by seach box, start here */
  const searchHandler = async(event)=>{
    
    let key = event.target.value;
    if(key){

      let result = await fetch(`http://localhost:12345/search-blogs-data/${key}`);
      result = await result.json();

      setBlogDetails(result);
      
    } 
  }
  /* blog fetch by seach box, end here */

  const imageStyle = {
    width: "70px",
    Height: "71px"
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
        
        <div className="page-header-area sec-overlay sec-overlay-black blog-bck-img">
          <div className="container pt--0 pb--0">
            <div className="row">
              <div className="col-12">
                <div className="page-header-content">
                  <h2 className="title">Blog Post</h2>
                  <nav className="breadcrumb-area">
                    <ul className="breadcrumb justify-content-center">
                      <li><a href="index.html">Home</a></li>
                      <li className="breadcrumb-sep">//</li>
                      <li>Blog Post</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="blog-area blog-grid-area">
          <div className="container">
            <div className="row justify-content-between flex-xl-row-reverse">
              <div className="col-xl-8">
                <div className="row row-gutter-70">

                  {
                    ((blogDetails.length>0) && (blogDetails[0].name!=='No record found') ? blogDetails.slice(pagination.start, pagination.end).map((item, index) => 
                  <div className="col-sm-6 col-lg-4 col-xl-6">
                    
                    <div className="post-item">
                      <div className="thumb">
                        <a href={"/blog-details/"+item.id}>
                          { item.image ? <img src={"http://localhost:3000/"+item.image} alt={item.title}  width="370" height="270"/> : 
                            <img src="/assets/img/blog/no-image.jpg" alt="ssImage" width="370" height="270"/>
                          }
                        </a>
                      </div>
                      <div className="content">
                        <div className="author">By <a href={"/author-blogs/"+item.author_id}>{item.author_name}</a></div>
                        <h4 className="title"><a href={"/blog-details/"+item.id}>{item.title}</a></h4>
                        <p dangerouslySetInnerHTML={{__html:item.description.substring(0,150)}}></p>
                        <div className="meta">
                          <span className="post-date">{Moment(item.created_at).format('DD-MM-YYYY')}</span>
                          <span className="dots"></span>
                          <span className="post-time">{item.blog_category_name}</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  ) : null)
                }
                  
                
                  <div className="col-12 text-left">
                    
                    {
                    (((Math.ceil(blogDetails.length / showPerPage)) > 1) && (blogDetails[0].name !== 'No record found')) ?

                    <div className="pagination-area">

                      <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={blogDetails.length} />
                      
                    </div>
                    :
                      <></>
                    } 

                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="blog-sidebar blog-sidebar-left">
                  <div className="widget-item">
                    <div className="widget-body">
                      <div className="widget-search-box">
                        
                          <div className="form-input-item">
                            <input type="search" id="search2" placeholder="Search here" onChange={searchHandler}/>
                            <button type="submit" className="btn-src" onClick={searchHandler}>
                              <i className="icofont-search"></i>
                            </button>
                          </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="widget-item">
                    <div className="widget-title">
                      <h3 className="title">Post Category</h3>
                    </div>
                    <div className="widget-body">
                      <div className="widget-categories">
                        <ul>
                          {
                            (blogCounts.length>0 ? blogCounts.map((item, index) =>
                              <li><a onClick={()=>blogByCategory(item.id)} style={{cursor:"pointer"}}>{item.name}<span>({item.total_blog})</span></a></li>
                            ):null)
                          }
                          
                          <li><a onClick={()=>getBlogDetails()} style={{cursor:"pointer"}}>Clear All Filter</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="widget-item">
                    <div className="widget-title">
                      <h3 className="title">Recent Post</h3>
                    </div>
                    <div className="widget-body">
                      <div className="widget-post">

                        {
                          ((latestBlog.length>0) && (latestBlog[0].name!=='No record found') ? latestBlog.map((item, index)=>
                            <div className="widget-blog-post">
                              <div className="thumb">
                                <a href={"/blog-details/"+item.id}>
                                { item.image ? <img src={"http://localhost:3000/"+item.image} alt={item.title} style={imageStyle}/> : 
                                  <img src="/assets/img/blog/no-image.jpg" alt="NoImage" style={imageStyle}/>
                                }
                                </a>
                              </div>
                              <div className="content">
                                <h4><a href={"/blog-details/"+item.id}>{item.title}</a></h4>
                                <div className="meta">
                                  <span className="post-date"><i className="icofont-ui-calendar"></i> { item.created_at ? Moment(item.created_at).format('DD-MM-YYYY') : null}</span>
                                </div>
                              </div>
                            </div>
                          ):null)
                        }
                        
                        
                      </div>
                    </div>
                  </div>

                  {/* <div className="widget-item mb-md-0">
                    <div className="widget-title">
                      <h3 className="title">Popular Tags</h3>
                    </div>
                    <div className="widget-body">
                      <div className="widget-tags">
                        <ul>
                          <li><a href="/jobs">Animal</a></li>
                          <li><a className="tags-padding mr-0" href="/jobs">Bird’s</a></li>
                          <li><a className="tags-padding" href="/jobs">Charity</a></li>
                          <li><a className="mr-0" href="/jobs">Forest</a></li>
                          <li><a href="/jobs">Water</a></li>
                          <li><a className="tags-padding mr-0" href="/jobs">Children</a></li>
                          <li><a className="tags-padding" href="/jobs">Human</a></li>
                          <li><a href="/jobs">Jungle</a></li>
                        </ul>
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />

      <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabindex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
            <MobileMenu />
          </aside>
    </div>
  )
}

export default Blog;