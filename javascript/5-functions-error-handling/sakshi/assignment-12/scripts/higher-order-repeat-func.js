const textInput = document.getElementById("text");
const countInput = document.getElementById("count");
const list = document.getElementById("list");
const error = document.getElementById("error");

function repeatAction(action, n) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const text = textInput.value.trim();
  const count = parseInt(countInput.value, 10);
  error.textContent = "";
  list.innerHTML = "";

  if (!text || isNaN(count) || count <= 0) {
    error.textContent = "Please enter valid text and a positive number.";
    return;
  }
  if (count > 1000) {
    error.textContent = "Please enter a smaller number (max 1000).";
    return;
  }

  repeatAction((i) => {
    const li = document.createElement("li");
    li.textContent = `${text} ${i + 1}`;
    list.appendChild(li);
  }, count);
});

document.getElementById("clearBtn").addEventListener("click", () => {
  textInput.value = "";
  countInput.value = "";
  list.innerHTML = "";
  error.textContent = "";
});
