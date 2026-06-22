// main.js
// Spawns worker.js, exchanges messages, demonstrates Transferable objects.
//
// TODO:
//  - new Worker('./worker.js', { type: 'module' })
//  - postMessage a task; handle the reply
//  - transfer an ArrayBuffer and observe it becoming detached on this side
