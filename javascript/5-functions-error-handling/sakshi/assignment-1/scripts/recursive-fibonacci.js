function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
document.getElementById("fibonacciForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const num = parseInt(document.getElementById("number").value, 10);
    if (isNaN(num) || num < 1) {
        document.getElementById("result").textContent = "Please enter a positive integer (≥ 1).";
        return;
    }
    let series = [];
    for (let i = 0; i < num; i++) {
        series.push(fibonacci(i));
    }
    document.getElementById("result").textContent = `Fibonacci Series: ${series.join(", ")}`;
});
document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("number").value = "";
    document.getElementById("result").textContent = "";
});
