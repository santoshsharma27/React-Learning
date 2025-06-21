import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
