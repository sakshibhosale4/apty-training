const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const display = document.querySelector(".display");

function getValues() {
  let val1 = Number(input1.value);
  let val2 = Number(input2.value);
  return { val1, val2 };
}

function add() {
  let { val1, val2 } = getValues();
  val1 += val2;
  display.innerHTML = `Value1 += Value2 → ${val1}`;
}

function subtract() {
  let { val1, val2 } = getValues();
  val1 -= val2;
  display.innerHTML = `Value1 -= Value2 → ${val1}`;
}

function multiply() {
  let { val1, val2 } = getValues();
  val1 *= val2;
  display.innerHTML = `Value1 *= Value2 → ${val1}`;
}

function divide() {
  let { val1, val2 } = getValues();
  if (val2 === 0) {
    display.innerHTML = "Error: Division by zero!";
  } else {
    val1 /= val2;
    display.innerHTML = `Value1 /= Value2 → ${val1}`;
  }
}

function modulo() {
  let { val1, val2 } = getValues();
  if (val2 === 0) {
    display.innerHTML = "Error: Modulo by zero!";
  } else {
    val1 %= val2;
    display.innerHTML = `Value1 %= Value2 → ${val1}`;
  }
}

function unaryAdd() {
  let { val1 } = getValues();
  val1++;
  display.innerHTML = `Value1++ → ${val1}`;
}

function unarySubtract() {
  let { val1 } = getValues();
  val1--;
  display.innerHTML = `Value1-- → ${val1}`;
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
