const inputEl = document.getElementById("arrayInput")
const resultEl = document.getElementById("resultEl")
const errorEl = document.getElementById("errorEl")
function resetMessages() {
  resultEl.textContent = ""
  errorEl.textContent = ""
}
function removeDuplicates(arr) {
  const uniqueArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i])
    }
  }
  return uniqueArr
}
document.getElementById("removeBtn").addEventListener("click", () => {
  resetMessages()
  const input = inputEl.value.trim()
  if (!input) {
    errorEl.textContent = "Please enter an array."
    return
  }
  let arr
  try {
    arr = JSON.parse(input)
  } catch {
    arr = input.split(",").map(el => el.trim()).filter(Boolean)
  }
  if (!Array.isArray(arr)) {
    errorEl.textContent = "Invalid array! Example: [1,3,2,2,3] or 1,3,2,2,3"
    return
  }
  const unique = removeDuplicates(arr)
  resultEl.textContent = "Unique Array: " + JSON.stringify(unique)
})
