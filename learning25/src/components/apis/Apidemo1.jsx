import React, { useState } from "react";
import axios from "axios";

const Apidemo1 = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setMessage(res.data.message);
    setUsers(res.data.data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Api demo</h1>
      <button onClick={() => getUserData()}>Get</button>
      <p>{message}</p>
      <table className='table table-dark mt-5' >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Version</th>
                </tr>
            </thead>
      {users.map((user) => {
        return <tbody>
            <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td >{user.isActive == true ? "true" : "false"}</td>
                <td>{user.__v}</td>
            </tr>
        
        </tbody>;
      })}
      </table>
    </div>
  );
};

export default Apidemo1;
