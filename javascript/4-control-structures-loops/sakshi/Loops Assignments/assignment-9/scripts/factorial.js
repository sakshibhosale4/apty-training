const input = document.getElementById("number");
const calcBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");
const result = document.getElementById("result");

function calculateFactorial() {
  const num = Number(input.value);
  if (!Number.isInteger(num) || isNaN(num) || num < 0) {
    result.textContent = "Invalid Input";
    return;
  }
  if (num === 0) {
  result.textContent = "0! = 1";
  return;
  }
  let fact = 1;
  let i = num;
  let steps = [];
  do {
    steps.push(i);
    fact *= i;
    i--;
  } while (i > 0);
  result.textContent = "";
  const stepsPara = document.createElement("p");
  stepsPara.textContent = `${num}! = ${steps.join(" x ")} = ${fact}`;
  result.appendChild(stepsPara);
}
function clearAll() {
  result.textContent = "";
  input.value = "";
}
calcBtn.addEventListener("click", calculateFactorial);
clearBtn.addEventListener("click", clearAll);
