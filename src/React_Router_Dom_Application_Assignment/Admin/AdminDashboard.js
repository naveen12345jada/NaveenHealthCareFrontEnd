import React from 'react'
import moduleCss from "../InnerPages/InnerPages.module.css";

import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    
  

    return (
        <>
          <div>
            <div className={moduleCss}>
              <div className={moduleCss.breadCrumb}>
                <h3> Welcome to AdminDashboard</h3>
              </div>
            </div>
          </div>
    
          <div className="container-fluid my-5 ">
            <div className="row">
              <div className="col-lg-3">
               <AdminSidebar></AdminSidebar>
              </div>
                <div className="col-lg-7">
               <Outlet></Outlet>
              </div>
            </div>
          </div>
        </>
      );
    }

export default AdminDashboard;