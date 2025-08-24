const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const results = document.getElementById("results");
const clearBtn = document.querySelector("#clear-btn");
const submitBtn = document.querySelector("#submit-btn");

function getValues() {
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const num3 = Number(input3.value);
  return { num1, num2, num3 };
}
function findLargest() {
  const { num1, num2, num3 } = getValues();
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    results.textContent = "Invalid Input";
    return;
  }
  let largest;
  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
  results.textContent = `The largest number is: ${largest}`;
}
function clearAll() {
  input1.value = "";
  input2.value = "";
  input3.value = "";
  results.textContent = "";
}
submitBtn.addEventListener("click", findLargest);
clearBtn.addEventListener("click", clearAll);
