const rowsInput = document.getElementById("rows");
const generateBtn = document.getElementById("generate");
const clearBtn = document.getElementById("clear");
const result = document.getElementById("result");
function generatePyramid() {
  const rows = Number(rowsInput.value);
  if (isNaN(rows) || rows <= 0) {
    result.textContent = "Please enter a positive number of rows.";
    return;
  }
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  result.textContent = "";
  result.textContent = pattern;
}
function clearAll() {
  rowsInput.value = "";
  result.textContent = "";
}
generateBtn.addEventListener("click", generatePyramid);
clearBtn.addEventListener("click", clearAll);
