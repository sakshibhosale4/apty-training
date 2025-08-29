function padString() {
  const input = document.getElementById("inputString").value.trim();
  const resultEl = document.getElementById("result");
  if (!input) {
    resultEl.textContent = "Please enter a string!";
    return;
  }
  const padded = input.padStart(10, "0");
  resultEl.textContent = padded;
}
