import React, { useState } from "react";
import isEqual from "lodash/isEqual";
import * as yup from "yup";

interface formFieldType {
  name: string;
  value: any;
}

export interface formDataType {
  [field: string]: formFieldType;
}

interface formErrorType {
  [field: string]: string | undefined;
}

interface validationType {
  isValidate: boolean;
  error: formErrorType;
}

const createFormInitialData = (initialValues: { [field: string]: string }) => {
  let initialData: formDataType = {};
  for (let field in initialValues) {
    initialData[field] = { name: field, value: initialValues[field] };
  }
  return initialData;
};

export const useForm = (
  initialFormData: { [field: string]: string },
  validationSchema: yup.Schema<formFieldType>,
  onSubmit: (submitData: formDataType) => void
) => {
  const [formData, setFormData] = useState<formDataType>(
    createFormInitialData(initialFormData)
  );
  const [errors, setErrors] = useState<formErrorType>({});

  const handleChange = (field: string, value: string) => {
    if (isEqual(value, formData[field].value)) {
      setFormData((prevState) => ({
        ...prevState,
        [field]: { ...prevState[field], value: value },
      }));
    }
  };

  const handleSubmit = () => {};

  return { formData, errors, handleChange, handleSubmit };
};
