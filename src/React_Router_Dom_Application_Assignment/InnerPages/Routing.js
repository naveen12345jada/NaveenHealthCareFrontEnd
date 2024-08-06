import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Course12 from './Course12'
import GalleryComp from './GalleryComp'
import InvalidUrl from './InvalidUrl'
import Admin from '../Admin/Admin'
import AdminDashboard from '../Admin/AdminDashboard'
import AddLnews from '../Admin/AddLnews'
import DeleteLnews from '../Admin/DeleteLnews'
import AddNewBatches from '../Admin/AddNewBatches'
import DeleteOldbatches from '../Admin/DeleteOldbatches'
import Editlnews from '../Admin/Editlnews'
import EditNewBatch from '../Admin/EditNewBatch'
const Routing = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/about' element={<AboutUs></AboutUs>}/>
    <Route path='/courses' element={<Course12></Course12>}/>
    <Route path='/gallery'element={<GalleryComp></GalleryComp>}/>
    <Route path='/contact' element={<ContactUs></ContactUs>}/>
    <Route path="/editlnews/:sno"element={<Editlnews/>}/>
    <Route path="/EditNewBatch/:sno"element={<EditNewBatch/>}/>


    <Route path='/Admin' element={<Admin></Admin>}/>
    <Route path='/AdminDashboard' element={<AdminDashboard></AdminDashboard>}>
    <Route path="" element={<AddLnews></AddLnews>}/>
    <Route path="edit&deletelnews" element={<DeleteLnews></DeleteLnews>}/>
    <Route path="AddNewBatches" element={<AddNewBatches></AddNewBatches>}/>
    <Route path="editDeleteNewBatches" element={<DeleteOldbatches></DeleteOldbatches>}/>
 
    </Route>
   <Route path='*' element={<InvalidUrl></InvalidUrl>}/>


    
</Routes>
    </div>
  )
}

export default Routing;