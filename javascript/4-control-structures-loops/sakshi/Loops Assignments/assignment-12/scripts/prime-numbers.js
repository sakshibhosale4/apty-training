const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const findBtn = document.getElementById("find");
const clearBtn = document.getElementById("clear");
const result = document.getElementById("result");

function findPrimes() {
  const start = Math.max(2, Number(startInput.value));
  const end = Number(endInput.value);
  if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    result.textContent = "Please enter a valid range (start ≥ 2 and end ≥ start).";
    return;
  }
  const primes = [];
  for (let num = start; num <= end; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  result.textContent = "";
  if (primes.length === 0) {
    result.textContent = `No prime numbers found in range ${start} to ${end}.`;
  } else {
    const list = document.createElement("p");
    list.textContent = primes.join(", ");
    result.appendChild(list);
  }
}
function clearAll() {
  startInput.value = "";
  endInput.value = "";
  result.textContent = "";
}
findBtn.addEventListener("click", findPrimes);
clearBtn.addEventListener("click", clearAll);
