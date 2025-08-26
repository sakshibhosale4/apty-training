const factorial = (() => {
    const cache = {};
    function compute(n) {
        if (n === 0 || n === 1) return 1;
        if (cache[n] !== undefined) return cache[n];
        const result = n * compute(n - 1);
        cache[n] = result;
        return result;
    }
    return function(n) {
        if (cache[n] !== undefined) {
            return `Cached Result: ${cache[n]}`;
        }
        const result = compute(n);
        cache[n] = result;
        return `Computed Result: ${result}`;
    };
})();
document.getElementById("calcBtn").addEventListener("click", () => {
    const num = parseInt(document.getElementById("number").value, 10);
    if (isNaN(num) || num < 0) {
        document.getElementById("result").textContent = "Please enter a valid non-negative number.";
        return;
    }
    const output = factorial(num);
    document.getElementById("result").textContent = output;
});
document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("number").value = "";
    document.getElementById("result").textContent = "";
});
