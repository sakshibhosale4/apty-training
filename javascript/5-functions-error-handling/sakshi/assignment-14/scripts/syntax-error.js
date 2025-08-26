const input = document.getElementById("jsonInput");
const result = document.getElementById("result");
const error = document.getElementById("error");

function parseJSON(jsonString) {
  if (!jsonString || typeof jsonString !== "string") {
    throw new Error("Input must be a non-empty JSON string.");
  }
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    throw new Error("Invalid JSON format. Please check your syntax.");
  }
}

document.getElementById("parseBtn").addEventListener("click", () => {
  result.textContent = "";
  error.textContent = "";

  try {
    const parsed = parseJSON(input.value.trim());
    result.textContent = JSON.stringify(parsed, null, 2);
  } catch (err) {
    error.textContent = err.message;
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  input.value = "";
  result.textContent = "";
  error.textContent = "";
});
