function maskCreditCardNumber(cardNumber) {
  if (typeof cardNumber === "number") {
    cardNumber = cardNumber.toString();
  }

  if (cardNumber.length < 6) {
    return "Card Number is less than 6";
  }

  // Get the first digits
  const firstFourDigit = cardNumber.slice(0, 4);

  // Get the last 4 digits
  const lastFourDigit = cardNumber.slice(-4);

  // Mask the middle digits with '*'
  const maskedMiddle = cardNumber.slice(4, -4).replace(/\d/g, "*");

  // Concatenate and return the masked credit card number
  return firstFourDigit + maskedMiddle + lastFourDigit;
}

// Example usage
console.log(maskCreditCardNumber(1234567812345678)); // Output: 1234********5678

const maskCreditCard = function (number) {
  const str = number + "";
  const lastFourDigit = str.slice(-4);
  return lastFourDigit.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836)); // ****7836
console.log(maskCreditCard(1234567812345678)); // *************7384
