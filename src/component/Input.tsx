import React from "react";

interface propsType {
  value: string;
  onChange: (field: string, value: string) => void;
  error?: string;
  placeholder: string;
  type: string;
  name: string;
}

const Input = ({
  value,
  onChange,
  error,
  placeholder,
  type,
  name,
}: propsType) => {
  return (
    <div style={{ height: "3rem" }}>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
      <div>{error}</div>
    </div>
  );
};

export default Input;
