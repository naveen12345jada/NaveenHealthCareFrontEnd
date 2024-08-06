import React from 'react'
import modulecss from '../innerpages/style.module.css'
import pandoralogo from '../Images/download.png'
const Header2 = () => {
  return (
    <div>
    <section className={`${modulecss.Header2div} container-fluid`}>
      <p className={modulecss.animations}>Welcome To Pandora</p>
    </section>
    <section>
      <div className={`${modulecss.logo}container w-50`}>
        <img src={pandoralogo} alt='' className='w-25 m-0'></img>
      </div>
    </section>
    </div>
    
  )
}

export default Header2