function customFlatten(arr) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      result.push(...customFlatten(element)); // recursion
    } else {
      result.push(element);
    }
  }
  return result;
}

const arrayInput = document.getElementById("arrayInput");
const resultEl = document.getElementById("resultEl"); 
const errorEl = document.getElementById("errorEl"); 

document.getElementById("flattenBtn").addEventListener("click", () => {
  resultEl.textContent = "";
  errorEl.textContent = "";

  const input = arrayInput.value.trim();

  if (!input) {
    errorEl.textContent = "Please enter a nested array before flattening.";
    return;
  }

  try {
    const arr = JSON.parse(input);
    if (!Array.isArray(arr)) throw new Error("Not an array");

    const flattened = customFlatten(arr);
    resultEl.textContent = "Flattened Array: " + JSON.stringify(flattened);
  } catch {
    errorEl.textContent =
      "Invalid input! Please enter a proper array format like [1,2,[3,[4,5]]] .";
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  arrayInput.value = "";
  resultEl.textContent = "";
  errorEl.textContent = "";
});
