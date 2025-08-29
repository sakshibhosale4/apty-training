const inputEl = document.getElementById("arrayInput")
const chunkEl = document.getElementById("chunkSize")
const resultEl = document.getElementById("resultEl")
const errorEl = document.getElementById("errorEl")
function resetMessages() {
  resultEl.textContent = ""
  errorEl.textContent = ""
}
function chunkArray(arr, size) {
  const chunks = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}
document.getElementById("chunkBtn").addEventListener("click", () => {
  resetMessages()
  const input = inputEl.value.trim()
  const size = Number(chunkEl.value)
  if (!input || !size || size <= 0) {
    errorEl.textContent = "Please enter a valid array and chunk size."
    return
  }
  let arr
  try {
    arr = JSON.parse(input)
  } catch {
    arr = input.split(",").map(num => num.trim()).filter(Boolean)
  }
  if (!Array.isArray(arr)) {
    errorEl.textContent = "Invalid array! Example: [1,2,3,4] or 1,2,3,4"
    return
  }
  const chunks = chunkArray(arr, size)
  resultEl.textContent = "Chunks: " + JSON.stringify(chunks)
})
