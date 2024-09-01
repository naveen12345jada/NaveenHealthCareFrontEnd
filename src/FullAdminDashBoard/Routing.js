import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import AdminHome from './AdminHome/AdminHome';
import AboutUs from './AdminHome/AboutUs';
import Treatment from './AdminHome/Treatment';
import BookAppointment from './AdminHome/BookAppointment';
import ContactUs from './AdminHome/ContactUs';
import AdminHomeMain from './AdminHome/Admin/AdminHomeMain';
import AdminDashboard from './AdminHome/Admin/AdminDashboard';
import AddTreatment from './AdminHome/Admin/AdminTreatment/AddTreatment';
import DeleteTreatment from './AdminHome/Admin/AdminTreatment/DeleteTreatment';
import EditTreatment from './AdminHome/Admin/AdminTreatment/EditTreatment';

import AddDoctor  from './AdminHome/Admin/AdminDoctor/AddDoctor'
import EditDoctor  from './AdminHome/Admin/AdminDoctor/EditDoctor'
import DeleteDoctor  from './AdminHome/Admin/AdminDoctor/DeleteDoctor'


import  DeleteAppointment from './AdminHome/Admin/AdminAppointment/DeleteAppointment';
import   EditAppointment from './AdminHome/Admin/AdminAppointment/EditAppointment';

import AddOffer from './AdminHome/Admin/AdminOffer/AddOffer';
import DeleteOffer from './AdminHome/Admin/AdminOffer/DeleteOffer';
import EditOffer from './AdminHome/Admin/AdminOffer/EditOffer';
import EditTreatment2 from './AdminHome/Admin/AdminTreatment/EditTreatment2';
import EditDoctor2 from './AdminHome/Admin/AdminDoctor/EditDoctor2';
import EditOffer2 from './AdminHome/Admin/AdminOffer/EditOffer2';
import EditAppointment2 from './AdminHome/Admin/AdminAppointment/EditAppointment2';


const Routing = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/forgot" element={<ForgotPassword/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Treatment" element={<Treatment/>} />
        <Route path="/BookAppointment" element={<BookAppointment/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Admin" element={<AdminHomeMain/>} />
        <Route path='/AdminHome' element={<AdminHome></AdminHome>}/>
        {/* parent route */}


          {/* edit treatment not to give in subroutes  directly we need to give as parent route  */}
        <Route path='/EditTreatment/:sno' element={<EditTreatment></EditTreatment>}></Route>  
  {/* edit Doctor not to give in subroutes  directly we need to give as parent route  */}
        <Route path='/EditDoctor/:sno' element={<EditDoctor></EditDoctor>}></Route> 
     <Route  path='/EditOffer/:sno'  element={<EditOffer></EditOffer>}></Route> 
     <Route  path='/EditAppointment/:sno'  element={<EditAppointment></EditAppointment>}></Route>

        <Route path='/AdminDashboard' element={<AdminDashboard></AdminDashboard>}>  
          <Route  path=''  element={<AddTreatment></AddTreatment>}></Route> 
          <Route path='DeleteTreatment' element={<DeleteTreatment></DeleteTreatment>}></Route>
          <Route path='EditTreatment2' element={<EditTreatment2></EditTreatment2>}></Route>
     

          
          <Route  path='DeleteAppointment'  element={<DeleteAppointment></DeleteAppointment>}></Route> 
          <Route  path='EditAppointment'  element={<EditAppointment2></EditAppointment2>}></Route> 


          <Route  path='AddDoctor'  element={<AddDoctor></AddDoctor>}></Route> 
          <Route  path='DeleteDoctor'  element={<DeleteDoctor></DeleteDoctor>}></Route> 
           <Route  path='EditDoctor'  element={<EditDoctor2></EditDoctor2>}></Route>  
         
          
          <Route  path='AddOffer'  element={<AddOffer></AddOffer>}></Route> 
          <Route  path='DeleteOffer'  element={<DeleteOffer></DeleteOffer>}></Route> 
          <Route path='EditOffer'  element={<EditOffer2></EditOffer2>}></Route>

          </Route>
      </Routes>
    
  );
};

export default Routing;
