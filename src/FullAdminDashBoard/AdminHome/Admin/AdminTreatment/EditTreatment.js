import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import modulecss from "../../Style.module.css";
const EditTreatment = () => {
   const{sno}=useParams()
  const [id,setId]=useState('');
    const [treatment,setTreatment]=useState('');
    const navigate= useNavigate();

    useEffect(() => {
      axios
        .get(`http://localhost:4000/Treatments/${sno}`)
        .then((res) => {
          setId(res.data.id);
          setTreatment(res.data.treatment);
        })
        .catch((err) => {
          console.log(err);
        });
    },[sno]);



    
    let submitHandler=(e)=>{
     
     e.preventDefault();

     axios.put(`http://localhost:4000/Treatments/${sno}`,{id,treatment})
     .then((res)=>{
    alert('student updated  sucessfully.......')
   
   navigate('/AdminDashboard')
     })
     .catch((e)=>{
    console.log(e);
     })
     
    }  
  
  return (
    <>
    <h1>Edit <span className='text-danger' >Treatment</span> </h1>
    
 <div className="container my-5 ">

<div className="row my-5">
<div className="col-lg-3"></div>
    <div className="col-lg-6">
    <form className={`${modulecss.boxshadow} py-5 px-5 `}  onSubmit={submitHandler} >
    <div className="row">
    <div className="col-lg-12">
      <input type='text' name="id"  placeholder="Id" className="form-control mb-5" value={id} onChange={(e)=>setId(e.target.value)}/>
     
    </div>
    <div className="col-md-12">
      <textarea name="Message"  placeholder="Add Latest News" className="form-control mb-5" value={treatment} onChange={(e)=>setTreatment(e.target.value)}/>
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

export default EditTreatment