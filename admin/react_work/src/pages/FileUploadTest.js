import React, {useState} from 'react'
import axios from 'axios';

//class FileUploadTest extends React.Component{
const FileUploadTest = () => {

        const [title, setTitle] = useState('');
      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");

      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };

      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("title", title);
        
        try {
          const res = await axios.post(
            "http://localhost:12345/uploadFile",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };

    
      return (
        <div className="App">
            <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <input type="file" onChange={saveFile} />
          <button onClick={uploadFile}>Upload</button>
        </div>
      );
}

export default FileUploadTest;