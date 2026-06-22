// abort-retry-queue.js
// AbortController-aware fetch with retry + exponential backoff, and a
// concurrency-limited task queue.
//
// TODO:
//  - retry(fn, { retries, backoff, signal }) honoring AbortSignal
//  - a queue that runs at most N tasks concurrently
