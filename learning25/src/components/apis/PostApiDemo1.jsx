import axios from 'axios'
import React from 'react'


const PostApiDemo1 = () => {

    const userObj = {
        name:"abhay",
        email : "abhay911@gmail.com",
        age:21,
        isActive:true

    }

    const postUserData = async () =>{
        const res = await axios.post("https://node5.onrender.com/user/user",userObj)
        console.log(res.data.data);
        
        
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>POST API</h1>
        <button onClick={() => postUserData()}>Post</button>
    </div>
  )
}

export default PostApiDemo1