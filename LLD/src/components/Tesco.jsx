import { useState } from "react";

const arr = [-1, -10, -100, 1, 10, 100];

export default function Tesco() {
  const [count, setCount] = useState(0);
  const [stack, setStack] = useState([]); // stores previous count values
  const [history, setHistory] = useState([]); // stores clicked button values

  function handleIncrement(value) {
    setStack((prev) => [...prev, count]); // save current count before change
    setCount((prev) => prev + value); // update count
    setHistory((prev) => [...prev, value]); // log the button pressed
  }

  function undoHandler() {
    if (stack.length === 0) return;

    const newStack = [...stack];
    const lastCount = newStack.pop();

    setCount(lastCount);
    setStack(newStack);

    setHistory((prevHistory) => prevHistory.slice(0, -1)); // remove last button press
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
      <div className="mt-8 w-full max-w-md rounded-lg border border-gray-300 p-4 shadow-sm">
        <h3 className="mb-2 text-center text-xl font-semibold text-gray-800">
          History
        </h3>
        <div className="flex max-h-48 flex-col gap-2 overflow-y-auto">
          {history.map((val, i) => (
            <span
              key={i}
              className="rounded bg-gray-100 px-3 py-1 text-gray-700 shadow-sm"
            >
              {val}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
