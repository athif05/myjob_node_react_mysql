import React, {useEffect, useState} from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import axios from 'axios';


const AboutUs = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showFile, setShowFile] = useState();

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    
    
    /* CKEditor function */
    const handelChange = (e, editor) => {
        const data = editor.getData();
        setDescription(data);
    }


    useEffect(()=>{
        getAboutUs();
    },[]);

    const getAboutUs = async()=>{
        const tbl = 'aboutuses';
        let result = await fetch(`http://localhost:12345/all-generic-data/${tbl}`);
        result = await result.json();
        console.warn(result);
        setTitle(result[0].title);
        setDescription(result[0].description);
        setShowFile(result[0].image);
    }

    const updateAboutUs = async(e)=>{

        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("title", title);
        formData.append("description", description);
        
        if(!title || !description){
            setError(true);
            setSuccess(false);
            return false;
        }

        try {
            const res = await axios.post(
              "http://localhost:12345/update-about-us",
              formData
            );
            console.log(res);
            setFileName('');
            setSuccess(true);

            getAboutUs();
            
        } catch (ex) {
            console.log(ex);
        }

    }


    const imageStyle = {
        width: "120px",
        height: "80px"
    };

    return (

        <div className="container-scroller">

            <Header />

            <div className="container-fluid page-body-wrapper">

                <Sidebar />

                <div className="main-panel">
                    <div className="content-wrapper text-left">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Manage About-Us</h4>
                                    { success && <div className="alert alert-success" role="alert">Updated Successfully</div> }

                                        <input type="hidden" name="edit_id" id="edit_id" value="" />

                                            <div className="form-group">
                                                <label for="name">Title</label>
                                                <input type="text" className="form-control" id="title" name="title" placeholder="Title" defaultValue={title} onChange={(e)=>setTitle(e.target.value)}/>
                                                {error && !title && <span className="invalid-input">Enter Title</span>}
                                            </div>

                                            <div className="form-group">
                                                <label for="name">Description</label>
                                                
                                                {/* <CKEditor
                                                    editor={ ClassicEditor }
                                                    data={description}
                                                    //content={description}
                                                    onReady={ editor => {
                                                        // You can store the "editor" and use when it is needed.
                                                        console.log( 'Editor is ready to use!', editor );
                                                    } }
                                                    
                                                    onChange={ ( event, editor ) => {
                                                        const data = editor.getData();
                                                        console.log( { event, editor, data } );
                                                    } }
                                                    onBlur={ ( event, editor ) => {
                                                        console.log( 'Blur.', editor );
                                                    } }
                                                    onFocus={ ( event, editor ) => {
                                                        console.log( 'Focus.', editor );
                                                    } }
                                                /> */}

                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    data={description}
                                                    onChange={handelChange}
                                                />
                                                {error && !description && <span className="invalid-input">Enter Description</span>}
                                            </div>

                                            <div className="form-group">
                                                <label for="name">Image</label>
                                                <input type="file" className="form-control" onChange={saveFile} accept="image/png, image/jpeg, image/jpg"/>
                                                { showFile ? <img src={showFile} alt="Aboutus" style={imageStyle}/> : null}
                                            </div>


                                                <button type="submit" className="btn btn-primary mr-2" onClick={updateAboutUs}>Update</button>

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

export default AboutUs;