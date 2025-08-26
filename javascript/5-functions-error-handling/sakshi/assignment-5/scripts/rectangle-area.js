function calculateArea(length = 5, width = 3) {
    return length * width;
}

document.getElementById("areaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let length = document.getElementById("length").value.trim();
    let width = document.getElementById("width").value.trim();

    length = length ? Number(length) : undefined;
    width = width ? Number(width) : undefined;

    if ((length !== undefined && isNaN(length)) || (width !== undefined && isNaN(width))) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    const area = calculateArea(length, width);
    document.getElementById("result").textContent = `Area of Rectangle: ${area}`;
});
document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("result").textContent = "";
});
