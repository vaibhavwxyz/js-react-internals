/*
Pattern 5 — Inverted Right-Angled Star Triangle
----------------------------------------
Print a left-aligned star triangle with n rows that shrinks downward.

Expected output (n = 5):

*****
****
***
**
*

----------------------------------------
Run:  node 01-js-internals/patterns/pattern-05-inverted-star-triangle.js
*/

function invertedStarTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n; j - i > 0; j--) {
      row += "*";
    }
    console.log(row);
  }
}

invertedStarTriangle(5);
