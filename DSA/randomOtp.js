function generateOTP(length = 6) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * 10); // Generates a random digit between 0 and 9
    console.log(random);
    otp += random;
  }
  return otp;
}

// Example usage
const otp = generateOTP(5);
console.log("Your OTP is:", otp);
