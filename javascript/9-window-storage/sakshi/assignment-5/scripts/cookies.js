function setCookie(name, value, days) {
  let expires = ""
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = "; expires=" + date.toUTCString()
  }
  document.cookie = name + "=" + value + expires + "; path=/"
}

function getCookies() {
  const cookies = document.cookie.split("; ").filter(c => c)
  const cookieObj = {}
  cookies.forEach(cookie => {
    const [key, val] = cookie.split("=")
    cookieObj[key] = val
  })
  return cookieObj
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
}

const setMessage = document.getElementById("setMessage")
const readMessage = document.getElementById("readMessage")
const deleteMessage = document.getElementById("deleteMessage")

document.getElementById("setCookieBtn").addEventListener("click", () => {
  const name = document.getElementById("cookieName").value
  const value = document.getElementById("cookieValue").value
  if (name && value) {
    setCookie(name, value, 7)
    setMessage.textContent = `Cookie "${name}" set successfully.`
  }
})

document.getElementById("readCookiesBtn").addEventListener("click", () => {
  const cookies = getCookies()
  document.getElementById("cookiesDisplay").textContent = JSON.stringify(cookies)
  readMessage.textContent = `Cookies read successfully.`
})

document.getElementById("deleteCookieBtn").addEventListener("click", () => {
  const name = document.getElementById("deleteName").value
  if (name) {
    deleteCookie(name)
    deleteMessage.textContent = `Cookie "${name}" deleted successfully.`
  }
})
