let newWindow

const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")
const resizeBtn = document.getElementById("resizeBtn")

openBtn.addEventListener("click", () => {
  newWindow = window.open("", "newWindow", "width=400,height=300")
  if (newWindow) {
    newWindow.document.write("<h2>New Window Opened</h2>")
  }
})

closeBtn.addEventListener("click", () => {
  if (newWindow) {
    newWindow.close()
  }
})

resizeBtn.addEventListener("click", () => {
  if (newWindow) {
    newWindow.resizeTo(600, 400)
  }
})
