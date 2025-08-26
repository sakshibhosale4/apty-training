let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
    count++;
    document.getElementById("counter").textContent = count;
});
document.getElementById("clearBtn").addEventListener("click", () => {
    count = 0;
    document.getElementById("counter").textContent = count;
});
