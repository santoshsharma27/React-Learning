const clock = document.querySelector("#clock");

// const date = new Date();
// console.log(date.toLocaleTimeString());
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// clock.innerHTML = `${hour} : ${minutes} : ${seconds}`;

setInterval(() => {
  const date = new Date();
  clock.innerText = date.toLocaleTimeString();
}, 1000);
