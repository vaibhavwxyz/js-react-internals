// promise-combinators.js
// Implement Promise.all / race / any / allSettled from scratch.
//
// TODO:
//  - all: resolve with ordered results, reject on first rejection
//  - race: settle as soon as the first input settles
//  - any: resolve on first fulfillment, AggregateError if all reject
//  - allSettled: never rejects; {status, value|reason}[]
