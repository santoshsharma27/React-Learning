import { useState } from "react";

const arr = [-1, -10, -100, 1, 10, 100];

export default function Tesco() {
  const [count, setCount] = useState(0);
  const [stack, setStack] = useState([]);

  function handleIncrement(value) {
    setStack((prev) => [...prev, count]);
    setCount((prev) => prev + value);
  }

  function undoHandler() {
    setStack((prevStack) => {
      const newStack = [...prevStack];
      const lastValue = newStack.pop();
      if (lastValue !== undefined) {
        setCount(lastValue);
      }
      return newStack;
    });
  }

  return (
    <div className="flex flex-col items-center justify-center p-32">
      <h1 className="mb-4 text-3xl font-bold">Counter App</h1>
      <span className="mb-6 text-4xl font-semibold text-blue-700">{count}</span>
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {arr.map((num, i) => (
          <button
            onClick={() => handleIncrement(num)}
            key={i}
            className="w-16 cursor-pointer rounded bg-blue-500 px-4 py-2 font-medium text-white transition duration-200 hover:bg-blue-600"
          >
            {num}
          </button>
        ))}
      </div>
      <button
        onClick={undoHandler}
        className="cursor-pointer rounded bg-red-500 px-6 py-2 font-medium text-white transition duration-200"
      >
        Undo
      </button>
    </div>
  );
}
