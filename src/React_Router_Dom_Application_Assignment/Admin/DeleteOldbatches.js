
import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom';
import moduleCss from "../InnerPages/InnerPages.module.css";
import axios from 'axios';
const DeleteOldbatches = () => {
 
  const [newbatches, setNewbatches] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/NewBatches")
      .then((res) => {
        setNewbatches(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
let deleteData=(id)=>{
 axios.delete(`http://localhost:5000/NewBatches/${id}`)
 .then(()=>{
  alert("deleted record sucessfully....")
 })
 .catch((err)=>{
  console.log(err)
 })
}
    
   
  return (
    <>
    <div className={`${moduleCss}container`} >
    <div className="row">
    <div className={`${moduleCss.boottable} col-lg-12 `}>
      <table className='table table-bordered ' >
     
          <thead>
            <tr>
              <th >id</th>
              <th >Course</th>
              <th>Date</th>
              <th>Timings</th>
              <th>Duration</th>
              <th>Trainer</th>
              <th>RegisterforDemo</th>
             
            </tr>
          </thead>
          <tbody>
            {newbatches.map((stu) => {
              return (
              
                  <tr key={stu.id} >
                    <td>{stu.id}</td>
                    <td>{stu.Course}</td>
                    <td>{stu.Date}</td>
                    <td>{stu.Timings}</td>
                    <td>{stu.Duration}</td>
                    <td>{stu.Trainer}</td>
                    <td>{stu.RegisterforDemo}</td>

                    <td className="d-flex">
                      <button
                        className="btn btn-danger bi bi-trash"
                        onClick={() => {
                          deleteData(stu.id);
                        }}
                      ></button>
                      &nbsp;
                      <NavLink to={`/EditNewBatch/${stu.id}`}>
                        <button className="btn btn-warning">
                          <i className="bi bi-pencil"></i>
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                
              );
            })}
          </tbody>
      
      </table>
    </div>
    </div>
    </div>
  </>
  )
  
}

export default DeleteOldbatches