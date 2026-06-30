// STEP 1: Lexical scope — inner can see outer's variable
function outer() {
  let a = 10;

  function inner() {
    let b = 20;
    debugger; // pause here, check Scope panel: Local has b, Closure has a
    console.log(a, b);
  }

  inner();
}

outer();

// STEP 2: Closure — count is remembered between calls
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    debugger; // pause here, watch "count" in Closure section increase each call
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// STEP 3: Debounce — timerId remembered between calls
function debounce(fn, wait) {
  let timerId = null;

  return function () {
    debugger; // pause here, watch "timerId" change each call: null -> 1 -> 2 -> 3
    clearTimeout(timerId);
    timerId = setTimeout(fn, wait);
  };
}

function sayHi() {
  console.log("hi");
}

const debouncedHi = debounce(sayHi, 1000);
debouncedHi();
debouncedHi();
debouncedHi(); // only this one will actually run sayHi after 1000ms
