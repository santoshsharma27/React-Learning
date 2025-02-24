import { useState } from "react";
import InputField from "./InputField";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email format!";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        errorMessage={errors.email}
        width="w-full"
        required
        className="px-5 pb-8"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        errorMessage={errors.password}
        width="w-full"
        className="px-5"
        required
      />
      {/* <button
        type="submit"
        className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Submit
      </button> */}
    </form>
  );
};

export default FormComponent;
