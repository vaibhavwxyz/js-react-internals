/*
Pattern 3 — Right-Angled Numbered Triangle
----------------------------------------
Print a left-aligned right-angled triangle of numbers with n rows.

Expected output (n = 5):

1
12
123
1234
12345

----------------------------------------
Run:  node 01-js-internals/patterns/pattern-03-numbered-triangle.js
*/

function numberedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

numberedTriangle(5);
