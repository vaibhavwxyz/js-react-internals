/*
Pattern 4 — Right-Angled Triangle With Same Digit Per Row
----------------------------------------
Print a left-aligned right-angled triangle of numbers with n rows, where every row uses a single digit.

Expected output (n = 5):

1
22
333
4444
55555

----------------------------------------
Run:  node 01-js-internals/patterns/pattern-04-same-number-triangle.js
*/

function sameNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}

sameNumberTriangle(5);
