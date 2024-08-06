import React, { useState } from 'react'
import moduleCss from "../InnerPages/InnerPages.module.css";
import axios from 'axios';

const AddNewBatches = () => {

  const [id,setId]=useState('');
  const [Course,setCourse]=useState('');
  const [Date,setDate]=useState('');
  const [Timings,setTimings]=useState('');
  const [ Duration,setDuration]=useState('');
  const [ Trainer,setTrainer]=useState('');
  const [ RegisterforDemo,setRegisterforDemo]=useState('');
  

  let submitHandler=(e)=>{
  e.preventDefault();

  axios.post("http://localhost:5000/NewBatches",{id,Course,Date,Timings,Duration,Trainer,RegisterforDemo})
  .then((res)=>{
      alert("data posted sucessfully")
      setCourse("")
      setDate("")
      setTimings("")
      setDuration("")
      setTrainer("")
      setRegisterforDemo("")
  })
  .catch((err)=>{
   console.log(err);
  })
}
  return (
    <>
          
        
    <div className="container my-5 ">

      <div className="row">
          <div className="col-lg-12">
          <form className={`${moduleCss.boxshadow} py-5 px-5 `} onSubmit={submitHandler}>
          <div className="row">
          <div className="col-lg-12">
            <input type='text' name="id"  placeholder="Id" className="form-control mb-5" value={id} onChange={(e)=>setId(e.target.value)}/>
           
          </div>
          <div className="col-md-12">
            <input type='text' name="Course"  placeholder="AddCourse" className="form-control mb-5" value={Course} onChange={(e)=>setCourse(e.target.value)}/>
            <input type='text' name="Date"  placeholder="Date" className="form-control mb-5" value={Date} onChange={(e)=>setDate(e.target.value)}/>
            <input type='text' name="Timings"  placeholder="Timings" className="form-control mb-5" value={Timings} onChange={(e)=>setTimings(e.target.value)}/>
            <input type='text' name="Duration"  placeholder="Duration" className="form-control mb-5" value={Duration} onChange={(e)=>setDuration(e.target.value)}/>
            <input type='text' name="Trainer"  placeholder="Trainer" className="form-control mb-5" value={Trainer} onChange={(e)=>setTrainer(e.target.value)}/>
            <input type='text' name="RegisterforDemo"  placeholder="RegisterforDemo" className="form-control mb-5" value={RegisterforDemo} onChange={(e)=>setRegisterforDemo(e.target.value)}/>
           



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

export default AddNewBatches