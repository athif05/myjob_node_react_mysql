import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import Moment from 'moment'; //use for convert date format.

import AOS from "aos";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BlogDetails = () => {

  const [blogDetails, setBlogDetails] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const params = useParams();

  useEffect(() => {
    document.title = 'BVC | Company-Details';

    AOS.init();
    AOS.refresh();

    getBlogDetails();
    
  },[]);

  
  const getBlogDetails = async () => {

    /* fetch sigle blog details, start here */
    let result = await fetch(`http://localhost:12345/blog-details/${params.id}`);
    result = await result.json();
    
    setBlogDetails(result);
    /* fetch sigle blog details, end here */
    

    /* fetch related blog FileList, start here */
    let result_related = await fetch(`http://localhost:12345/blog-by-category/${result[0].blog_category_id}/${result[0].id}`);
    result_related = await result_related.json();
    
    setRelatedBlogs(result_related);
    /* fetch related blog FileList, end here */
    
  }

  const imageStyle = {
    width: "100%",
    height: "550px"
  };

  return (
    <div className="wrapper">
    
    <Header />
    
    <main className="main-content text-justify" style={{textAlign: "justify"}}>
      
      <div className="page-header-area sec-overlay sec-overlay-black blog-bck-img">
        <div className="container pt--0 pb--0">
          <div className="row">
            <div className="col-12">
              <div className="page-header-content">
                <h2 className="title">Blog Details</h2>
                <nav className="breadcrumb-area">
                  <ul className="breadcrumb justify-content-center">
                    <li><a href="index.html">Home</a></li>
                    <li className="breadcrumb-sep">//</li>
                    <li>Blog Details</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       
      <section className="blog-details-area">
      {
        ((blogDetails.length>0) && (blogDetails[0].name!=='No record found') ? blogDetails.map((item, index) =>
        <div className="post-details-item">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="post-details-info text-center">
                  <div className="meta">
                    <span className="author">By <a href={"/author-blogs/"+item.author_id}>{item.author_name}</a></span>
                    <span className="dots"></span>
                    <span className="post-date">{Moment(item.created_at).format('DD-MM-YYYY')}</span>
                    <span className="dots"></span>
                    <span className="post-time">{item.blog_category_name}</span>
                  </div>
                  <h4 className="title">{item.title}</h4>
                  {/* <div className="widget-tags">
                    <ul>
                      <li><a href="blog.html">Agency</a></li>
                      <li><a className="active" href="blog.html">Circular</a></li>
                      <li><a href="blog.html">Business</a></li>
                      <li><a href="blog.html">Corporate</a></li>
                    </ul>
                  </div> */}
                </div>
                <div className="post-details-thumb">

                  { item.image ? <img src={"http://localhost:3000/"+item.image} alt={item.title} style={imageStyle}/> : 
                    null
                  }
                  
                </div>
              </div>
              <div className="col-lg-10">
                <div className="post-details-content">
                  
                  <p dangerouslySetInnerHTML={{__html:item.description}}></p>
                  
     
                  {/* <div className="post-details-footer">
                    <div className="widget-social-icons">
                      <span>Share this article:</span>
                      <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="icofont-facebook"></i></a>
                        <a href="https://www.skype.com/" target="_blank" rel="noopener"><i className="icofont-skype"></i></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener"><i className="icofont-twitter"></i></a>
                        <a href="https://www.linkedin.com/signup" target="_blank" rel="noopener"><i className="icofont-linkedin"></i></a>
                      </div>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
        ):null)
      }

        <div className="related-posts-area related-post-area bg-color-gray">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="post-title-wrap">
                  <h4 className="title">You may also like</h4>
                  
                  {/* <div className="swiper-btn-wrap">
                    <div className="related-post-swiper-btn-prev">
                      <i className="icofont-long-arrow-left"></i>
                    </div>
                    <div className="related-post-swiper-btn-next">
                      <i className="icofont-long-arrow-right"></i>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
            <div className="row">
              <div className="col-lg-12">
                <div className="related-posts">
                  <div className="swiper related-post-slider-container">
                    <div className="swiper-wrapper related-post-slider">

                      {
                        ((relatedBlogs.length>0) && (relatedBlogs[0].name!=='No record found') ? relatedBlogs.map((item_rel, index) => 
                          <SwiperSlide>
                          <div className="swiper-slide">
                            
                            <div className="post-item2">
                              <div className="thumb">
                                <a href={"/blog-details/"+item_rel.id}>
                                  { item_rel.image ? <img src={"http://localhost:3000/"+item_rel.image} alt={item_rel.title}  width="370" height="270"/> : 
                                    <img src="/assets/img/blog/no-image.jpg" alt="ssImage" width="370" height="270"/>
                                  }
                                </a>
                              </div>
                              <div className="content">
                                <h5 className="author">By <a href={"/author-blogs/"+item_rel.author_id}>{item_rel.author_name}</a></h5>
                                <h4 className="title"><a href={"/blog-details/"+item_rel.id}>{item_rel.title}</a></h4>
                                <div className="meta">
                                  <span className="post-date">{Moment(item_rel.created_at).format('DD-MM-YYYY')}</span>
                                  {/* <span className="dots"></span>
                                  <span className="post-time">10 min read</span> */}
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          </SwiperSlide>
                        ) : null)
                      }
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Swiper>

          </div>
        </div>

        {/* <div className="comment-area">
          <div className="container pt--0 pb--0">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="comment-view-area">
                  <h2 className="main-title">Comments (03)</h2>
                  <div className="comment-content">
                    <div className="single-comment">
                      <div className="author-info">
                        <div className="thumb">
                          <img src="assets/img/blog/a1.png" alt="ssImage" width="72" height="72"/>
                        </div>
                        <div className="author-details">
                          <h4 className="title">Sara Alexander</h4>
                          <ul>
                            <li>Product Designer, USA || <span>35 minutes ago</span></li>
                          </ul>
                        </div>
                      </div>
                      <p className="desc">Lorem Ipsum is simply dummy text of printing and typesetting industry has been industry standard dummy text ever since the galley and scrambe make type specimen book has surived not only five centuries text of the printing and typesetin indus standard dummy since the 1500s, when an unknown printer.</p>
                      <a className="btn-reply" href="#/"><i className="icofont-reply"></i>Reply</a>
                    </div>
                    <div className="single-comment comment-reply">
                      <div className="author-info">
                        <div className="thumb">
                          <img src="assets/img/blog/a2.png" alt="ssImage" width="72" height="72"/>
                        </div>
                        <div className="author-details">
                          <h4 className="title">Robert Morgan</h4>
                          <ul>
                            <li>Product Designer, USA || <span>35 minutes ago</span></li>
                          </ul>
                        </div>
                      </div>
                      <p className="desc">Lorem Ipsum is simply dummy text printing and typesetting industry has been industry standard dummy text ever since and scrambe make type specimen book has surived note only five centuries text of the printing and typesetin standard since the 1500s, when an unknown printer.</p>
                      <a className="btn-reply" href="#/"><i className="icofont-reply"></i>Reply</a>
                    </div>
                    <div className="single-comment comment-reply mb--0">
                      <div className="author-info">
                        <div className="thumb">
                          <img src="assets/img/blog/a3.png" alt="ssImage" width="72" height="72"/>
                        </div>
                        <div className="author-details">
                          <h4 className="title">Rochelle Hunt</h4>
                          <ul>
                            <li>Product Designer, USA || <span>35 minutes ago</span></li>
                          </ul>
                        </div>
                      </div>
                      <p className="desc">Lorem Ipsum is simply dummy text printing and typesetting industry has been industry standard dummy text ever since and scrambe make type specimen book has surived note only five centuries text of the printing and typesetin standard since the 1500s, when an unknown printer.</p>
                      <a className="btn-reply" href="#/"><i className="icofont-reply"></i>Reply</a>
                    </div>
                  </div>
                </div>
                <div className="comment-form-wrap">
                  <h2 className="main-title">Leave a Comment</h2>
                  <form className="comment-form" action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Name"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="email" placeholder="Email"/>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Massage"></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group text-center mb--0">
                          <button className="btn btn-theme" type="submit">Submit Now <i className="icofont-long-arrow-right"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </section>
      
    </main>

    <Footer />

    <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabindex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
      <MobileMenu />
    </aside>
  </div>
  )
}

export default BlogDetails;