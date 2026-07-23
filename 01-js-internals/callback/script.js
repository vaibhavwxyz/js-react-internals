function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayGoodBye() {
  console.log("Good Bye");
}

greet("Vaibhav", sayGoodBye);
