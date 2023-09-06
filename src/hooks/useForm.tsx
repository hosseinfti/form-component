import React, { useState } from "react";
import isEqual from "lodash/isEqual";
import * as yup from "yup";

interface formFieldType {
  name: string;
  value: any;
}

export interface formDataType {
  [field: string]: string;
}

interface formErrorsType {
  [field: string]: string | undefined;
}

interface validationType {
  isValid: boolean;
  errors: formErrorsType[];
}

const createFormInitialData = (initialValues: { [field: string]: string }) => {
  let initialData: formDataType = {};
  for (let field in initialValues) {
    initialData[field] = initialValues[field];
  }
  return initialData;
};

export const useForm = (
  initialFormData: { [field: string]: string },
  validationSchema: yup.Schema,
  onSubmit: (submitData: formDataType) => void
) => {
  const [formData, setFormData] = useState<formDataType>(
    createFormInitialData(initialFormData)
  );
  const [errors, setErrors] = useState<formErrorsType>({});

  const handleChange = (field: string, value: string) => {
    if (!isEqual(value, formData[field])) {
      setFormData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const validation: validationType = await validationSchema.validate(
        formData
      );
      if (validation) {
        onSubmit(formData);
      }
    } catch (error: any) {
      console.log({ error });

      const currentErrors: formErrorsType = {};
      if (error.path) {
        currentErrors[error.path] = error.message;
      }
      setErrors(currentErrors);
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};
