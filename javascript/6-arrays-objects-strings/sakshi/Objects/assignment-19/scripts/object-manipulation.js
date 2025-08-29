const dynamicObj = {};

document.getElementById("addBtn").addEventListener("click", () => {
  const key = document.getElementById("keyInput").value.trim();
  const value = document.getElementById("valueInput").value.trim();
    if (!key) {
    document.getElementById("output").textContent = "Error: Key cannot be empty!";
    return;
  }
  dynamicObj[key] = value;
  document.getElementById("output").textContent = JSON.stringify(dynamicObj, null, 2);
  document.getElementById("keyInput").value = "";
  document.getElementById("valueInput").value = "";
});
