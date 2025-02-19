import React from 'react'
import "../assets/content.css"
const Content = () => {
    
  var name = "abhay";
  var age = 21;
  var isActive = true;
  return (
    <div className='content'>
         <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isActive == true ? "Active" : "not active"}</h1>
    </div>
  )
}

export default Content