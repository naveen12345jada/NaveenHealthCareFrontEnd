import React, { useEffect, useState } from "react";
import banner from "../Images/DESK1-min.jpg";
import moduleCss from "./InnerPages.module.css";
import courseimage12 from "../Images/cu-2.jpg";
import banner2  from "../Images/DESK2.jpg"
import banner3  from "../Images/desk3-min.jpg"

import axios from "axios";
const Home = () => {
  const [lnews, setLnews] = useState([]);
  const [newBatches, setNewBatches] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/Lnews")
      .then((res) => {
        setLnews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/NewBatches")
      .then((res) => {
        setNewBatches(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <main>
<section className="container-fluid p-0">
<div className="carousel slide" id="mainslide" data-bs-ride="carousel" >

<ol class="carousel-indicators list-unstyled">
            <li data-bs-target="#mainslide" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#mainslide" data-bs-slide-to="1"></li>
            <li data-bs-target="#mainslide" data-bs-slide-to="2"></li>
        </ol>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner}alt="" className="w-100"></img>
    </div>
    <div className="carousel-item">
      <img src={banner2}alt="" className="w-100"></img>
    </div>
    <div className="carousel-item">
      <img src={banner3}alt="" className="w-100"></img>
    </div>
  </div>
  <button className="carousel-control-prev" data-bs-target="#mainslide" data-bs-slide="prev" >
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" data-bs-target="#mainslide" data-bs-slide="next" >
    <span className="carousel-control-next-icon"></span>
  </button>
  </div>

</section>
      <section className="container-fluid">
        <div>
          <marquee>
            {lnews.map((lne) => {
              return (
                
                <span key={lne.id}>{lne.lnews}</span>
                
              )})}
          </marquee>
        </div>
      </section>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-12 text-start text-capitalize mt-md-5">
            <h3 className={`${moduleCss.hometitle} mb-5`}>
              Welcome To <span>Elearn Infotech </span>
            </h3>

            <p>
              Hyderabad IT Training Training Institutes in Hyderabad vision for
              quality managements to consistently deliver high-quality solutions
              focused on improving customer satisfaction. To be an Software
              Training Institutes in Hyderabad, in dynamic equilibrium with its
              social, ecological and economic environment striving continuously
              for excellence in education. Hyderabad IT Training is targeting to
              become one the biggest and globally renowned training and learning
              Solutions Company which helps students build a reputed IT career
              and also assist IT organization to build up their workforce with
              more practical oriented resources. Mission The mission of quality
              management at Hyderabad IT Training Institute in Hyderabad, is to
              Training and Develop a new methods and standards Proactively
              communicate and share knowledge Apply the knowledge to enhance our
              products, processes, and services Continually monitor and improve
              our performance against set targets. Hyderabad IT Training gives
              the flexibility to organization making corporate Training more
              flexible, customized and economical that allows them to train a
              batch of candidates or as few candidates as you need depending on
              the business need – from a single individual, team or department
              to everyone in the organization.
            </p>

            <p>
              Hyderabad IT Training Training Institutes in Hyderabad vision for
              quality managements to consistently deliver high-quality solutions
              focused on improving customer satisfaction. To be an Software
              Training Institutes in Hyderabad, in dynamic equilibrium with its
              social, ecological and economic environment striving continuously
              for excellence in education. Hyderabad IT Training is targeting to
              become one the biggest and globally renowned training and learning
              Solutions Company which helps students build a reputed IT career
              and also assist IT organization to build up their workforce with
              more practical oriented resources. Mission The mission of quality
              management at Hyderabad IT Training Institute in Hyderabad, is to
              Training and Develop a new methods and standards Proactively
              communicate and share knowledge Apply the knowledge to enhance our
              products, processes, and services Continually monitor and improve
              our performance against set targets. Hyderabad IT Training gives
              the flexibility to organization making corporate Training more
              flexible, customized and economical that allows them to train a
              batch of candidates or as few candidates as you need depending on
              the business need – from a single individual, team or department
              to everyone{" "}
            </p>
          </div>
        </div>
        <div>
          <h3 className={`${moduleCss.hometitle} mb-5`}>
            Our<span>Courses</span>
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={moduleCss.boxshadow}>
              <img src={courseimage12} alt=""></img>
              <h6>Web Designing</h6>
            </div>
          </div>
        </div>
      </div>
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-2 "></div>
        <div className={`col-lg-8  ${ moduleCss.boottable}`}>
          <table className=" table col-lg-8 table table-bordered   ">
           <thead  >
            <tr className="table-primary">
          
              <th className="bg-primary">id</th>
              <th className="bg-primary">Course</th>
              <th className="bg-primary">Date</th>
              <th className="bg-primary">Timings</th>
              <th className="bg-primary">Duration</th>
              <th className="bg-primary">Trainer</th>
              <th className="bg-primary">Register for Demo</th>
             
            </tr>
           </thead>
           <tbody>
            {
      newBatches.map((batch)=>{
   return(
   <tr key={batch.id}>
    <td >{batch.id}</td>
    <td >{batch.Course}</td>
    <td >{batch.Date}</td>
    <td>{batch.Timings}</td>
    <td>{batch.Duration}</td>
    <td>{batch.Trainer}</td>
    <td>{batch.RegisterforDemo}</td>
      </tr>
          )
           })
          }     
           </tbody>
         
          </table>
         
        
          </div>
        </div>

        </div>



    </main>
  );
};

export default Home;
