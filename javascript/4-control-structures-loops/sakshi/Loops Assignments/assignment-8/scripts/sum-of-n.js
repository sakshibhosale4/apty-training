const input = document.getElementById("number");
const generateBtn = document.getElementById("generate-sum");
const clearBtn = document.getElementById("clear");
const result = document.getElementById("result");

function generateSum() {
  const num = Number(input.value);
  if (isNaN(num) || num <= 0) {
    result.textContent = "Please enter a positive number.";
    return;
  }
  let sum = 0;
  let i = 1;
  while (i <= num) {
    sum += i;
    i++;
  }
  result.textContent = "";
  const res = document.createElement("p");
  res.textContent = `Sum of numbers from 1 to ${num} = ${sum}.`;
  result.appendChild(res);
}
function clearAll() {
  result.textContent = "";
  input.value = "";
}
generateBtn.addEventListener("click", generateSum);
clearBtn.addEventListener("click", clearAll);
