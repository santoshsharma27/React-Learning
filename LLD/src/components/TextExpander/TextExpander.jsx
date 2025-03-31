/* eslint-disable react/prop-types */
import { useState } from "react";

function TextExpander({
  collapsedNumWords = 10, // Default number of words to show when collapsed
  buttonColor = "text-blue-500", // Default button color
  expanded = false, // Default expanded state
  className,
  children, // Text content passed to the component
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  // Determine the displayed text based on whether it’s expanded or not
  const displayText = isExpanded
    ? children
    : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`;

  // Toggle function to switch between expanded and collapsed states
  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  return (
    <div className={`${className} text-gray-800`}>
      <p className="mb-2">{displayText}</p>
      <button
        onClick={toggleExpansion}
        className={`font-semibold ${buttonColor} hover:underline focus:outline-none`}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default TextExpander;
