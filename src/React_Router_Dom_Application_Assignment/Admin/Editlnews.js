import React, { useEffect, useState } from 'react'
 import { useNavigate, useParams } from 'react-router-dom'
import moduleCss from "../InnerPages/InnerPages.module.css";
import axios from 'axios';
const Editlnews = () => {
  const{sno}=useParams()
  const [id,setId]=useState('');
    const [lnews,setLnews]=useState('');
    const navigate= useNavigate();

    useEffect(() => {
      axios
        .get(`http://localhost:4000/Lnews/${sno}`)
        .then((res) => {
          setId(res.data.id);
          setLnews(res.data.lnews);
        })
        .catch((err) => {
          console.log(err);
        });
    },[sno]);



    
    let submitHandler=(e)=>{
     
     e.preventDefault();

     axios.put(`http://localhost:4000/Lnews/${sno}`,{id,lnews})
     .then((res)=>{
    alert('student updated  sucessfully.......')
   
   navigate('/AdminDashboard')
     })
     .catch((e)=>{
    console.log(e);
     })
     
    }  
  return (
  // <div>{sno}</div>
<>
  <div>
  <div className={moduleCss}>
    <div className={moduleCss.breadCrumb}>
      <h3> Welcome to AdminDashboard</h3>
    </div>
  </div>
</div>
 <div className="container my-5 ">

<div className="row my-5">
<div className="col-lg-3"></div>
    <div className="col-lg-6">
    <form className={`${moduleCss.boxshadow} py-5 px-5 `}  onSubmit={submitHandler} >
    <div className="row">
    <div className="col-lg-12">
      <input type='text' name="id"  placeholder="Id" className="form-control mb-5" value={id} onChange={(e)=>setId(e.target.value)}/>
     
    </div>
    <div className="col-md-12">
      <textarea name="Message"  placeholder="Add Latest News" className="form-control mb-5" value={lnews} onChange={(e)=>setLnews(e.target.value)}/>
      <input type="submit" placeholder="Send Message" className=" form-control btn btn-success" ></input>
    </div>
    </div>
      
    </form>
  </div>
</div>
</div>
</>
  )
}

export default Editlnews