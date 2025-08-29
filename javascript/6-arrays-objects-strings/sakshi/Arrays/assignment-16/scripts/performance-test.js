document.getElementById("runTest").addEventListener("click", () => {
  const size = 10_000_000
  const arr = Array.from({ length: size }, (_, i) => i)
  const results = {}
  console.time("for loop")
  let sum1 = 0
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i]
  }
  console.timeEnd("for loop")
  results.forLoop = sum1
  console.time("for...of loop")
  let sum2 = 0
  for (const val of arr) {
    sum2 += val
  }
  console.timeEnd("for...of loop")
  results.forOf = sum2
  console.time("forEach loop")
  let sum3 = 0
  arr.forEach(val => {
    sum3 += val
  })
  console.timeEnd("forEach loop")
  results.forEach = sum3
  document.getElementById("output").textContent = JSON.stringify(results, null, 2)
})
