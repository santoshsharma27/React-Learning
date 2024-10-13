function debounce(fn, delay = 3000) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Window resized");
  }, 300)
);

/* 
A debounce function is used to limit how often a particular function is executed. 
It ensures that a function is only invoked after a specified period of time has passed since the last time it was invoked. 
This is especially useful for handling events that might be triggered frequently, such as window resizing, scrolling, or keypress events.

Debouncing helps improve performance by reducing the number of times a function is executed in high-frequency events.
*/
