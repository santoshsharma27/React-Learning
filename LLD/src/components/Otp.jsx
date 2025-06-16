import { useEffect, useRef, useState } from "react";

const otpSize = 4;

function Otp() {
  const [otp, setOtp] = useState(new Array(otpSize).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value.trim();
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="App">
      <h1>OTP Demo</h1>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(input) => (inputRefs.current[index] = input)}
          className="m-5 h-[50px] w-[50px] border border-gray-500 text-center font-medium"
        />
      ))}
    </div>
  );
}

export default Otp;
