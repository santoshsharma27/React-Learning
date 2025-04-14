import { useState } from "react";

const arr = ["apple", "orange", "banana"];

function Cart() {
  const [inputValue, setInputValue] = useState("");
  const [matchedFruits, setMatchedFruits] = useState("");

  function handleInput(e) {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    // Filter the array for any fruit that includes the input
    const matches = arr.filter((fruit) => fruit.includes(value));
    setMatchedFruits(matches.join(" "));
  }

  return (
    <>
      <div className="p-10 text-center">
        Cart Page, You can see this page because you&apos;re an authenticated
        user
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-[50%] border border-gray-300 px-5 py-2"
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Search for a fruit..."
        />

        {matchedFruits && (
          <div className="mt-2 text-green-500">✔ Found: {matchedFruits}</div>
        )}
      </div>
    </>
  );
}

export default Cart;
