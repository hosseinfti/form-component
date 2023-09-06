import React from "react";
import { formDataType, useForm } from "../hooks/useForm";
import * as yup from "yup";

const Form = () => {
  const initialFormData = {};

  const validationSchema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("email is required"),
  });

  const onSubmit = (formData: formDataType) => {
    // do something you want after click submit
    console.log("submited data", formData);
  };

  const { formData, errors, handleChange, handleSubmit } = useForm(
    initialFormData,
    validationSchema,
    onSubmit
  );

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div style={{ height: "3rem" }}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
          <div>{errors?.username}</div>
        </div>
        <div style={{ height: "3rem" }}>
          <input
            placeholder="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          <div>{errors?.password}</div>
        </div>
        <div style={{ height: "3rem" }}>
          <input
            placeholder="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <div>{errors?.email}</div>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
