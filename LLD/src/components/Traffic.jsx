import { useEffect, useState } from "react";

const Traffic = () => {
  const [isActiveLight, setIsActiveLight] = useState("red");
  const [timer, setTimer] = useState(0);
  const [additionalTime, setAdditionalTime] = useState(0);

  const trafficLight = {
    red: {
      next: "yellow",
      time: 10,
    },
    yellow: {
      next: "green",
      time: 5,
    },
    green: {
      next: "red",
      time: 15,
    },
  };

  useEffect(() => {
    // Initialize the timer when the light changes
    setTimer(trafficLight[isActiveLight].time);

    // Countdown timer effect
    const countdown = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          // When the timer reaches 0, switch to the next light
          setIsActiveLight(trafficLight[isActiveLight].next);
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [isActiveLight]);

  const lightHandler = (color) => {
    setIsActiveLight(color);
  };

  // Function to handle the user's input time and add it to the current timer
  const handleAddTime = () => {
    if (additionalTime > 0) {
      setTimer((prevTime) => prevTime + parseInt(additionalTime));
      setAdditionalTime(0);
    }
  };

  return (
    <div>
      <h1 className="pt-5 text-center text-4xl font-bold">Trafic Light</h1>
      <div className="pt-5 text-center">
        <p className="pb-10 text-2xl">Time remaining: {timer} seconds</p>
      </div>
      <div className="justify-center gap-2 pb-12 md:flex">
        <button
          className="rounded-md border bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          onClick={() => {
            lightHandler("red");
          }}
        >
          Red
        </button>
        <button
          className="rounded-md border bg-yellow-300 px-5 py-2 text-white hover:bg-yellow-400"
          onClick={() => {
            lightHandler("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="rounded-md border bg-green-600 px-5 py-2 text-white hover:bg-green-700"
          onClick={() => {
            lightHandler("green");
          }}
        >
          Green
        </button>
        <input
          type="number"
          className="rounded-md border px-2"
          value={additionalTime}
          onChange={(e) => setAdditionalTime(e.target.value)}
          placeholder="Add time (seconds)"
        />
        <button
          onClick={handleAddTime}
          className="rounded-md border bg-slate-500 px-2 text-white"
        >
          Add Time
        </button>
      </div>
      <div className="flex cursor-pointer flex-col items-center justify-center gap-5">
        {/* Red Light */}
        <p
          className={`h-10 w-10 rounded-full bg-red-500 ${isActiveLight === "red" ? "opacity-100" : "opacity-20"}`}
        ></p>
        {/* Yellow Light */}
        <p
          className={`h-10 w-10 rounded-full bg-yellow-300 ${isActiveLight === "yellow" ? "opacity-100" : "opacity-20"}`}
        ></p>
        {/* Green Light */}
        <p
          className={`h-10 w-10 rounded-full bg-green-500 ${isActiveLight === "green" ? "opacity-100" : "opacity-20"}`}
        ></p>
      </div>
    </div>
  );
};

export default Traffic;
