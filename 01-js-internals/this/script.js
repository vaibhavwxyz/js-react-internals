console.log(this);

function whoIam() {
  console.log("inside fun", this);
}

const obj1 = {
  name: "vaibhav",
  hi: function () {
    console.log("this is obj1", this);
  },
};

const obj2 = {
  a: 10,
  x: () => {
    console.log("this is obj2", this);
  },
  z: function () {
    let y = () => {
      console.log("this is arrow z", this);
    };
    y();
  },
};

obj1.hi();
obj2.x();
obj2.z();

// whoIam();
