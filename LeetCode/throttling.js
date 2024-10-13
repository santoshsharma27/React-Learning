/* Throttling is similar to debouncing in that it limits how often a function can be executed, but with a key difference: throttling ensures 
 that a function is executed at most once within a specified period of time, regardless of how frequently the event triggering it occurs.

While debouncing waits for a period of inactivity before executing, throttling guarantees periodic execution of the function even if the 
event happens continuously.

Throttling is great for limiting the execution rate of time-sensitive operations such as scrolling or resizing events.
 */

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scrolling...");
  }, 1000)
);
