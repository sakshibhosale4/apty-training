const inputEl = document.getElementById("matrixInput")
const resultEl = document.getElementById("result")
const btn = document.getElementById("transposeBtn")
btn.addEventListener("click", () => {
  let matrix
  try {
    matrix = JSON.parse(inputEl.value)
  } catch {
    resultEl.textContent = "Invalid input. Please enter a valid 2D array."
    return
  }
  if (!Array.isArray(matrix) || !matrix.every(row => Array.isArray(row))) {
    resultEl.textContent = "Please enter a valid 2D array."
    return
  }
  const transpose = transposeMatrix(matrix)
  resultEl.textContent = "Transpose: " + JSON.stringify(transpose)
})
function transposeMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}