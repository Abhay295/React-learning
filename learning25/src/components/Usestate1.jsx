import React, { useState } from 'react'

const Usestate1 = () => {
    const [count,setCount]=useState(0)
    function test (){
        console.log("this is test");
        
    }

    function increase(){
        setCount(count+1)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Usestate demo</h1>
        <button onClick={() =>{increase()}}>increase</button>
        <h1> {count}</h1>
    </div>
  )
}

export default Usestate1