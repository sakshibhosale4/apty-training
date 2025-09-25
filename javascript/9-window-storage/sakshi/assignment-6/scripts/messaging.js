const msgInput = document.getElementById("msgInput")
const sendBtn = document.getElementById("sendBtn")
const messages = document.getElementById("messages")
const iframeWindow = document.getElementById("childFrame").contentWindow

sendBtn.addEventListener("click", () => {
  const msg = msgInput.value
  if (msg) {
    iframeWindow.postMessage(msg, "*")
    const div = document.createElement("div")
    div.textContent = "Sent to iframe: " + msg
    messages.appendChild(div)
  }
})

window.addEventListener("message", (event) => {
  if (event.data.startsWith("Ack:")) {
    const div = document.createElement("div")
    div.textContent = event.data
    messages.appendChild(div)
  }
})
