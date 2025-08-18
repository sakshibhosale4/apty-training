function convert(value, type) {
  if (type === "number") return parseFloat(value);
  if (type === "boolean") return value.toLowerCase() === "true";
  return value;
}

function getInputs() {
  const val1 = document.getElementById("value1").value;
  const val2 = document.getElementById("value2").value;
  const type1 = document.getElementById("type1").value;
  const type2 = document.getElementById("type2").value;

  const v1 = convert(val1, type1);
  const v2 = convert(val2, type2);
  return { v1, v2 };
}

function displayResult(text) {
  document.getElementById("result").innerText = text;
}

function equal() {
  const { v1, v2 } = getInputs();
  displayResult(`Result (==): ${v1 == v2}`);
}

function strictEqual() {
  const { v1, v2 } = getInputs();
  displayResult(`Result (===): ${v1 === v2}`);
}

function notEqual() {
  const { v1, v2 } = getInputs();
  displayResult(`Result (!=): ${v1 != v2}`);
}

function strictNotEqual() {
  const { v1, v2 } = getInputs();
  displayResult(`Result (!==): ${v1 !== v2}`);
}

function greaterThan() {
  const { v1, v2 } = getInputs();
  displayResult(`Result (>): ${v1 > v2}`);
}

function lessThan() {
  const { v1, v2 } = getInputs();
  displayResult(`Result (<): ${v1 < v2}`);
}

function greaterThanOrEqual() {
  const { v1, v2 } = getInputs();
  displayResult(`Result (>=): ${v1 >= v2}`);
}

function lessThanOrEqual() {
  const { v1, v2 } = getInputs();
  displayResult(`Result (<=): ${v1 <= v2}`);
}

document.getElementById("equal").addEventListener("click", equal);
document.getElementById("strict-equal").addEventListener("click", strictEqual);
document.getElementById("not-equal").addEventListener("click", notEqual);
document.getElementById("strict-not-equal").addEventListener("click", strictNotEqual);
document.getElementById("greater").addEventListener("click", greaterThan);
document.getElementById("less").addEventListener("click", lessThan);
document.getElementById("greater-equal").addEventListener("click", greaterThanOrEqual);
document.getElementById("less-equal").addEventListener("click", lessThanOrEqual);

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  document.getElementById("type1").value = "";
  document.getElementById("type2").value = "";
  displayResult("");
});
