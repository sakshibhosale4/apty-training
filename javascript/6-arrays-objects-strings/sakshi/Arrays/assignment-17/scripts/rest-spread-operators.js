function mergeArrays(...arrays) {
  return [...new Set(arrays.flat())]
}

document.getElementById("mergeForm").addEventListener("submit", e => {
  e.preventDefault()
  let arr1 = JSON.parse(document.getElementById("arr1").value)
  let arr2 = JSON.parse(document.getElementById("arr2").value)
  let result = mergeArrays(arr1, arr2)
  document.getElementById("result").textContent = `[${result.join(", ")}]`
})
