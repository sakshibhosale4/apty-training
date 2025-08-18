function convert(value, type) {
  if (value === "") return undefined;
  if (type === "number") return parseFloat(value);
  if (type === "boolean") return value.toLowerCase() === "true";
  if (value.toLowerCase() === "null") return null; 
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

function logicalAndAssign() {
  let { v1, v2 } = getInputs();
  v1 &&= v2;
  displayResult(`Result (v1 &&= v2): ${String(v1)}`);
}

function logicalOrAssign() {
  let { v1, v2 } = getInputs();
  v1 ||= v2;
  displayResult(`Result (v1 ||= v2): ${String(v1)}`);
}

function logicalNullishAssign() {
  let { v1, v2 } = getInputs();
  v1 ??= v2;
  displayResult(`Result (v1 ??= v2): ${String(v1)}`);
}

document.getElementById("logical-and").addEventListener("click", logicalAndAssign);
document.getElementById("logical-or").addEventListener("click", logicalOrAssign);
document.getElementById("logical-nullish").addEventListener("click", logicalNullishAssign);

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  document.getElementById("type1").value = "";
  document.getElementById("type2").value = "";
  displayResult("");
});
