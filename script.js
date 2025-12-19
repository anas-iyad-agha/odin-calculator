var expresion = document.getElementById("expresion");
var result = document.getElementById("result");
var calculatorButtons = document.getElementById("calculator-buttons");

var firstNumber = "";
var secondNumber = "";
var operation = "";

var buttons = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "/",
  "clear",
  "0",
  "*",
  "=",
];

buttons.map((button) => {
  var child = document.createElement("button");
  child.innerText = button;
  child.id = button;
  child.addEventListener("click", () => {
    buttonClick(button);
    console.log("first number: ", typeof firstNumber, firstNumber);
    console.log("sconed number: ", typeof secondNumber, secondNumber);
    console.log("operation :", typeof operation, operation);
    console.log("result =", result.innerText);
  });
  calculatorButtons.appendChild(child);
});

function buttonClick(button) {
  if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(button)) {
    if (operation === "") {
      firstNumber += button;
      result.innerText += button;
    } else {
      secondNumber += button;
      result.innerText += button;
    }
  }
  if (["-", "+", "/", "*"].includes(button)) {
    if (operation === "") {
      operation = button;
      result.innerText += button;
    }
  }
  if (button === "=") {
    if (firstNumber != "" && secondNumber != "" && operation != "") {
      switch (operation) {
        case "+":
          result.innerText =
            Number.parseInt(firstNumber) + Number.parseInt(secondNumber);
          break;
        case "-":
          result.innerText =
            Number.parseInt(firstNumber) - Number.parseInt(secondNumber);
          break;
        case "/":
          result.innerText =
            Number.parseFloat(firstNumber) / Number.parseFloat(secondNumber);
          break;
        case "*":
          result.innerText =
            Number.parseInt(firstNumber) * Number.parseInt(secondNumber);
      }
      firstNumber = result.innerText;
      operation = "";
      secondNumber = "";
    }
  }
  if (button === "clear") {
    firstNumber = "";
    secondNumber = "";
    operation = "";
    result.innerText = "";
  }
}
