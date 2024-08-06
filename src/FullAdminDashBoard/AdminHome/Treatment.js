import React from 'react'

import modulecss from './Style.module.css'
import Header from './Header'
import Footer from './Footer'

const Treatment = () => {
  return (
    <div> <Header></Header>

    <div>
       <div className={modulecss}>
         <div className={modulecss.breadCrumb}>
           <h3 className='text-white'> Treatment</h3>
         </div>
       </div>
      </div>
       
       <div className='container mt-5'>
       <h3 > Our  <span className='text-danger'>Treatments</span></h3>
       </div>

    <Footer></Footer></div>
  )
}

export default Treatment