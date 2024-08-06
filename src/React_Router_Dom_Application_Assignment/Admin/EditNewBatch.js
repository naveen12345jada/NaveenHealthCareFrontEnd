import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import moduleCss from "../InnerPages/InnerPages.module.css";

const EditNewBatch = () => {
    const{sno}=useParams()
    const [id,setId]=useState('');
    const [Course,setCourse]=useState('');
    const [Date,setDate]=useState('');
    const [Timings,setTimings]=useState('');
    const [ Duration,setDuration]=useState('');
    const [ Trainer,setTrainer]=useState('');
    const [ RegisterforDemo,setRegisterforDemo]=useState('');
      const navigate= useNavigate();

      useEffect(() => {
        axios
          .get(`http://localhost:5000/NewBatches/${sno}`)
          .then((res) => {
            setId(res.data.id);
            setCourse(res.data.Course);
            setDate(res.data.Date);
            setTimings(res.data.Timings);
            setDuration(res.data.Duration);
            setTrainer(res.data.Trainer);
            setRegisterforDemo(res.data.RegisterforDemo);
           
          })
          .catch((err) => {
            console.log(err);
          });
      },[sno]);
  
  
  
      
      let submitHandler=(e)=>{
       
       e.preventDefault();
  
       axios.put(`http://localhost:5000/NewBatches/${sno}`,{id,Course,Date,Timings,Duration,Trainer,RegisterforDemo})
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
      <input name="text"  placeholder="EditCourse" className="form-control mb-5" value={Course} onChange={(e)=>setCourse(e.target.value)}/>
      <input name="text"  placeholder="EditDate" className="form-control mb-5" value={Date} onChange={(e)=>setDate(e.target.value)}/>
      <input name="text"  placeholder="EditTimings" className="form-control mb-5" value={Timings} onChange={(e)=>setTimings(e.target.value)}/>
      <input name="text"  placeholder="EditDuration" className="form-control mb-5" value={Duration} onChange={(e)=>setDuration(e.target.value)}/>
      <input name="text"  placeholder="EditTrainer" className="form-control mb-5" value={Trainer} onChange={(e)=>setTrainer(e.target.value)}/>
      <input name="text"  placeholder="EditRegisterforDemo" className="form-control mb-5" value={RegisterforDemo} onChange={(e)=>setRegisterforDemo(e.target.value)}/>
    


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

export default EditNewBatch