/*
Pattern 2 — Right-Angled Triangle
----------------------------------------
Print a left-aligned right-angled triangle of stars with n rows.

Expected output (n = 5):

*
**
***
****
*****

----------------------------------------
Run:  node 01-js-internals/patterns/pattern-02-right-angled-triangle.js
*/

function rightAngledTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

rightAngledTriangle(5);
