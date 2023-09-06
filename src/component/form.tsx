import React from "react";
import { formDataType, useForm } from "../hooks/useForm";
import * as yup from "yup";
import Input from "./Input";

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

  const formFields = [
    { placeholder: "username", name: "username", type: "text" },
    { placeholder: "password", name: "password", type: "password" },
    { placeholder: "email", name: "email", type: "text" },
  ];

  return (
    <div>
      <form
        data-testid="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {formFields.map((field) => {
          return (
            <Input
              placeholder={field.placeholder}
              type={field.type}
              value={formData[field.name]}
              onChange={handleChange}
              name={field.name}
              error={errors[field.name]}
            />
          );
        })}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
