import React from 'react'
import InnerPages from  '../InnerPages/InnerPages.module.css'
const Footer12 = () => {
  return (
    <div>
       <footer className='postion-fixed bottom-0'>
      <div className={InnerPages} >
      <div className='container'>
        <div className='row '>
            < div className='col-xs-12 col-sm-12 col-md-6 '>
            <p  className={ InnerPages.textpara}><i class="bi bi-c-circle"></i> copy  2024 Elearn Infotech</p>
            
            </div>
            < div className='col-md-6 '>
            <p className={`  ${ InnerPages.textpara}`}>designed by: Jada Naveen Kumar</p>
            </div>
        </div>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Footer12