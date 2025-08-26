const sortArray = function (arr) {
    return arr.sort((a, b) => a - b);
};
document.getElementById("sortBtn").addEventListener("click", () => {
    const input = document.getElementById("array").value;
    if (!input.trim()) {
        document.getElementById("results").textContent = "Please enter some numbers.";
        return;
    }
    const numArray = input.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
    const sorted = sortArray(numArray);
    let table = "<table border='1'><tr><th>Index</th><th>Value</th></tr>";
    sorted.forEach((val, i) => table += `<tr><td>${i}</td><td>${val}</td></tr>`);
    table += "</table>";
    document.getElementById("results").innerHTML = table;
});
document.getElementById("clearBtn").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("array").value = "";
    document.getElementById("results").innerHTML = "";
});
