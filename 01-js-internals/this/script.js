function whoAmI() {
  console.log("this console", this);
}

whoAmI();

const user = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};

user.greet(); // 'Alice' — this = user

// Implicit binding LOST — most common bug in JS
const fn = user.greet;
fn(); // undefined — this = window (or undefined in strict)

// Also lost in callbacks:
setTimeout(user.greet, 0); // undefined — detached!

// Nested object — only the last object before the dot counts
const a = {
  b: {
    name: "nested",
    greet() {
      return this.name;
    },
  },
};
a.b.greet(); // 'nested' — this = a.b, not a
