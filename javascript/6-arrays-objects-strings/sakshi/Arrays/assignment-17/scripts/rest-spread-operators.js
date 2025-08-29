function mergeArrays(...arrays) {
  return [...new Set(arrays.flat())]
}

document.getElementById("mergeForm").addEventListener("submit", e => {
  e.preventDefault();
  const resultEl = document.getElementById("result");
  try {
    let arr1 = JSON.parse(document.getElementById("arr1").value);
    let arr2 = JSON.parse(document.getElementById("arr2").value);
    let result = mergeArrays(arr1, arr2);
    resultEl.textContent = `[${result.join(", ")}]`;
  } catch (error) {
    resultEl.textContent = "Invalid JSON input. Please check your arrays.";
  }
});