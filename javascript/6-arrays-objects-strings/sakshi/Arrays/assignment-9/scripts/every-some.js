const inputEl = document.getElementById("arrayInput")
const resultEl = document.getElementById("resultEl")
const errorEl = document.getElementById("errorEl")
function resetMessages() {
  resultEl.textContent = ""
  errorEl.textContent = ""
}
document.getElementById("checkBtn").addEventListener("click", () => {
  resetMessages()
  const input = inputEl.value.trim()
  if (!input) {
    errorEl.textContent = "Please enter an array of student scores."
    return
  }
  let arr
  try {
    arr = JSON.parse(input)
  } catch {
    errorEl.textContent = "Invalid JSON! Example: [{\"name\":\"Bob\",\"score\":80}]"
    return
  }
  if (!Array.isArray(arr) || arr.some(s => typeof s !== "object" || !("score" in s))) {
    errorEl.textContent = "Invalid input! Must be an array of objects with name and score."
    return
  }
  const allPassed = arr.every(s => s.score > 35)
  const someFailed = arr.some(s => s.score < 35)
  if (allPassed) {
    resultEl.textContent = "All Students Passed"
  } else if (someFailed) {
    resultEl.textContent = "Some Students Failed"
  } else {
    resultEl.textContent = "Check input again."
  }
})
