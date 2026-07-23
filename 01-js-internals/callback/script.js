function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayGoodBye() {
  console.log("Good Bye");
}

greet("Vaibhav", sayGoodBye);

function fetchData() {
  const data = { name: "Alice", age: 25 };
  setTimeout(() => {
    return data; // Simulating an API response
  }, 2000);
}
const userData = fetchData();
console.log(userData); // Will output `undefined`
