const inputEl = document.getElementById("arrayInput")
const firstThreeEl = document.getElementById("firstThree")
const lastTwoEl = document.getElementById("lastTwo")
const errorEl = document.getElementById("errorEl")

function resetMessages() {
  firstThreeEl.textContent = ""
  lastTwoEl.textContent = ""
  errorEl.textContent = ""
}

document.getElementById("sliceBtn").addEventListener("click", () => {
  resetMessages()
  const input = inputEl.value.trim()
  if (!input) {
    errorEl.textContent = "Please enter an array of names."
    return
  }

  let arr
  try {
    arr = JSON.parse(input)
  } catch {
    arr = input.split(",").map(name => name.trim()).filter(Boolean)
  }

  if (!Array.isArray(arr) || arr.some(name => typeof name !== "string")) {
    errorEl.textContent = "Invalid input! Example: [\"Alice\",\"Bob\"] or Alice,Bob"
    return
  }

  const firstThree = arr.slice(0, 3)
  const lastTwo = arr.slice(-2)
  firstThreeEl.textContent = "First 3 names: " + JSON.stringify(firstThree)
  lastTwoEl.textContent = "Last 2 names: " + JSON.stringify(lastTwo)
})
