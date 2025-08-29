const inputEl = document.getElementById("arrayInput")
const resultEl = document.getElementById("resultEl")
const errorEl = document.getElementById("errorEl")

function resetMessages() {
  resultEl.textContent = ""
  errorEl.textContent = ""
}

document.getElementById("spliceBtn").addEventListener("click", () => {
  resetMessages()
  const input = inputEl.value.trim()
  if (!input) {
    errorEl.textContent = "Please enter an array of colors."
    return
  }

  let arr
  try {
    arr = JSON.parse(input)
  } catch {
    arr = input.split(",").map(color => color.trim().toLowerCase()).filter(Boolean)
  }

  if (!Array.isArray(arr) || arr.some(color => typeof color !== "string")) {
    errorEl.textContent = "Invalid input! Example: [\"Red\",\"Blue\"] or Red,Blue"
    return
  }

  const copyArr = [...arr]
  const blueIndex = copyArr.indexOf("blue")
  if (blueIndex !== -1) copyArr.splice(blueIndex, 1, "Purple")

  const greenIndex = copyArr.indexOf("green")
  if (greenIndex !== -1) copyArr.splice(greenIndex, 1)

  const yellowIndex = copyArr.indexOf("yellow")
  if (yellowIndex !== -1) copyArr.splice(yellowIndex + 1, 0, "orange")

  resultEl.textContent = "Final Array: " + JSON.stringify(copyArr)
})
