import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [onSubmitted, setOnSubmitted] = useState(false);
  const [output, setOutput] = useState();

  const submitHandler = (data) => {
    console.log(data);
    setOutput(data);
    setOnSubmitted(true);
  };

  const validationSchema = {
    nameValidator: {
      required: {
        value: true,
        message: "name is required",
      },
    },
    emailValidator: {
      required: {
        value: true,
        message: "email is required",
      },
    },
    phoneVerification: {
      required: {
        value: true,
        message: "Enter a contact",
      },
      maxLength: {
        value: 10,
        message: "max length is 10",
      },
      pattern: {
        value: /[6-9]{1}[0-9]{9}/,
        message: "Phone number is not valid",
      },
    },
    refValidation: {
      required: {
        value: true,
        message: "Enter a referal code",
      },
      validate: (value) => {
        return value == "akshay" || "pls enter dwq564dew865dwe referal code";
      },
    },
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
      <h1 style={{ textAlign: "center" }}>
        Haunted House Visit Waiver Form 👻🏚️
      </h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{ fontSize: "20px", fontWeight: "600", marginTop: "2rem" }}
      >
        <div>
          <div style={{ marginTop: "1.5rem" }}>
            <div
              className="col-sm-10"
              style={{ margin: "auto", width: "40.3rem" }}
            >
              <label>Enter your fullname</label>
              <input
                type="text"
                class="form-control"
                placeholder="ex. John Doe "
                {...register("fName", {
                  required: { value: true, message: "Fullname is required*" },
                })}
              />
              <span style={{ color: "red" }}>{errors.fName?.message}</span>
            </div>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <div
              className="col-sm-10"
              style={{ margin: "auto", width: "40.3rem" }}
            >
              <label>Enter your Email</label>
              <input
                type="Email"
                class="form-control"
                placeholder="ex. abcde12@gmail.com "
                {...register("Email", validationSchema.emailValidator)}
              />
              <span style={{ color: "red" }}>{errors.Email?.message}</span>
            </div>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <div
              className="col-sm-10"
              style={{ margin: "auto", width: "40.3rem" }}
            >
              <label>Have You Ever Had a Paranormal Experience?</label>
              <br />
              <input
                type="radio"
                name="Exp"
                value="yes"
                class="form-check-input"
                {...register("Experience")}
              />
              <label htmlFor="" class="form-check-label">
                Yes
              </label>
              <input
                style={{ marginLeft: "2rem" }}
                type="radio"
                name="Exp"
                value="no"
                class="form-check-input"
                {...register("Experience")}
              />
              <label
                style={{ marginLeft: "3rem" }}
                htmlFor=""
                class="form-check-label"
              >
                No
              </label>
            </div>
          </div>
          <div
            style={{ marginTop: "1.5rem", margin: "auto", width: "38.5rem" }}
          >
            How Easily Do You Get Scared?
            <select
              required
              className="form-control"
              aria-label="example select very"
              style={{ margin: "auto", width: "38.5rem" }}
              {...register("Select")}
            >
              <option>Please Select</option>
              <option defaultValue="1">Not at all</option>
              <option defaultValue="2">A little</option>
              <option defaultValue="3">Very</option>
            </select>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <div
              className="col-sm-10"
              style={{ margin: "auto", width: "40.3rem" }}
            >
              <label>Do You Want a Personal Ghost Encounter?</label>
              <br />
              <input
                type="radio"
                name="Enc"
                value="yes"
                class="form-check-input"
                {...register("Encounter")}
              />
              <label htmlFor="" class="form-check-label">
                Yes
              </label>
              <input
                style={{ marginLeft: "2rem" }}
                type="radio"
                name="Enc"
                value="no"
                class="form-check-input"
                {...register("Encounter")}
              />
              <label
                style={{ marginLeft: "3rem" }}
                htmlFor=""
                class="form-check-label"
              >
                No
              </label>
            </div>
          </div>
          <div
            className="col-sm-10"
            style={{ margin: "auto", width: "40.3rem" }}
          >
            <label htmlFor="">Emergency Contact</label>
            <br />
            <input
              type="textarea"
              {...register("contact", validationSchema.phoneVerification)}
            />
            <span style={{ color: "red" }}>{errors.contact?.message}</span>
          </div>
          <div
            className="col-sm-10"
            style={{ margin: "auto", width: "40.3rem" }}
          >
            <label htmlFor="">Referal Code</label>
            <br />
            <input
              type="text"
              {...register("ref", validationSchema.refValidation)}
              placeholder="Enter ur referal code"
            />
          </div>
          <span style={{ color: "Red" }}>{errors.ref?.message}</span>
          <div
            className="col-sm-10"
            style={{ margin: "auto", width: "40.3rem" }}
          >
            <input type="checkbox" {...register("Agreement")} />
            <label htmlFor="" style={{ marginLeft: "1rem" }}>
              Agreement to Enter at Your Own Risk
            </label>
          </div>
        </div>
        <input
          type="submit"
          required
          style={{
            width: "8rem",
            margin: "2rem 0",
            fontWeight: "700",
            textAlign: "center",
          }}
        />
      </form>
      {
        (onSubmitted == true ? (
          <div>
            <h1>Name = {output?.fName}</h1>
            <h1>Email = {output?.Email}</h1>
          </div>
        ) : 
          ""
        )
      }
    </div>
  );
};

export default Form2;
