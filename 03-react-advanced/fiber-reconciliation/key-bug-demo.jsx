// key-bug-demo.jsx
// The classic list `key` bug: using index as key corrupts state on reorder.
//
// TODO:
//  - render an editable list keyed by index -> reorder/remove and watch state stick to position
//  - fix: key by a stable id and watch state follow the item
