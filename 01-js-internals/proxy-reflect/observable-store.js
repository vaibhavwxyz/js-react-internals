// observable-store.js
// Mini MobX: a reactive store built on Proxy + Reflect.
//
// TODO:
//  - wrap state in a Proxy; trap get (track) and set (trigger)
//  - use Reflect.get/set to preserve default behavior
//  - notify subscribers when a tracked key changes
