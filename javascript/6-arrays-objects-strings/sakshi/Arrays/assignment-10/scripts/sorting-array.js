const inputEl = document.getElementById("arrayInput")
const resultEl = document.getElementById("resultEl")
const errorEl = document.getElementById("errorEl")
function resetMessages() {
  resultEl.textContent = ""
  errorEl.textContent = ""
}
document.getElementById("sortBtn").addEventListener("click", () => {
  resetMessages()
  const input = inputEl.value.trim()
  if (!input) {
    errorEl.textContent = "Please enter an array of student objects."
    return
  }
  let arr
  try {
    arr = JSON.parse(input)
  } catch {
    errorEl.textContent = "Invalid input! Please enter valid JSON."
    return
  }
  if (!Array.isArray(arr) || arr.some(obj => typeof obj !== "object" || obj === null)) {
    errorEl.textContent = "Input must be an array of objects."
    return
  }
  const sorted = [...arr].sort((a, b) => b.score - a.score)
  resultEl.textContent = "Sorted Array: " + JSON.stringify(sorted)
})
