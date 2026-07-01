/* 
Throttling ensures a function runs at most once per specified time interval,
no matter how many times it is called — ignoring all calls that happen within that interval.
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
