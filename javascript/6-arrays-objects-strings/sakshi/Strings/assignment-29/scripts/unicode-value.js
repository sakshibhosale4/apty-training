function convertToUnicode() {
  const input = document.getElementById("inputString").value.trim();
  const resultEl = document.getElementById("result");
  if (!input) {
    resultEl.textContent = "Please enter a string!";
    return;
  }
  const unicodeArray = [...input].map(char => char.charCodeAt(0));
  resultEl.textContent = `[${unicodeArray.join(", ")}]`;
}
