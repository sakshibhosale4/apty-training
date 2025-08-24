const input = document.getElementById("text");
const analyzeBtn = document.getElementById("analyze");
const clearBtn = document.getElementById("clear");
const result = document.getElementById("result");

function analyzeFrequency() {
  const str = input.value.trim().toLowerCase();
  if (!str) {
    result.textContent = "Please enter a string.";
    return;
  }
  const freq = {};
  for (let index in str) {
    let char = str[index];
    freq[char] = (freq[char] || 0) + 1;
  }
  result.textContent = "";
  const list = document.createElement("ul");
  for (let char in freq) {
    const item = document.createElement("li");
    item.textContent = `'${char}' → ${freq[char]} times`;
    list.appendChild(item);
  }
  result.appendChild(list);
}
function clearAll() {
  input.value = "";
  result.textContent = "";
}
analyzeBtn.addEventListener("click", analyzeFrequency);
clearBtn.addEventListener("click", clearAll);
