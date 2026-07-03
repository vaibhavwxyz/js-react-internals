/**
Debouncing: if you keep calling a function repeatedly, it keeps resetting the timer and only runs once you finally stop calling it.
Throttling: no matter how many times you call a function, it runs only once per time interval — all other calls in between are ignored.
---
Debounce — "keep delaying until you stop"
Throttle — "run now, take a break, run again"
 */

function throttle(fn, limit) {
  let lastCalled = 0; // timestamp of last time fn actually ran

  return function throttled(...args) {
    const now = Date.now(); // current timestamp

    if (now - lastCalled >= limit) {
      lastCalled = now; // update last called time
      fn(...args); // run fn
    } else {
      console.log("throttled — ignored");
    }
  };
}

function logScroll() {
  console.log("fired at", Date.now());
}

const throttledScroll = throttle(logScroll, 300);

// call it multiple times so you can step through
throttledScroll();
throttledScroll();
throttledScroll();
