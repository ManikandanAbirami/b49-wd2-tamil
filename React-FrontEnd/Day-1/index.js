export const personObj = {
  name: "Manikandan",
  sayHi: function () {
    console.log("Hi, my name is", this.name);
  },
};

export var name = "Manikandan";
export var age = 32;
export var designation = "PM";

if (age === 30) {
  console.log("$$$$$$$$ This code will be executed!!");
}

export const myFunction = () => {
  console.log("This function will not be executed until called.");
};
