import React, { useEffect } from "react";
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

const BlogDetails = () => {
  useEffect(() => {
    document.title = 'BVC | Company-Details';

    AOS.init();
    AOS.refresh();

  },[]);

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
        <div className="post-details-item">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="post-details-info text-center">
                  <div className="meta">
                    <span className="author">By <a href="blog.html">Harold Leonard</a></span>
                    <span className="dots"></span>
                    <span className="post-date">03 April, 21 </span>
                    <span className="dots"></span>
                    <span className="post-time"> 10 min read</span>
                  </div>
                  <h4 className="title">Simple pricing structure you have the flexibility to be able to grow your business in an effective.</h4>
                  <div className="widget-tags">
                    <ul>
                      <li><a href="blog.html">Agency</a></li>
                      <li><a className="active" href="blog.html">Circular</a></li>
                      <li><a href="blog.html">Business</a></li>
                      <li><a href="blog.html">Corporate</a></li>
                    </ul>
                  </div>
                </div>
                <div className="post-details-thumb">
                  <img className="w-100" src="assets/img/blog/details1.jpg" alt="ssImage" width="1170" height="550"/>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="post-details-content">
                  <h4 className="desc-title">The job board technology solution for those looking to setup and operate their own job board, through to those who have an established job.</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standard dummy text ever since the a galley type and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standard dummy text ever since the a galley type and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standar and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer.</p>
                  <div className="post-details-content-list">
                    <h4 className="title">Table of Content:</h4>
                    <ul className="list-style">
                      <li>
                        <a href="/blog-details"><i className="icofont-double-right"></i>It was popularised in the 1960s with the release of Letraset sheets containing</a>
                      </li>
                      <li>
                        <a href="/blog-details"><i className="icofont-double-right"></i> Many desktop publishing packages and web page editors now use</a>
                      </li>
                      <li>
                        <a href="/blog-details"><i className="icofont-double-right"></i> It was popularised in the 1960s with the release of Letraset sheets containing</a>
                      </li>
                      <li>
                        <a href="/blog-details"><i className="icofont-double-right"></i> Many desktop publishing packages and web page editors now use</a>
                      </li>
                      <li>
                        <a href="/blog-details"><i className="icofont-double-right"></i> It was popularised in the 1960s with the release of Letraset sheets containing</a>
                      </li>
                    </ul>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standard dummy text ever since the a galley type and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standar and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer.</p>
                  <h4 className="desc-title2">Our company fails the real world test in all kinds of ways.</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standard dummy text ever since the a galley type and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standard dummy text ever since the a galley type and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standar and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer.</p>
                  <div className="content-thumb">
                    <img className="w-100" src="assets/img/blog/details2.jpg" alt="ssImage" width="970" height="450"/>
                  </div>
                  <h4 className="desc-title3">Well, that wasn’t the only unconventional thing 37Signals did on their way up.</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standard dummy text ever since the a galley type and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standar and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standard dummy text ever since the a galley type and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer Lorem Ipsum is simply dummy text of the printing and typesetting industry has been industry standar and scrambe make type specimen book has survived not only five centuries text of the printing and typesetin indus standard dummy text everem since the 1500s, when an unknown printer.</p>
                  <blockquote className="blockquote-item">
                    <div className="content">
                      <p>2,83k People Receive Our Weekly WordPress Related Newsletter.</p>
                    </div>
                  </blockquote>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ever since the 1500s, when an unknown printer took a galley of type and scirambled it to make a type specimen book. It has survive only five centuries, but also the leap into electronic typesetting, remaining the essentially unchanged. It was popularised in the 1960 the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing crambled it to make specimen book. It has survived nots only five centuries, but also the leap into.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ever since the 1500s, when an unknown printer took a galley of type and scirambled it to make a type specimen book. It has survive only five centuries, but also the leap into electronic typesetting, remaining the essentially unchanged. It was popularised in the 1960 the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing crambled it to make specimen book. It has survived nots only five centuries, but also the leap into.</p>
                  <div className="post-details-footer">
                    <div className="widget-social-icons">
                      <span>Share this article:</span>
                      <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="icofont-facebook"></i></a>
                        <a href="https://www.skype.com/" target="_blank" rel="noopener"><i className="icofont-skype"></i></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener"><i className="icofont-twitter"></i></a>
                        <a href="https://www.linkedin.com/signup" target="_blank" rel="noopener"><i className="icofont-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

                      <SwiperSlide>
                      <div className="swiper-slide">
                        
                        <div className="post-item2">
                          <div className="thumb">
                            <a href="/blog-details">
                              <img src="assets/img/blog/10.jpg" alt="ssImage" width="350" height="270"/>
                            </a>
                          </div>
                          <div className="content">
                            <h5 className="author">By <a href="blog.html">Walter Houston</a></h5>
                            <h4 className="title"><a href="/blog-details">Why wild animal welfare in addition to farmed animal...</a></h4>
                            <div className="meta">
                              <span className="post-date">03 April, 2021</span>
                              <span className="dots"></span>
                              <span className="post-time">10 min read</span>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      </SwiperSlide>

                      <SwiperSlide>
                      <div className="swiper-slide">
                        
                        <div className="post-item2">
                          <div className="thumb">
                            <a href="/blog-details">
                              <img src="assets/img/blog/11.jpg" alt="ssImage" width="350" height="270"/>
                            </a>
                          </div>
                          <div className="content">
                            <h5 className="author">By <a href="blog.html">Walter Houston</a></h5>
                            <h4 className="title"><a href="/blog-details">Organizations and individual advocates around the world...</a></h4>
                            <div className="meta">
                              <span className="post-date">03 April, 2021</span>
                              <span className="dots"></span>
                              <span className="post-time">10 min read</span>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      </SwiperSlide>

                      <SwiperSlide>
                      <div className="swiper-slide">
                        
                        <div className="post-item2">
                          <div className="thumb">
                            <a href="/blog-details">
                              <img src="assets/img/blog/12.jpg" alt="ssImage" width="350" height="270"/>
                            </a>
                          </div>
                          <div className="content">
                            <h5 className="author">By <a href="blog.html">Walter Houston</a></h5>
                            <h4 className="title"><a href="/blog-details">It is not currently possible for us to have a good sense.</a></h4>
                            <div className="meta">
                              <span className="post-date">03 April, 2021</span>
                              <span className="dots"></span>
                              <span className="post-time">10 min read</span>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      </SwiperSlide>

                      <SwiperSlide>
                      <div className="swiper-slide">
                        
                        <div className="post-item2">
                          <div className="thumb">
                            <a href="/blog-details">
                              <img src="assets/img/blog/3.jpg" alt="ssImage" width="350" height="270"/>
                            </a>
                          </div>
                          <div className="content">
                            <h5 className="author">By <a href="blog.html">Walter Houston</a></h5>
                            <h4 className="title"><a href="/blog-details">Why wild animal welfare in addition to farmed animal...</a></h4>
                            <div className="meta">
                              <span className="post-date">03 April, 2021</span>
                              <span className="dots"></span>
                              <span className="post-time">10 min read</span>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      </SwiperSlide>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Swiper>

          </div>
        </div>
        <div className="comment-area">
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

export default BlogDetails;