import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const PostApiDemo2 = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    const res = await axios.post("https://node5.onrender.com/user/user", data);
    console.log(res.data.data);
    {
      if (res.status == 201) {
        alert("data added....");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input type="text" {...register("age")} />
        </div>
        <div>
          <label htmlFor="">isActive</label>
          <input type="text" {...register("isActive")} />
        </div>
        <button type="submit">post</button>
      </form>
    </div>
  );
};

export default PostApiDemo2;
