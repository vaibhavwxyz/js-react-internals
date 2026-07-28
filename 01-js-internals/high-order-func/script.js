/* 
Higher-order functions are simply functions that either take a function as an argument, 
return a function, or both. That's the entire definition.

The reason they matter at your level is not the definition — 
it's that every powerful JS pattern (closures, currying, middleware, custom hooks, compose) is built on this one idea.
*/

let ans = [1, 2, 3].map((n) => n * 2);
console.log(ans);
