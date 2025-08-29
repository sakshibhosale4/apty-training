class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.isEmpty() ? null : this.items.pop();
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  display() {
    return `[ ${this.items.join(", ")} ]`;
  }
}
const stack = new Stack();
const inputEl = document.getElementById("stackInput");
const resultEl = document.getElementById("resultEl");
const errorEl = document.getElementById("errorEl");
const stackDisplay = document.getElementById("stackDisplay");
function resetMessages() {
  resultEl.textContent = "";
  errorEl.textContent = "";
}

function updateStackDisplay() {
  stackDisplay.textContent = stack.display();
}

document.getElementById("pushBtn").addEventListener("click", () => {
  resetMessages();
  const value = inputEl.value.trim();

  if (!value) {
    errorEl.textContent = "Please enter a value to push.";
    return;
  }

  stack.push(value);
  resultEl.textContent = `Pushed: ${value}`;
  inputEl.value = "";
  updateStackDisplay();
});

document.getElementById("popBtn").addEventListener("click", () => {
  resetMessages();
  const popped = stack.pop();

  if (popped === null) {
    errorEl.textContent = "Stack is empty! Nothing to pop.";
  } else {
    resultEl.textContent = `Popped: ${popped}`;
    updateStackDisplay();
  }
});

document.getElementById("peekBtn").addEventListener("click", () => {
  resetMessages();
  const top = stack.peek();

  if (top === null) {
    errorEl.textContent = "Stack is empty! No top element.";
  } else {
    resultEl.textContent = `Top Element: ${top}`;
  }
});

document.getElementById("isEmptyBtn").addEventListener("click", () => {
  resetMessages();
  resultEl.textContent = stack.isEmpty() 
    ? "Stack is empty." 
    : "Stack is not empty.";
});

document.getElementById("clearBtn").addEventListener("click", () => {
  resetMessages();
  stack.clear();
  resultEl.textContent = "Stack cleared.";
  updateStackDisplay();
});
updateStackDisplay();