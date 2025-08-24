const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const timeInput = document.getElementById("time");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn");
function calculateInterest() {
  const principal = Number(principalInput.value);
  const rate = Number(rateInput.value);
  const time = Number(timeInput.value);
  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    result.textContent = "Invalid Input";
    return;
  }
  let simpleInterest = (principal * rate * time) / 100;
  let totalAmount = simpleInterest+principal;

  result.textContent = `Simple Interest = ₹${simpleInterest.toFixed(2)}`;
  const extraLine = document.createElement("p");
  extraLine.textContent = `Total Amount = ₹${totalAmount.toFixed(2)}`;
  result.appendChild(extraLine);
}
function clearAll() {
  principalInput.value = "";
  rateInput.value = "";
  timeInput.value = "";
  result.textContent = "";
}
calculateBtn.addEventListener("click", calculateInterest);
clearBtn.addEventListener("click", clearAll);
