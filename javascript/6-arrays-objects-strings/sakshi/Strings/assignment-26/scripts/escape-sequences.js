document.getElementById("convertBtn").addEventListener("click", () => {
  const input = document.getElementById("inputString").value;
  const output = document.getElementById("output");

  if (input.trim() === "") {
    output.textContent = "Please enter a string.";
    return;
  }
  const converted = input
    .replace(/\n/g, "\\n")
    .replace(/\t/g, "\\t");

  output.textContent = converted;
});
