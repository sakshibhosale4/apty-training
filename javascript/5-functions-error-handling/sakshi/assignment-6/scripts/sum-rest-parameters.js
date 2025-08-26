function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
document.getElementById("sumForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const input = document.getElementById("numbers").value;
    const numArray = input
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));
    if (numArray.length === 0) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }
    const sum = sumAll(...numArray);
    document.getElementById("result").textContent = `Sum: ${sum}`;
});
document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("numbers").value = "";
    document.getElementById("result").textContent = "";
});
