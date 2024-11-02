/* Throttling is similar to debouncing in that it limits how often a function can be executed, but with a key difference: throttling ensures 
 that a function is executed at most once within a specified period of time, regardless of how frequently the event triggering it occurs.

While debouncing waits for a period of inactivity before executing, throttling guarantees periodic execution of the function even if the 
event happens continuously.

Throttling is great for limiting the execution rate of time-sensitive operations such as scrolling or resizing events.
 */

function throttle(fn, limit) {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

// Define your handler
const handleScroll = () => {
  console.log("Scroll event fired!");
};

// Create a throttled version of the handler
const throttledScroll = throttle(handleScroll, 3000);

// Add event listener
window.addEventListener("scroll", throttledScroll);

// Remove event listener
window.removeEventListener("scroll", throttledScroll);
