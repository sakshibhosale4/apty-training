function toUpperCaseCallback(str = "Default String") {
    return str.toUpperCase();
}
function processString(callback, input) {
    return callback(input);
}
document.getElementById("stringForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let input = document.getElementById("userString").value.trim();
    if (!input) {
        input = undefined;
    }
    const result = processString(toUpperCaseCallback, input);
    document.getElementById("result").textContent = `Processed String: ${result}`;
});
document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("userString").value = "";
    document.getElementById("result").textContent = "";
});
