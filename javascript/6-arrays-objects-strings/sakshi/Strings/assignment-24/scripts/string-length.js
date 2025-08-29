document.getElementById("calcBtn").addEventListener("click", () => {
  const input = document.getElementById("inputString").value.trim();
  const output = document.getElementById("output");

  if (input === "") {
    output.textContent = "Please enter a string.";
    return;
  }
  const lengths = input.split(/\s+/).map(word => word.length).join(" ");
  output.textContent = lengths;
});
