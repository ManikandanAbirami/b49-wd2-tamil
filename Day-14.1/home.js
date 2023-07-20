//Get the number inputs and result element
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultElement = document.getElementById("resultValue");

//Get the operation buttons
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

//Add event listeners to the buttons
addButton.addEventListener("click", () => performCalculation("add"));
subtractButton.addEventListener("click", () => performCalculation("subtract"));
multiplyButton.addEventListener("click", () => performCalculation("multiply"));
divideButton.addEventListener("click", () => performCalculation("divide"));

function performCalculation(operation) {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }
  resultElement.innerText = result;
}
