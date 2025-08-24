const input = document.getElementById("numbers");
const calcBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");
const result = document.getElementById("result");

function calculateSumAndAverage() {
  const rawInput = input.value.trim();
  if (!rawInput) {
    result.textContent = "Please enter some numbers.";
    return;
  }
  const numArray = rawInput.split(",").map(num => Number(num.trim()));
  if (numArray.some(isNaN)) {
    result.textContent = "Invalid input. Please enter only numbers separated by commas.";
    return;
  }
  let sum = 0;
  for (let num of numArray) {
    sum += num;
  }
  const average = sum / numArray.length;
  result.textContent = "";
  const sumPara = document.createElement("p");
  sumPara.textContent = `Sum of elements = ${sum}`;
  const avgPara = document.createElement("p");
  avgPara.textContent = `Average of elements = ${average.toFixed(2)}`;
  result.appendChild(sumPara);
  result.appendChild(avgPara);
}
function clearAll() {
  input.value = "";
  result.textContent = "";
}
calcBtn.addEventListener("click", calculateSumAndAverage);
clearBtn.addEventListener("click", clearAll);
