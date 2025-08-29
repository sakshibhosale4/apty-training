const inputEl = document.getElementById("arrayInput")
const resultEl = document.getElementById("resultEl")
const errorEl = document.getElementById("errorEl")

function resetMessages() {
  resultEl.innerHTML = ""
  errorEl.textContent = ""
}

document.getElementById("processBtn").addEventListener("click", () => {
  resetMessages()
  const input = inputEl.value.trim()
  if (!input) {
    errorEl.textContent = "Please enter an array of users."
    return
  }

  let arr
  try {
    arr = JSON.parse(input)
  } catch {
    errorEl.textContent = "Invalid JSON format! Example: [{\"name\":\"John\",\"age\":30}]"
    return
  }

  if (!Array.isArray(arr) || arr.some(user => typeof user !== "object" || !user.name || !user.age)) {
    errorEl.textContent = "Invalid input! Must be an array of objects with name and age."
    return
  }

  arr.forEach(user => {
    const p = document.createElement("p")
    p.textContent = `${user.name.trim()} is ${user.age} years old.`
    resultEl.appendChild(p)
  })
})
