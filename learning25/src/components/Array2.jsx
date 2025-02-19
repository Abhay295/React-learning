import React from 'react'

const Array2 = () => {

  const arr =  [
        {
          "name": "John Doe",
          "email": "johndoe@example.com",
          "age": 30
        },
        {
          "name": "Jane Smith",
          "email": "janesmith@example.com",
          "age": 25
        },
        {
          "name": "Alice Johnson",
          "email": "alicej@example.com",
          "age": 28
        },
        {
          "name": "Bob Williams",
          "email": "bobw@example.com",
          "age": 35
        },
        {
          "name": "Charlie Brown",
          "email": "charlieb@example.com",
          "age": 40
        }
      ]
      
  return (
    <div>
        {arr.map((a) =>{
            return(
                <div style={{textAlign:"center"}}>
                <h1>{a.name}</h1>
                <h2>{a.email}</h2>
                <h3>{a.age}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default Array2