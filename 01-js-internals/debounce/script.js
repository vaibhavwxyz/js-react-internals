/**
Debouncing: if you keep calling a function repeatedly, it keeps resetting the timer and only runs once you finally stop calling it.
Throttling: no matter how many times you call a function, it runs only once per time interval — all other calls in between are ignored.
---
Debounce — "keep delaying until you stop"
Throttle — "run now, take a break, run again"
 */

let count = 0;
function getData() {
  console.log("key pressed", ++count);
}

const doSomeMagic = function (fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), d);
  };
};

const debounce = doSomeMagic(getData, 300);
