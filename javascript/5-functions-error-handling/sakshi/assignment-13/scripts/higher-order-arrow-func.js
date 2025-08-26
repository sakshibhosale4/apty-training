const numbersInput = document.getElementById("numbers");
const limitInput = document.getElementById("limit");
const result = document.getElementById("result");
const error = document.getElementById("error");
function higherOrderFilter(arr, callback) {
  return arr.filter(callback);
}
document.getElementById("filterBtn").addEventListener("click", () => {
  const numbers = numbersInput.value.split(",").map(num => Number(num.trim()));
  if (numbers.some(isNaN) || isNaN(limit)) {
    error.textContent = "Please enter valid numbers and limit.";
    return;
  }
  const limit = parseInt(limitInput.value, 10);
  result.textContent = "";
  error.textContent = "";
  const filtered = higherOrderFilter(numbers, num => num <= limit);
  result.textContent = filtered.length > 0 ? filtered.join(", ") : "No numbers within the limit.";
});

document.getElementById("clearBtn").addEventListener("click", () => {
  numbersInput.value = "";
  limitInput.value = "";
  result.textContent = "";
  error.textContent = "";
});
