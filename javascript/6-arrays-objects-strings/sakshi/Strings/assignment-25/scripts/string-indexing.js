document.getElementById("checkBtn").addEventListener("click", () => {
  const input = document.getElementById("inputString").value;
  const output = document.getElementById("output");

  if (input.trim() === "") {
    output.textContent = "Please enter a non-empty string.";
    return;
  }

  if (input.length === 1) {
    output.textContent = `${input[0]} ${input[0]}`;
  } else {
    const firstChar = input[0];
    const lastChar = input[input.length - 1];
    output.textContent = `${firstChar} ${lastChar}`;
  }
});
