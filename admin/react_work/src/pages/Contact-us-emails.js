import React , { useState, useEffect}from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";


const ContactUsEmails = () => {

    const [all_message, setAllMessage] = useState([]);

    useEffect(()=>{
        getAllMessage();
    });

    /* fetch all admin accounts from database, start here */
    const getAllMessage = async()=>{
        const tbl = 'contact_emails';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result = await result.json();
        setAllMessage(result);
    }
    /* fetch all admin accounts from database, end here */

    /* Pagination, start here */
    const [showPerPage, setShowPerPage] = useState(10);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };
    /* Pagination, end here */

    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper text-left">

                        <div className="row">
                            <div className="col-md-12">

                                <div className="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5 className="mb-2 text-titlecase mb-4">Contact Us Email</h5>
                                        </div>
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="table-responsive pt-3">
                                        <table className="table table-striped project-orders-table" id="my_datatable">
                                            <thead>
                                                <tr>
                                                    <th className="ml-5">#</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Subject</th>
                                                    <th>Message</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            { ((all_message.length>0) && (all_message[0].name!=='No record found') ? all_message.slice(pagination.start, pagination.end).map((item, index)=>
                                                <tr>
                                                    <td>{index+1}.</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.subject}</td>
                                                    <td>{item.message}</td>
                                                    </tr>)
                                                :
                                                <tr>
                                                    <td colSpan={5}>No record found...</td>
                                                </tr>)
                                                }
                                                                                                
                                            </tbody>
                                        </table>

                                        <div className="row">
                                            <div className="col-lg-12 text-center">
                                                {
                                                    (((Math.ceil(all_message.length / showPerPage)) > 1) && (all_message[0].name !== 'No record found')) ?
                                                        <div className="row paging_gap">
                                                            <div className="col-lg-12 text-center">
                                                                <div className="pagination-area">
                                                                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={all_message.length} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    :
                                                    <></>
                                                }  
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ContactUsEmails;