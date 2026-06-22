// event-emitter.js
// A minimal pub/sub EventEmitter backed by a closure over a listener map.
//
// TODO:
//  - on(event, fn), off(event, fn), once(event, fn), emit(event, ...args)
//  - return an unsubscribe fn from on()
