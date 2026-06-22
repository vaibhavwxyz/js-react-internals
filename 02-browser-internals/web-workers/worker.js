// worker.js
// Worker thread: receives a task, does CPU-bound work off the main thread.
//
// TODO:
//  - onmessage: run a heavy computation, postMessage the result
//  - demo Transferable (ArrayBuffer) to move data without copying
