class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0]; 
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
const queue = new Queue();
const inputEl = document.getElementById("queueInput");
const resultEl = document.getElementById("resultEl");
const errorEl = document.getElementById("errorEl");
const queueDisplay = document.getElementById("queueDisplay");
function updateQueueDisplay() {
  queueDisplay.textContent = queue.display();
}
document.getElementById("enqueueBtn").addEventListener("click", () => {
  resultEl.textContent = "";
  errorEl.textContent = "";
  const value = inputEl.value.trim();
  if (!value) {
    errorEl.textContent = "Please enter a value to enqueue.";
    return;
  }

  queue.enqueue(value);
  resultEl.textContent = `Enqueued: ${value}`;
  inputEl.value = "";
  updateQueueDisplay();
});
document.getElementById("dequeueBtn").addEventListener("click", () => {
  resultEl.textContent = "";
  errorEl.textContent = "";

  const removed = queue.dequeue();
  if (removed === null) {
    errorEl.textContent = "Queue is empty! Nothing to dequeue.";
  } else {
    resultEl.textContent = `Dequeued: ${removed}`;
    updateQueueDisplay();
  }
});
document.getElementById("peekBtn").addEventListener("click", () => {
  resultEl.textContent = "";
  errorEl.textContent = "";

  const front = queue.peek();
  if (front === null) {
    errorEl.textContent = "Queue is empty! No front element.";
  } else {
    resultEl.textContent = `Front Element: ${front}`;
  }
});
document.getElementById("isEmptyBtn").addEventListener("click", () => {
  resultEl.textContent = "";
  errorEl.textContent = "";

  if (queue.isEmpty()) {
    resultEl.textContent = "Queue is empty.";
  } else {
    resultEl.textContent = "Queue is not empty.";
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  queue.clear();
  resultEl.textContent = "Queue cleared.";
  errorEl.textContent = "";
  updateQueueDisplay();
});

updateQueueDisplay();
