function storeMessage(message) {
  return function () {
    return message;
  };
}

const result = storeMessage("Santosh");
console.log(result());
