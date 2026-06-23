// call-apply-bind.js

/**
 * The deeper thing to internalize — call, apply, and bind exist because
 * functions in JS are just values. You can store them in variables, pass
 * them around, detach them from objects. The moment you detach a function
 * from its object, `this` is lost. These three methods are how you restore
 * it, or lock it in permanently before handing the function off.
 */

/**
 * `this` — refers to the object that is currently executing the function.
 * Not where the function was written. Not where it was stored.
 * Only how it was called.
 *
 * `call` — call this function right now, but pretend it belongs to this object.
 * Pass arguments one by one.
 *
 * `apply` — exactly the same as `call`. Only difference: you pass arguments
 * as an array instead of one by one.
 *
 * `bind` — don't call the function now. Give me a new function with `this`
 * permanently locked to this object. I'll call it later.
 *
 * `call` and `apply` are for immediate invocation.
 * `bind` is for future invocation.
 */

let person1 = {name: 'vaibhav'}
let person2 = {name: 'ashutosh'}

function greet(greeting, punctuation){
    return `${greeting}, I am ${this.name} ${punctuation}`
}
// attached
person1.greet = greet
const output = person1.greet('hello', '!')
// console.log(output)
// detached
const detached = person1.greet
// const output2 = detached('Bye', '?')
// console.log(output2) // The moment you detach a function from its object, `this` is lost.

const call= greet.call(person1, 'Nice', '?')
const apply = greet.apply(person2, ['Boy', '!'])
const bind = greet.bind(person1)

console.log('call', call)
console.log('apply', apply)
console.log(bind('Hi', '?'))