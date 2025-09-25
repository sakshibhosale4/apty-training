let childWindow

if (document.getElementById("openChild")) {
  const openBtn = document.getElementById("openChild")
  const sendBtn = document.getElementById("sendMsg")
  const msgInput = document.getElementById("msgInput")
  const messages = document.getElementById("messages")

  openBtn.addEventListener("click", () => {
    childWindow = window.open("child.html", "childWindow", "width=400,height=300")
  })

  sendBtn.addEventListener("click", () => {
    const msg = msgInput.value
    if (childWindow && msg) {
      childWindow.postMessage(msg, "*")
      const div = document.createElement("div")
      div.textContent = "Sent to child: " + msg
      messages.appendChild(div)
    }
  })
}

if (document.getElementById("sendParent")) {
  const sendParent = document.getElementById("sendParent")
  const msgInput = document.getElementById("msgInput")
  const receivedDiv = document.getElementById("received")

  sendParent.addEventListener("click", () => {
    const msg = msgInput.value
    if (window.opener && msg) {
      window.opener.postMessage(msg, "*")
      const div = document.createElement("div")
      div.textContent = "Sent to parent: " + msg
      receivedDiv.appendChild(div)
    }
  })
}

window.addEventListener("message", (event) => {
  if (document.getElementById("messages")) {
    const messages = document.getElementById("messages")
    const div = document.createElement("div")
    div.textContent = "Received from child: " + event.data
    messages.appendChild(div)
  }
  if (document.getElementById("received")) {
    const receivedDiv = document.getElementById("received")
    const div = document.createElement("div")
    div.textContent = "Received from parent: " + event.data
    receivedDiv.appendChild(div)
  }
})
