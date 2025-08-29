const inputEl = document.getElementById("arrayInput")
const resultEl = document.getElementById("resultEl")
const errorEl = document.getElementById("errorEl")

function resetMessages() {
  resultEl.textContent = ""
  errorEl.textContent = ""
}

function parseInput(input) {
  try {
    const parsed = JSON.parse(input)
    if (Array.isArray(parsed)) return parsed
  } catch {}
  return input
    .split(",")
    .map(token => {
      const t = token.trim()
      if (t === "") return null
      if (t.toLowerCase() === "true") return true
      if (t.toLowerCase() === "false") return false
      if (t.toLowerCase() === "null") return null
      if (/^-?\d+(\.\d+)?$/.test(t)) return Number(t)
      return t
    })
    .filter(v => v !== null && v !== undefined)
}
document.getElementById("freqBtn").addEventListener("click", () => {
  resetMessages()
  const input = inputEl.value.trim()
  if (!input) {
    errorEl.textContent = "Please enter an array."
    return
  }
  const arr = parseInput(input)
  if (!Array.isArray(arr)) {
    errorEl.textContent = "Invalid array. Use JSON array or a comma-separated list."
    return
  }
  if (arr.length === 0) {
    errorEl.textContent = "Array is empty."
    return
  }
  const freqMap = arr.reduce((map, el) => {
    map.set(el, (map.get(el) || 0) + 1)
    return map
  }, new Map())
  let maxCount = 0
  let mostFreq = []
  for (const [key, count] of freqMap) {
    if (count > maxCount) {
      maxCount = count
      mostFreq = [key]
    } else if (count === maxCount) {
      mostFreq.push(key)
    }
  }
  if (mostFreq.length === 1) {
    resultEl.textContent =
      "Most Frequent Element: " + JSON.stringify(mostFreq[0]) + " (occurred " + maxCount + " times)"
  } else {
    resultEl.textContent =
      "Multiple elements tied: " + JSON.stringify(mostFreq) + " (each occurred " + maxCount + " times)"
  }
})
