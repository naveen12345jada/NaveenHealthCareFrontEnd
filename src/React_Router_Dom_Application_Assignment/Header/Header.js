import React from 'react'
import logo from '../Images/logo.jpg'
import { NavLink } from 'react-router-dom'
import InnerPages from  '../InnerPages/InnerPages.module.css'
const Header = () => {
  return (
    <div className={`${InnerPages} position-sticky top-0 bg-white`}>
        <nav className="navbar navbar-expand-lg p-1">
        <div className="container">
    <img src={logo} alt='img'></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-group " />
        <li className="nav-item list-group-item bg-success m-2 mt-3 text-light rounded">
          <NavLink className="nav-link  m-2 " aria-current="page" to="/">HOME </NavLink>
        </li>
        <li className="nav-item list-group-item bg-success m-2 mt-3 text-light rounded">
        <NavLink className="nav-link m-2 " to="/about">ABOUTUS</NavLink>
          
        </li>
        <li className="nav-item list-group-item bg-success m-2 mt-3 text-light rounded">
          <NavLink className="nav-link m-2" to="/courses">COURSES</NavLink>
          
        </li>
        <li className="nav-item list-group-item bg-success m-2 mt-3  text-light rounded">
          <NavLink className="nav-link m-2" to="/gallery">GALLERY</NavLink>
          
        </li>
        
        <li className="nav-item list-group-item bg-success m-2 mt-3 text-light rounded">
          <NavLink className="nav-link m-2 " to="/contact">CONTACT</NavLink>
          
        </li>
        <li className="nav-item list-group-item bg-success m-2 mt-3 text-light rounded">
          <NavLink className="nav-link m-2 " to="/Admin">ADMIN</NavLink>
          
        </li>
        
       
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header