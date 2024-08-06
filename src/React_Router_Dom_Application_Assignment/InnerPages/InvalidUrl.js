import React from 'react'
import moduleCss from "./InnerPages.module.css";
const InvalidUrl = () => {
  return (
    <div>
       <h3 className={moduleCss.InvalidUrl}> InvalidUrl: Please Try another Url</h3>
     {
      setTimeout(()=>{
       window.location='/';
      },3000)
     }
    </div>
  )
}

export default InvalidUrl