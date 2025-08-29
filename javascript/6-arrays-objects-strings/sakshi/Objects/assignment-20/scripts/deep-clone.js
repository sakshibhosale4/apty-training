function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}
document.getElementById("cloneBtn").addEventListener("click", () => {
  const inputText = document.getElementById("objectInput").value.trim();
  const output = document.getElementById("output");
  try {
    let obj = JSON.parse(inputText);
    let clone = deepClone(obj);
    if (clone.b && typeof clone.b === "object") {
      clone.b.c = "Modified in clone";
    }
    output.textContent =
      "Original Object:\n" + JSON.stringify(obj, null, 2) +
      "\n\nCloned & Modified Object:\n" + JSON.stringify(clone, null, 2);
  } catch (err) {
    output.textContent = "Invalid JSON input. Please enter a valid object.";
  }
});
