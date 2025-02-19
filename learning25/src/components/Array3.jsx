import React from 'react'

const Array3 = () => {

    const arr = [
        {
          "id": 1,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "age": 30,
          "salary": 45000
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "email": "janesmith@example.com",
          "age": 25,
          "salary": 38000
        },
        {
          "id": 3,
          "name": "Alice Johnson",
          "email": "alicej@example.com",
          "age": 28,
          "salary": 50000
        },
        {
          "id": 4,
          "name": "Bob Williams",
          "email": "bobw@example.com",
          "age": 35,
          "salary": 42000
        },
        {
          "id": 5,
          "name": "Charlie Brown",
          "email": "charlieb@example.com",
          "age": 40,
          "salary": 39000
        }
      ]
      

  return (
    
    <div >
        <h1 style={{textAlign:"center"}}>Employee List</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((a) =>{
                        return(
                            <tr>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td style={{backgroundColor:a.email.startsWith("j") ? "green":""}}>{a.email}</td>
                                <td>{a.age}</td>
                                <td style={{color:a.salary>39000 ? "blue" : "white"}}>{a.salary}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    </div>
  )
}

export default Array3