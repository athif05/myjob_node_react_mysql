import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

import AOS from "aos";

const Blog = () =>{
  useEffect(() => {
    document.title = 'BVC | Company-Details';

    AOS.init();
    AOS.refresh();

  },[]);

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
                  <div className="col-sm-6 col-lg-4 col-xl-6">
                    
                    <div className="post-item">
                      <div className="thumb">
                        <a href="/blog-details"><img src="assets/img/blog/2.jpg" alt="ssImage" width="370" height="270"/></a>
                      </div>
                      <div className="content">
                        <div className="author">By <a href="blog.html">Walter Houston</a></div>
                        <h4 className="title"><a href="/blog-details">All of these amazing features <br/>come at an affordable price!</a></h4>
                        <p>Lorem Ipsum is simpely dummy & text themes print industry orem psumen has been them industry spa also the loep into type setting.</p>
                        <div className="meta">
                          <span className="post-date">03 April, 2022</span>
                          <span className="dots"></span>
                          <span className="post-time">10 min read</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6">
                    
                    <div className="post-item">
                      <div className="thumb">
                        <a href="/blog-details"><img src="assets/img/blog/3.jpg" alt="ssImage" width="370" height="270"/></a>
                      </div>
                      <div className="content">
                        <div className="author">By <a href="/blog">Walter Houston</a></div>
                        <h4 className="title"><a href="/blog-details">With WooLentor's drag-and <br/>drop interface for creating...</a></h4>
                        <p>Lorem Ipsum is simpely dummy & text themes print industry orem psumen has been them industry spa also the loep into type setting.</p>
                        <div className="meta">
                          <span className="post-date">03 April, 2022</span>
                          <span className="dots"></span>
                          <span className="post-time">10 min read</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6">
                    
                    <div className="post-item">
                      <div className="thumb">
                        <a href="/blog-details"><img src="assets/img/blog/4.jpg" alt="ssImage" width="370" height="270"/></a>
                      </div>
                      <div className="content">
                        <div className="author">By <a href="blog.html">Walter Houston</a></div>
                        <h4 className="title"><a href="/blog-details">With WooLentor's drag-and <br/>drop interface for creating...</a></h4>
                        <p>Lorem Ipsum is simpely dummy & text themes print industry orem psumen has been them industry spa also the loep into type setting.</p>
                        <div className="meta">
                          <span className="post-date">03 April, 2022</span>
                          <span className="dots"></span>
                          <span className="post-time">10 min read</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6">
                    
                    <div className="post-item">
                      <div className="thumb">
                        <a href="/blog-details"><img src="assets/img/blog/5.jpg" alt="ssImage" width="370" height="270"/></a>
                      </div>
                      <div className="content">
                        <div className="author">By <a href="blog.html">Walter Houston</a></div>
                        <h4 className="title"><a href="/blog-details">Make your store stand out <br/>from the others by converting</a></h4>
                        <p>Lorem Ipsum is simpely dummy & text themes print industry orem psumen has been them industry spa also the loep into type setting.</p>
                        <div className="meta">
                          <span className="post-date">03 April, 2021</span>
                          <span className="dots"></span>
                          <span className="post-time">10 min read</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6">
                    
                    <div className="post-item">
                      <div className="thumb">
                        <a href="/blog-details"><img src="assets/img/blog/6.jpg" alt="ssImage" width="370" height="270"/></a>
                      </div>
                      <div className="content">
                        <div className="author">By <a href="blog.html">Walter Houston</a></div>
                        <h4 className="title"><a href="/blog-details">All of these amazing features <br/>come at an affordable price!</a></h4>
                        <p>Lorem Ipsum is simpely dummy & text themes print industry orem psumen has been them industry spa also the loep into type setting.</p>
                        <div className="meta">
                          <span className="post-date">03 April, 2022</span>
                          <span className="dots"></span>
                          <span className="post-time">10 min read</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6">
                    
                    <div className="post-item">
                      <div className="thumb">
                        <a href="/blog-details"><img src="assets/img/blog/7.jpg" alt="ssImage" width="370" height="270"/></a>
                      </div>
                      <div className="content">
                        <div className="author">By <a href="blog.html">Walter Houston</a></div>
                        <h4 className="title"><a href="/blog-details">With WooLentor's drag-and <br/>drop interface for creating...</a></h4>
                        <p>Lorem Ipsum is simpely dummy & text themes print industry orem psumen has been them industry spa also the loep into type setting.</p>
                        <div className="meta">
                          <span className="post-date">03 April, 2022</span>
                          <span className="dots"></span>
                          <span className="post-time">10 min read</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6">
                    
                    <div className="post-item">
                      <div className="thumb">
                        <a href="/blog-details"><img src="assets/img/blog/8.jpg" alt="ssImage" width="370" height="270"/></a>
                      </div>
                      <div className="content">
                        <div className="author">By <a href="blog.html">Walter Houston</a></div>
                        <h4 className="title"><a href="/blog-details">With WooLentor's drag-and <br/>drop interface for creating...</a></h4>
                        <p>Lorem Ipsum is simpely dummy & text themes print industry orem psumen has been them industry spa also the loep into type setting.</p>
                        <div className="meta">
                          <span className="post-date">03 April, 2022</span>
                          <span className="dots"></span>
                          <span className="post-time">10 min read</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-6">
                    
                    <div className="post-item">
                      <div className="thumb">
                        <a href="/blog-details"><img src="assets/img/blog/9.jpg" alt="ssImage" width="370" height="270"/></a>
                      </div>
                      <div className="content">
                        <div className="author">By <a href="blog.html">Walter Houston</a></div>
                        <h4 className="title"><a href="/blog-details">Make your store stand out <br/>from the others by converting</a></h4>
                        <p>Lorem Ipsum is simpely dummy & text themes print industry orem psumen has been them industry spa also the loep into type setting.</p>
                        <div className="meta">
                          <span className="post-date">03 April, 2021</span>
                          <span className="dots"></span>
                          <span className="post-time">10 min read</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 text-left">
                    <div className="pagination-area">
                      <nav>
                        <ul className="page-numbers d-inline-flex">
                          <li>
                            <a className="page-number active" href="blog.html">1</a>
                          </li>
                          <li>
                            <a className="page-number" href="blog.html">2</a>
                          </li>
                          <li>
                            <a className="page-number" href="blog.html">3</a>
                          </li>
                          <li>
                            <a className="page-number" href="blog.html">4</a>
                          </li>
                          <li>
                            <a className="page-number next" href="blog.html">
                              <i className="icofont-long-arrow-right"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="blog-sidebar blog-sidebar-left">
                  <div className="widget-item">
                    <div className="widget-body">
                      <div className="widget-search-box">
                        <form action="#" method="post">
                          <div className="form-input-item">
                            <input type="search" id="search2" placeholder="Search here"/>
                            <button type="submit" className="btn-src">
                              <i className="icofont-search"></i>
                            </button>
                          </div>
                        </form>
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
                          <li><a href="/jobs">Commercial Movers<span>(16)</span></a></li>
                          <li><a href="/jobs">Air Freight Services<span>(03)</span></a></li>
                          <li><a href="/jobs">Drone Services<span>(08)</span></a></li>
                          <li><a href="/jobs">Road Freight<span>(18)</span></a></li>
                          <li><a href="/jobs">Warehousing<span>(02)</span></a></li>
                          <li><a href="/jobs">Consulting Storage<span>(14)</span></a></li>
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
                        <div className="widget-blog-post">
                          <div className="thumb">
                            <a href="/blog-details"><img src="assets/img/blog/s1.jpg" alt="ssImage" width="71" height="70"/></a>
                          </div>
                          <div className="content">
                            <h4><a href="/blog-details">This includes shipment <br/>of raw materials.</a></h4>
                            <div className="meta">
                              <span className="post-date"><i className="icofont-ui-calendar"></i> 10 August, 2021</span>
                            </div>
                          </div>
                        </div>
                        <div className="widget-blog-post">
                          <div className="thumb">
                            <a href="/blog-details"><img src="assets/img/blog/s2.jpg" alt="ssImage" width="71" height="70"/></a>
                          </div>
                          <div className="content">
                            <h4><a href="/blog-details">All of these amazing <br/>features come price.</a></h4>
                            <div className="meta">
                              <span className="post-date"><i className="icofont-ui-calendar"></i> 18 August, 2021</span>
                            </div>
                          </div>
                        </div>
                        <div className="widget-blog-post">
                          <div className="thumb">
                            <a href="/blog-details"><img src="assets/img/blog/s3.jpg" alt="ssImage" width="71" height="70"/></a>
                          </div>
                          <div className="content">
                            <h4><a href="/blog-details">This includes shipment <br/>of raw materials.</a></h4>
                            <div className="meta">
                              <span className="post-date"><i className="icofont-ui-calendar"></i> 19 August, 2021</span>
                            </div>
                          </div>
                        </div>
                        <div className="widget-blog-post">
                          <div className="thumb">
                            <a href="/blog-details"><img src="assets/img/blog/s4.jpg" alt="ssImage" width="71" height="70"/></a>
                          </div>
                          <div className="content">
                            <h4><a href="/blog-details">All of these amazing <br/>features come price.</a></h4>
                            <div className="meta">
                              <span className="post-date"><i className="icofont-ui-calendar"></i> 10 August, 2021</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-item mb-md-0">
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

export default Blog;