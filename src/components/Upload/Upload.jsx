import { useState } from "react";
import "./Upload.scss";
import uploadIcon from "../../assets/icon.png";
import x from "../../assets/x.png";
import { Navigate } from "react-router-dom";

function Upload() {
  const [situation, setSituations] = useState({ uploadOpen: true });
  const changeUploadedFiles = (e) => {

  }
  
  return (
    <>
    {situation.uploadOpen ? <div className="uploadArea">
      <img src={uploadIcon} alt="" className="uploadIcon" />
      <div className="uploadContent">
        <h2>Upload a file</h2>
        <div className="uploadDescription">Select a file to upload from your computer or device</div>
        <input type="file" className="uploadInput" onChange={changeUploadedFiles} />
      </div>
      <img src={x} alt="" className="x" onClick={()=>{
        setSituations(s=>({...s,uploadOpen:false}))
      }} />
    </div>:<Navigate to="/main"/>}

    </>
  );
}

export default Upload;
