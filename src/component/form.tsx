import React from "react";
import { formDataType, useForm } from "../hooks/useForm";
import * as yup from "yup";

const Form = () => {
  const initialFormData = {
    username: "",
    password: "",
    email: "",
  };

  const validationSchema = {
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("email is required"),
  };

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username.value}
          onChange={(e) => handleChange("usename", e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
