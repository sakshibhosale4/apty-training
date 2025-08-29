const aInput = document.getElementById("aInput")
const bInput = document.getElementById("bInput")
const resultEl = document.getElementById("result")

document.getElementById("swapBtn").addEventListener("click", () => {
  let a = Number(aInput.value.trim())
  let b = Number(bInput.value.trim())
  ;[a, b] = [b, a]
  resultEl.textContent = `After swapping: a = ${a}, b = ${b}`
})
