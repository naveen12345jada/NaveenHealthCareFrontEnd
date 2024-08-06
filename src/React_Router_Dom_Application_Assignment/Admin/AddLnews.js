import React, { useState } from 'react'
import moduleCss from "../InnerPages/InnerPages.module.css";
import axios from 'axios';
// import AdminSidebar from './AdminSidebar';

const AddLnews = () => {

    const [id,setId]=useState('');
    const [lnews,setLnews]=useState('');
    
    let submitHandler=(e)=>{
    e.preventDefault();

    axios.post("http://localhost:4000/Lnews",{id,lnews})
    .then((res)=>{
        alert("data posted sucessfully")
        setLnews("")
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
                  <textarea name="Message"  placeholder="Add Latest News" className="form-control mb-5" value={lnews} onChange={(e)=>setLnews(e.target.value)}/>
                  <input type="submit" placeholder="Send Message" className=" form-control btn btn-success" ></input>
                </div>
                </div>
                  
                </form>
              </div>
            </div>
          </div>
        </>
      );
    }


export default AddLnews;