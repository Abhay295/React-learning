import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Apidemo1 = () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const getUserData = async () => {
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    setMessage(res.data.message);
    setUsers(res.data.data);
    setisLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, [""]);

  const deleteUser = async (id) => {
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    toast("💣User deleted successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    getUserData();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      {isLoading == false && <h1>Api demo</h1>}

      {/* <h1>Api demo</h1> */}
      {isLoading === false && (
        <table className="table table-dark mt-5">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Active</th>
              <th>Version</th>
              <th>Action</th>
            </tr>
          </thead>
          {users.map((user) => {
            return (
              <tbody>
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.isActive == true ? "true" : "false"}</td>
                  <td>{user.__v}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
      {isLoading == true ? <Loader /> : ""}
    </div>
  );
};

export default Apidemo1;
