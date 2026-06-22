// event-loop-traces.js
// Predict-then-verify the ordering of microtasks vs macrotasks.
//
// TODO:
//  - interleave sync code, Promise.then (microtask), setTimeout (macrotask)
//  - add queueMicrotask and (in Node) process.nextTick
//  - write the expected log order, then run and compare
