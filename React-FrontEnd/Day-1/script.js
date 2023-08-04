import { personObj, name, designation, age, myFunction } from "./index.js";
const person = {
  name: "John",
  sayHi: function () {
    const greet = () => {
      console.log(`Hi, my name is ${this.name}`);
    };
    greet();
  },
};

// person.sayHi();
personObj.sayHi();
console.log(name, age, designation);
myFunction();
