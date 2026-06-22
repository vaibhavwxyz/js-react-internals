// closure-leak-demo.js
// Intentional closure memory leak, then the fix.
//
// TODO:
//  - leak: a long-lived closure that retains a large object it never uses
//  - observe growth (process.memoryUsage / heap snapshot)
//  - fix: null out the reference / scope it tighter
