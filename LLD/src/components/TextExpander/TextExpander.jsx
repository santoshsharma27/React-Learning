/* eslint-disable react/prop-types */
import { useState } from "react";

function TextExpander({
  collapsedNumWords = 10,
  buttonColor = "text-blue-500",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  // Determine the displayed text based on whether it’s expanded or not
  const displayText = isExpanded
    ? children
    : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`;

  // Toggle function to switch between expanded and collapsed states
  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  return (
    <div className={`text-gray-800 ${className}`}>
      <p className="mb-2">{displayText}</p>
      <button
        onClick={toggleExpansion}
        className={`font-semibold hover:underline focus:outline-hidden ${buttonColor}`}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default TextExpander;
