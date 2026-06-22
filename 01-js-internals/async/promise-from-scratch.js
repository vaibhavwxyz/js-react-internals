// promise-from-scratch.js
// Implement a Promises/A+-ish promise to understand the machinery.
//
// TODO:
//  - states: pending -> fulfilled / rejected (one-way)
//  - resolve / reject, then / catch with microtask scheduling
//  - chaining: then returns a new promise; handle thenables
