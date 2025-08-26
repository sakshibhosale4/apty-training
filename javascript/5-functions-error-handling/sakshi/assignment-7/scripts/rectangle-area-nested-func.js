function rectangleMetrics(length = 5, width = 3) {
    function calculateArea() {
        return length * width;
    }
    const perimeter = 2 * (length + width);
    const area = calculateArea();
    return { perimeter, area };
}
document.getElementById("rectangleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let lengthInput = document.getElementById("length").value.trim();
    let widthInput = document.getElementById("width").value.trim();
    let length = lengthInput ? Number(lengthInput) : undefined;
    let width = widthInput ? Number(widthInput) : undefined;
    if ((length !== undefined && (isNaN(length) || length <= 0)) ||
        (width !== undefined && (isNaN(width) || width <= 0))) {
        alert("Please enter valid positive numbers for length and width.");
        return;
    }
    const result = rectangleMetrics(length, width);
    document.getElementById("perimeterResult").textContent = `Perimeter: ${result.perimeter}`;
    document.getElementById("areaResult").textContent = `Area: ${result.area}`;
});

document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("perimeterResult").textContent = "";
    document.getElementById("areaResult").textContent = "";
});
