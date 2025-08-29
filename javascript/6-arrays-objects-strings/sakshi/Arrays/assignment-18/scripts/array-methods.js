document.getElementById("processBtn").addEventListener("click", () => {
  const input = document.getElementById("numbers").value.trim();
  if (!input) {
    document.getElementById("output").textContent = "Please enter some numbers.";
    return;
  }
  const numbers = input.split(",").map(num => Number(num.trim())).filter(n => !isNaN(n));
  if (numbers.length === 0) {
    document.getElementById("output").textContent = "Invalid input.";
    return;
  }
  const sum = numbers
    .filter(n => n % 2 === 0)  
    .map(n => n * 2)         
    .reduce((acc, n) => acc + n, 0);
  document.getElementById("output").textContent = `Sum of doubled even numbers: ${sum}`;
});
