import React from 'react'
import Header from './Header'
import Footer from './Footer'
import modulecss from './Style.module.css'
import banner1 from '../Images/banner1.jpg'
import banner2 from '../Images/Healthcare4.jpg'
import banner3 from '../Images/baneerr4.webp'
import banner4 from '../Images/bookAppointment.avif'



const AdminHome = () => {
  return (
    <div className={modulecss}>


   <Header></Header>
   <div className='m-0'>
      <div className={modulecss}>
        <div className={modulecss.breadCrumb}>
          <h3 className='text-white m-0'> Welcome To Health Care Hospital</h3>
        </div>
      </div>
     </div>

     <section className="container-fluid p-0 m-0">
<div className="carousel slide" id="mainslide" data-bs-ride="carousel" >

<ol class="carousel-indicators list-unstyled">
            <li data-bs-target="#mainslide" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#mainslide" data-bs-slide-to="1"></li>
            <li data-bs-target="#mainslide" data-bs-slide-to="2"></li>
        </ol>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1}alt="" className={modulecss.banner}></img>
    </div>
    <div className="carousel-item">
      <img src={banner2}alt="" className={modulecss.banner}></img>
    </div>
    <div className="carousel-item">
      <img src={banner3}alt="" className={modulecss.banner}></img>
    </div>
  </div>
  <button className={`carousel-control-prev`}  data-bs-target="#mainslide" data-bs-slide="prev" >
    <span className={`carousel-control-prev-icon ${modulecss.carouseliconprev} `}></span>
  </button>
  <button className={`carousel-control-next `} data-bs-target="#mainslide" data-bs-slide="next" >
    <span className={`carousel-control-next-icon ${modulecss.carouselcontrolnext}`}></span>
  </button>
  </div>

</section>
        <div className='container mt-5 mb-5'>
          <h1 > Our  <span className='text-danger'>Procedures</span></h1>
        </div>
        <div className='container mt-5 mb-5'>
          <h1>Latest  <span className='text-danger'>News </span></h1>
        </div>
      

      <div className='container'>
        <div className='row'>
         <h1 className='mt-5 mb-5 '>Book  <span className='text-danger'>Appointment</span></h1>
         <div className='co-12 col-lg-6  mb-5'>
        <img src={banner4} alt=''className='mb-5 w-100'></img>
         </div>
      


         <div className='co-12 col-lg-6 mb-5 mt-5'>
          <input type='text' className='form-control mb-3 mb-3' placeholder='Id' ></input>
          <input type='text' className='form-control mb-3' placeholder='PatientName' ></input>
          <input type='Date' className='form-control mb-3' placeholder='Choose Date of Appointment'></input>
          <input type='text' className='form-control mb-3' placeholder='Subject'></input>
          <textarea  className='form-control mb-3' placeholder='message'></textarea>
         <input type='button' value="submit" className=' form-control mb-3 text-bg-success'></input>
         </div>
         </div>
      </div>

   <Footer></Footer>
  
    </div>
  )
}

export default AdminHome