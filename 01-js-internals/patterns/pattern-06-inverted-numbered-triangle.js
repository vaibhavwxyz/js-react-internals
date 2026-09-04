/*
Pattern 6 — Inverted Numbered Right-Angled Triangle
----------------------------------------
Print a left-aligned numbered triangle with n rows that shrinks downward.

Expected output (n = 5):

12345
1234
123
12
1

----------------------------------------
Run:  node 01-js-internals/patterns/pattern-06-inverted-numbered-triangle.js
*/

function invertedNumberedTriangle(n) {
  for (let row = n; row >= 1; row--) {
    let line = "";
    for (let num = 1; num <= row; num++) {
      line += num;
    }
    console.log(line);
  }
}

invertedNumberedTriangle(5);
