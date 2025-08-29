const inputEl = document.getElementById("arrayInput")
const resultEl = document.getElementById("resultEl")
const errorEl = document.getElementById("errorEl")

function resetMessages() {
  resultEl.textContent = ""
  errorEl.textContent = ""
}
document.getElementById("processBtn").addEventListener("click", () => {
  resetMessages()
  const input = inputEl.value.trim()
  if (!input) {
    errorEl.textContent = "Please enter an array of tasks."
    return
  }
  let arr
  try {
    arr = JSON.parse(input)
  } catch {
    errorEl.textContent = "Invalid JSON! Example: [{\"task\":\"A\",\"completed\":true}]"
    return
  }

  if (!Array.isArray(arr) || arr.some(t => typeof t !== "object" || !("task" in t) || !("completed" in t))) {
    errorEl.textContent = "Invalid input! Must be an array of objects with task and completed."
    return
  }

  const completedTasks = arr.filter(t => t.completed).map(t => t.task)
  resultEl.textContent = "Completed Tasks: " + JSON.stringify(completedTasks)
})
