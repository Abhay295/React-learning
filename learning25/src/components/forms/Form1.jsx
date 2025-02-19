import React from "react";
import { useForm } from "react-hook-form";

const Form1 = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "lightblue",
        height: "100%",
        fontFamily: "Outfit,serif",
      }}
    >
      <h1>Mysterious Package Request Form 📦</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{ fontSize: "20px", fontWeight: "600", marginTop: "2rem" }}
      >
        <div>
          Name
          <div className="row" style={{ width: "40rem", margin: "auto" }}>
            <div className="col">
              <input
                // required
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                {...register("name",{required:{value:true,message:"Name is required"}})}
              />
            </div>
            <div className="col">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                {...register("last name",{required:{value:true,message:"Enter last name"}})}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          Email
          <div
            className="col-sm-10"
            style={{ margin: "auto", width: "40.3rem" }}
          >
            <input
              required
              type="email"
              className="form-control"
              id="colFormLabel"
              placeholder="example@gmail.com"
              {...register("email")}
            />
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
        Preferred Size of Package
          <select
            required
            className="form-control"
            aria-label="Large select example"
            style={{ margin: "auto", width: "38.5rem" }}
            {...register("Size type")}
          >
            <option>Please Select</option>
            <option defaultValue="1">Small</option>
            <option defaultValue="2">Medium</option>
            <option defaultValue="3">Large</option>
            
          </select>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
        Would You Like a Dangerous Item?
          <div
            // required
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0.5rem",
              columnGap: "2rem",
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                // value="yes"
                id="flexRadioDefault1"
                {...register("item")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                // value="no"
                id="flexRadioDefault2"
                {...register("item")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                No
              </label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          Additional Services
          <div
            // required
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0.5rem",
              columnGap: "2rem",
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Horror & Paranormal"
                id="flexCheckDefault"
                {...register("add service")}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
              🎭 Horror & Paranormal
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Vintage & Antique"
                id="flexCheckChecked"
                {...register("add service")}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
              🎩 Vintage & Antique
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Sci-Fi & Futuristic"
                id="flexCheckChecked"
                {...register("add service")}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
              👽 Sci-Fi & Futuristic
              </label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          At what date and time?
          <div>
            <input
              required
              type="date"
              name="date"
              id="date"
              className="form-control"
              aria-label="Large select example"
              style={{ margin: "auto", width: "38.5rem" }}
            />
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <input
              required
              type="time"
              name="date"
              id="date"
              className="form-control"
              aria-label="Large select example"
              style={{ margin: "auto", width: "38.5rem" }}
            />
          </div>
        </div>

        <input
          type="submit"
          style={{ width: "8rem", margin: "2rem 0", fontWeight: "700" }}
        />
      </form>
    </div>
  );
};

export default Form1;