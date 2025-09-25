const countdownInput = document.getElementById("countdownInput")
const startCountdown = document.getElementById("startCountdown")
const countdownDisplay = document.getElementById("countdownDisplay")

const startStopwatch = document.getElementById("startStopwatch")
const stopStopwatch = document.getElementById("stopStopwatch")
const resetStopwatch = document.getElementById("resetStopwatch")
const stopwatchDisplay = document.getElementById("stopwatchDisplay")

let countdownTimeout
let countdownValue

startCountdown.addEventListener("click", () => {
  countdownValue = parseInt(countdownInput.value, 10)
  countdownDisplay.textContent = countdownValue
  clearTimeout(countdownTimeout)
  function tick() {
    if (countdownValue > 0) {
      countdownValue--
      countdownDisplay.textContent = countdownValue
      countdownTimeout = setTimeout(tick, 1000)
    }
  }
  tick()
})

let stopwatchInterval
let stopwatchValue = 0

startStopwatch.addEventListener("click", () => {
  clearInterval(stopwatchInterval)
  stopwatchInterval = setInterval(() => {
    stopwatchValue++
    stopwatchDisplay.textContent = stopwatchValue
  }, 1000)
})

stopStopwatch.addEventListener("click", () => {
  clearInterval(stopwatchInterval)
})

resetStopwatch.addEventListener("click", () => {
  clearInterval(stopwatchInterval)
  stopwatchValue = 0
  stopwatchDisplay.textContent = stopwatchValue
})
