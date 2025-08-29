function sortString() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const resultEl = document.getElementById("result");
  if (!input) {
    resultEl.textContent = "Please enter a string!";
    return;
  }
  const sorted = input.split("").sort().join("");
  resultEl.textContent = sorted;
}
