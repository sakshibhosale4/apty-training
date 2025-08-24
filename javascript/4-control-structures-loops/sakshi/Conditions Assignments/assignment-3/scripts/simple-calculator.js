const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const operatorInput = document.getElementById("operator");
const display = document.getElementById("display");
const clearBtn= document.querySelector("#clear-btn");
const calculateBtn= document.querySelector("#calculate-btn");
function getValues() {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  const operator = operatorInput.value.trim();
  return { val1, val2, operator };
}

function calculate() {
  const { val1, val2, operator } = getValues();
  let result = "";

  switch (operator) {
    case "+":
      result = `${val1} + ${val2} = ${val1 + val2}`;
      break;
    case "-":
      result = `${val1} - ${val2} = ${val1 - val2}`;
      break;
    case "*":
      result = `${val1} × ${val2} = ${val1 * val2}`;
      break;
    case "/":
      result = val2 === 0 ? "Error: Division by zero!" : `${val1} ÷ ${val2} = ${val1 / val2}`;
      break;
    case "%":
      result = val2 === 0 ? "Error: Modulo by zero!" : `${val1} % ${val2} = ${val1 % val2}`;
      break;
    case "++":
      result = `${val1}++ = ${val1 + 1}, ${val2}++ = ${val2 + 1}`;
      break;
    case "--":
      result = `${val1}-- = ${val1 - 1}, ${val2}-- = ${val2 - 1}`;
      break;
    default:
      result = "Invalid Operator! Use +, -, *, /, %, ++, --";
  }

  display.textContent = result;
}

function clearAll() {
  input1.value = "";
  input2.value = "";
  operatorInput.value = "";
  display.textContent = "";
}

clearBtn.addEventListener("click",clearAll);
calculateBtn.addEventListener("click",calculate);