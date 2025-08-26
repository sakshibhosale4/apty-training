function calculate(a, b, operator) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Invalid number input.");
  }

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) throw new Error("Division by zero is not allowed.");
      return a / b;
    default:
      throw new Error("Unsupported operator. Use +, -, * or /.");
  }
}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");
const error = document.getElementById("error");

document.getElementById("calcBtn").addEventListener("click", () => {
  result.textContent = "";
  error.textContent = "";

  try {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const op = operator.value.trim();

    const res = calculate(a, b, op);
    result.textContent = `Result: ${res}`;

  } catch (err) {
    error.textContent = "Error: " + err.message;
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  num1.value = "";
  num2.value = "";
  operator.value = "";
  result.textContent = "";
  error.textContent = "";
});
