const localKey = document.getElementById("localKey")
const localValue = document.getElementById("localValue")
const setLocal = document.getElementById("setLocal")
const localData = document.getElementById("localData")

const sessionKey = document.getElementById("sessionKey")
const sessionValue = document.getElementById("sessionValue")
const setSession = document.getElementById("setSession")
const sessionData = document.getElementById("sessionData")

function displayLocalStorage() {
  const data = { ...localStorage }
  localData.textContent = JSON.stringify(data)
}

function displaySessionStorage() {
  const data = { ...sessionStorage }
  sessionData.textContent = JSON.stringify(data)
}

setLocal.addEventListener("click", () => {
  const key = localKey.value
  const value = localValue.value
  if (key && value) {
    localStorage.setItem(key, value)
    displayLocalStorage()
  }
})

setSession.addEventListener("click", () => {
  const key = sessionKey.value
  const value = sessionValue.value
  if (key && value) {
    sessionStorage.setItem(key, value)
    displaySessionStorage()
  }
})

window.addEventListener("load", () => {
  displayLocalStorage()
  displaySessionStorage()
})
