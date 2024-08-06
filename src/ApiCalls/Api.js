import React from 'react'
import Axios from 'axios'
import './Api.css'
export default class Api extends React.Component {
constructor(){
    super();
    this.state=({
        "Employees": [],
    })
  }
    componentDidMount(){
      Axios.get("http://localhost:4000/Employees")
      .then((res)=>{
        this.setState({
          Employees:res.data,
         
        })
   
      }).catch((e)=>{
        console.log(e)
      })

   
    }

  render() {
    let Employees =this.state.Employees
    return (
  <>
  <h1>EmployeesData </h1>
<table>
  <thead>
    <tr>
      <th>id</th>
      <th>EmployeeName</th>
      <th>salary</th>
      <th>companyName</th>
      <th>email id</th>
     <th>location</th>
    </tr>
  </thead>
<tbody>

  {
   Employees.map((emp)=>{
    return ( 
    <tr>
       <td>{emp.id}</td>
      <td>{emp.EmployeeName}</td>
      <td>{emp.salary}</td>
      <td>{emp.companyName}</td>
      <td>{emp.emailid}</td>
      <td>{emp.location}</td>
    </tr>)
   })
  }
 

  </tbody>
 </table>
  </>
    )
  }
}
