import React, { useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { confirm } from "react-confirm-box";

const CandidateJobsList = () =>{

    const [jobDetails, setJobDetails] = useState('');
    const [qualification_lists, setQualifications] = useState([]);

    const params = useParams();

    useEffect(()=>{
        getJobDetails();
    });


    const getJobDetails = async() =>{
        let result = await fetch(`http://localhost:12345/applied-jobs-by-candidate/${params.id}`);
        result = await result.json();
        //console.log(result);
        setJobDetails(result);

        var tbl='qualifications';
        let result_qual = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result_qual = await result_qual.json();
        //console.log(result);
        setQualifications(result_qual);
    }


    /* delete job, start here */
    const deleteJob = useCallback(async (tbl, val, id) => {

        const result = await confirm("Are you sure?");

        if (result) {
            let result_status = await fetch(`http://localhost:12345/generic-soft-delete/${tbl}/${val}/${id}`);
            return;
          }
          console.log("You click No!");
    }, getJobDetails());
    /* delete job, end here */


    return (
        <div className="wrapper">
            <Header />

            <main className="main-content">

                <div className="page-header-area sec-overlay sec-overlay-black blog-bck-img">
                    <div className="container pt--0 pb--0">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-header-content">
                                    <h2 className="title">Candidate Name</h2>
                                    <nav className="breadcrumb-area">
                                        <ul className="breadcrumb justify-content-center">
                                        <li><a href="/">Home</a></li>
                                        <li className="breadcrumb-sep">//</li>
                                        <li>Candidate Job Lists</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="blog-area blog-grid-area">
                    <div className="container" style={{paddingTop:"30px"}}>
                        <div className="row justify-content-between flex-xl-row-reverse">
                        <div className="col-xl-12">
                            <div className="row row-gutter-70">
                            
                            <div className="col-sm-12 col-lg-12 col-xl-12">
                                
                                <div className="post-item">
                                
                                <div className="content">
                                    <h4 className="title">List of Applied Jobs ({((jobDetails.length>0) && (jobDetails[0].name!=="No job found")) ? jobDetails.length : '0'})</h4>
                                    <div className="meta table table-responsive">
                                    
                                    <table id="tableID" className="table table-striped" width="100%">
                                    
                                    
                                        <thead>
                                            <tr>
                                                <th className="th-sm">#</th>
                                                <th className="th-sm">Job Title</th>
                                                <th className="th-sm">Job Location</th>
                                                <th className="th-sm">CTC</th>
                                                <th className="th-sm">Qualificaion</th>
                                                <th className="th-sm">Working Days</th>
                                                <th className="th-sm">Company Name</th>
                                                <th className="th-sm">Company Location</th>
                                                <th className="th-sm">Action</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                                {
                                                    ((jobDetails.length>0) && (jobDetails[0].name!=="No job found") ? jobDetails.map((item, index) => 
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>
                                                        <a href={"/job-details/"+item.job_id} target="_blank">{item.job_title}</a>
                                                    </td>
                                                    <td>{item.job_location_name}</td>
                                                    <td>{item.ctc}</td>
                                                    <td>
                                                    { 
                                                        qualification_lists.map((itemm) => 
            
                                                            item.qualification_ids.includes(itemm.id) ? itemm.name+', ' : ''
                                                        )
                                                    }
                                                    </td>
                                                    <td>{item.working_days_name}</td>
                                                    <td>{item.company_name}</td>
                                                    <td>{item.company_location_name}</td>
                                                    <td>
                                                        <a className="btn-theme btn-sm" href="javascript:void(0)" onClick={()=>deleteJob('job_applied_by_employees','1',item.id)} style={{ height:"25px", padding:"3px 12px", width:"auto"}}>
                                                            Delete
                                                        </a>
                                                    </td>
                                                </tr>
                                                ) : 
                                                <tr>
                                                    <td colSpan="9">No job in list...</td>								
                                                </tr>
                                                )
                                                
                                            
                                            }
                                        </tbody>
                                        
                                    </table>
                                    
                                    </div>
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

            <div id="scroll-to-top" className="scroll-to-top"><span className="icofont-rounded-up"></span></div>

  
            <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
            <MobileMenu />
            </aside>

        </div>
    )

}

export default CandidateJobsList;