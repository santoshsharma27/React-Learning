import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;
