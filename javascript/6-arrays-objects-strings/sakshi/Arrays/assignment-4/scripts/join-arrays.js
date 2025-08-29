function arrayToSentence(words) {
  if (!Array.isArray(words) || words.length === 0) return "";
  let cleaned = words.filter(w => typeof w === "string" && w.trim() !== "");
  if (cleaned.length === 0) return "";
  let sentence = cleaned.join(" ").trim();
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  if (!sentence.endsWith(".")) {
    sentence += ".";
  }
  return sentence;
}

const inputEl = document.getElementById("arrayInput");
const resultEl = document.getElementById("resultEl");
const errorEl = document.getElementById("errorEl");

function resetMessages() {
  resultEl.textContent = "";
  errorEl.textContent = "";
}

document.getElementById("convertBtn").addEventListener("click", () => {
  resetMessages();
  const input = inputEl.value.trim();
  if (!input) {
    errorEl.textContent = "Please enter an array of words.";
    return;
  }
  let arr;
  try {
    arr = JSON.parse(input);
  } catch {
    arr = input.split(",").map(word => word.trim()).filter(Boolean);
  }
  if (!Array.isArray(arr) || arr.some(word => typeof word !== "string")) {
    errorEl.textContent = "Invalid input! Example: [\"hello\",\"world\"] or hello, world";
    return;
  }
  const sentence = arrayToSentence(arr);
  if (!sentence) {
    errorEl.textContent = "Array is empty or invalid.";
  } else {
    resultEl.textContent = "Sentence: " + sentence;
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  inputEl.value = "";
  resetMessages();
});
