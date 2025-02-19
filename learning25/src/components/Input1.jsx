import React, { useState } from 'react'

const Input1 = () => {
    const [name,setName] = useState("");
    const [age, setage] = useState("");
    const [number, setnumber] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");

  return (
    <div style={{textAlign:"center"}}>
        <h1>Input</h1>
        <label htmlFor="">Name : </label>
        <input type="text" placeholder='Enter your name' onChange={(e) => {setName(e.target.value)}}/>
        <br />
        {name}
        <br />
        <label htmlFor="">Age : </label>
        <input type="text" placeholder='Enter your age' onChange={(e) => {setage(e.target.value)}}/>
        <br />
        {age}
        <br />
        <label htmlFor="">Number : </label>
        <input type="text" placeholder='Enter your Number' onChange={(e) => setnumber(e.target.value)}/>
        <br />
        {number}
        <br />
        <label htmlFor="">Email : </label>
        <input type="email" placeholder='Enter your email' onChange={(e) => setemail(e.target.value)}/>
        <br />
        {email}
        <br />
        <label htmlFor="">Address : </label>
        <input type="text" placeholder='Enter your address' onChange={(e) => setaddress(e.target.value)}/>
        <br />
        {address}
    </div>
  )
}

export default Input1