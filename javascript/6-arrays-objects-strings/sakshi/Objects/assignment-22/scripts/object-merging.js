function deepMerge(obj1, obj2) {
  const result = { ...obj1 };
  for (let key in obj2) {
    if (
      typeof obj2[key] === "object" &&
      obj2[key] !== null &&
      !Array.isArray(obj2[key])
    ) {
      result[key] = deepMerge(result[key] || {}, obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}
document.getElementById("mergeBtn").addEventListener("click", function () {
  const obj1Text = document.getElementById("obj1Input").value;
  const obj2Text = document.getElementById("obj2Input").value;
  const output = document.getElementById("output");
  try {
    const obj1 = JSON.parse(obj1Text);
    const obj2 = JSON.parse(obj2Text);
    const merged = deepMerge(obj1, obj2);
    output.textContent = JSON.stringify(merged, null, 2);
  } catch (error) {
    output.textContent = "Invalid JSON input. Please enter valid objects.";
  }
});
