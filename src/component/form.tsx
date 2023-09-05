import React from "react";
import { formDataType, useForm } from "../hooks/useForm";

const Form = () => {
  const initialFormData = {
    username: "",
    password: "",
    email: "",
  };

  const { formData, errors, handleChange, handleSubmit } =
    useForm(initialFormData);

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
