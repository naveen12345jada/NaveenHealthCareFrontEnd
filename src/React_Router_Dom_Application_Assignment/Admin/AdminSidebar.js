import React from 'react'
import { NavLink } from 'react-router-dom'
import  modulecss from '../InnerPages/InnerPages.module.css'
const AdminSidebar = () => {
  return (
    <>
       <div className={modulecss}>
        <ul >
            <li >
                <NavLink to="" className={modulecss.navtext}  >AddLnews</NavLink>
            </li>
            <li>
                <NavLink to="edit&deletelnews" className={modulecss.navtext}>editDelete Lnews</NavLink>
            </li>
            <li>
                <NavLink to="AddNewBatches" className={modulecss.navtext} > Add NewBatches</NavLink>
            </li>
            <li>
                <NavLink to="editDeleteNewBatches" className={modulecss.navtext}>edit Delete oldBatches </NavLink>
            </li>
        </ul>
       </div>
    </>
  )
}

export default AdminSidebar