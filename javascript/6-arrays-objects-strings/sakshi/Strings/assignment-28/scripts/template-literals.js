function createGreeting() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const resultEl = document.getElementById("result");
  if (!name || !age) {
    resultEl.textContent = "Please enter both name and age!";
    return;
  }
  const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
  resultEl.textContent = greeting;
}
