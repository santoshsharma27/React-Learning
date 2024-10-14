function maskCreditCardNumber(cardNumber) {
  if (typeof cardNumber === "number") {
    cardNumber = cardNumber.toString();
  }

  if (cardNumber.length < 6) {
    return "Card Number is less than 6";
  }

  // Get the first digits
  const firstDigit = cardNumber[0];

  // Get the last 4 digits
  const lastFourDigit = cardNumber.slice(-4);

  // Mask the middle digits with '*'
  const maskedMiddle = cardNumber.slice(4, -4).replace(/\d/g, "*");

  // Concatenate and return the masked credit card number
  return firstDigit + maskedMiddle + lastFourDigit;
}

// Example usage
console.log(maskCreditCardNumber(1234567812345678)); // Output: "1***********5678"

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));
