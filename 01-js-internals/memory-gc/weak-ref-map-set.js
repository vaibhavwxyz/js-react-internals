// weak-ref-map-set.js
// WeakMap / WeakSet / WeakRef — how they let the GC reclaim keys.
//
// TODO:
//  - cache metadata on objects with a WeakMap so it dies with the object
//  - contrast with a plain Map that would pin the object in memory
//  - (optional) FinalizationRegistry to observe collection
