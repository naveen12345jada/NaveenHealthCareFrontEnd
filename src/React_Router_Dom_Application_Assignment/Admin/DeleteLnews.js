import React, { useEffect, useState } from 'react'
import moduleCss from "../InnerPages/InnerPages.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from "axios";
import { NavLink } from 'react-router-dom';
const DeleteLnews = () => {

    const [lnews, setLnews] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:4000/Lnews")
        .then((res) => {
          setLnews(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  let deleteData=(id)=>{
   axios.delete(`http://localhost:4000/Lnews/${id}`)
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
    <div className="col-lg-12">
      <table className='table table-bordered display hover' id="example" >
     
          <thead>
            <tr >
              <th>id</th>
              <th>lnews</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lnews.map((stu) => {
              return (
              
                  <tr key={stu.id}>
                    <td>{stu.id}</td>
                    <td>{stu.lnews}</td>

                    <td className="d-flex">
                      <button
                        className="btn btn-danger bi bi-trash"
                        onClick={() => {
                          deleteData(stu.id);
                        }}
                      ></button>
                      &nbsp;
                      <NavLink to={`/editlnews/${stu.id}`}>
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

export default DeleteLnews