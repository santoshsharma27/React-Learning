const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  errorMessage = "",
  required = false,
  width = "w-full", // Default is full width, but can be customized
  className = "",
}) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${width} ${
          errorMessage
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
