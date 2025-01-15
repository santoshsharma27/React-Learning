import { useState } from "react";

function Order() {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  // Function to handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    // Set error message if more than 10 words
    if (e.target.value.length > 10) {
      setError("You can enter a maximum of 10 letters.");
    } else {
      setError(""); // Clear error if under 10 words
    }
  };

  // Handle radio button change
  const handleRadioChange = (event) => {
    const value = event.target.value;
    setShowInput(value === "yes");
    setText(""); // Reset input when switching between radio buttons
    setError(""); // Reset error when switching between radio buttons
  };

  return (
    <div className="pl-10 pt-10">
      <div className="m-auto">
        <p>
          Order Page, You can see this page because you are an authenticated
          user
        </p>
        <div className="flex flex-col gap-4 pt-8">
          <label className="flex gap-2">
            <input
              type="radio"
              name="text"
              value="yes"
              onChange={handleRadioChange}
            />
            Yes
          </label>
          {showInput && (
            <input
              type="text"
              placeholder="Enter text"
              className="w-full max-w-5xl rounded-md border border-blue-500 p-2 text-gray-700"
              value={text}
              onChange={handleChange}
            />
          )}
          {error && (
            <p className="text-sm text-red-500">{error}</p> // Display error message
          )}
          <label className="flex gap-2">
            <input
              type="radio"
              name="text"
              value="no"
              onChange={handleRadioChange}
            />
            No
          </label>
        </div>
      </div>
    </div>
  );
}

export default Order;
