console.log(this);

function whoIam() {
  console.log("inside fun", this);
}

const obj1 = {
  name: "vaibhav",
  hi: function () {
    console.log(this.name);
  },
};

obj1.hi();

whoIam();
