// prototype-chain.js
// Experiments with __proto__ and Object.create — walk and inspect the chain.
//
// TODO:
//  - build objects with Object.create(proto) and trace lookups up the chain
//  - compare obj.__proto__ vs Object.getPrototypeOf(obj)
//  - show where own properties shadow inherited ones
let animal = {
    alive: true
}

let cat = {
    isAnimal: true,
    color: 'black'
}
let dog = Object.create(animal) // this will create new obj with exiting properites of arg obj
console.log(dog.alive)
Object.setPrototypeOf(cat, animal) // new way to set __proto__ : earlier we do this `cat.__proto__ = animal`

console.log(animal.alive)
console.log(cat.alive)

