const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const display = document.querySelector(".display");

function getValues() {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  return { val1, val2 };
}

function add() {
  const { val1, val2 } = getValues();
  display.innerHTML = `${val1} + ${val2} = ${val1 + val2}`;
}

function subtract() {
  const { val1, val2 } = getValues();
  display.innerHTML = `${val1} - ${val2} = ${val1 - val2}`;
}

function multiply() {
  const { val1, val2 } = getValues();
  display.innerHTML = `${val1} × ${val2} = ${val1 * val2}`;
}

function divide() {
  const { val1, val2 } = getValues();
  if (val2 === 0) {
    display.innerHTML = "Error: Division by zero!";
  } else {
    display.innerHTML = `${val1} ÷ ${val2} = ${val1 / val2}`;
  }
}

function modulo() {
  const { val1, val2 } = getValues();
  if (val2 === 0) {
    display.innerHTML = "Error: Modulo by zero!";
  } else {
    display.innerHTML = `${val1} % ${val2} = ${val1 % val2}`;
  }
}

function unaryAdd() {
  let { val1 } = getValues();
  val1++;
  display.innerHTML = `++Value1 = ${val1}`;
}

function unarySubtract() {
  let { val1 } = getValues();
  val1--;
  display.innerHTML = `--Value1 = ${val1}`;
}

function clearAll() {
  input1.value = "";
  input2.value = "";
  display.textContent = "";
}

document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
document.getElementById("modulo").addEventListener("click", modulo);
document.getElementById("unary-add").addEventListener("click", unaryAdd);
document.getElementById("unary-subtract").addEventListener("click", unarySubtract);
document.getElementById("clear").addEventListener("click", clearAll);

