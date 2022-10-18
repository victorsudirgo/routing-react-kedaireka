import React from 'react'
import './Dashboard.css'
import {Link} from 'react-router-dom';
import { useRef, useState, useEffect } from "react";

function Dashboard() {

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const handleChange = (event) => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
    const filePreview = URL.createObjectURL(selectedFile)
    setPreview(filePreview)
  }

  

  return (
    <div className='dashboard'>
    <h1></h1>

    {file && <img src={preview} alt={file.name} style={{width: "400px"}}/>}
    <div className='fileinput'>
    <input type="file" name="file" onChange={(e) => handleChange(e)}/>
    </div>
    
    <Link to='/visualize'>
    <button className='btn-viz' onClick=''>Visualize</button>
    </Link>
    </div>
  );
}

export default Dashboard
