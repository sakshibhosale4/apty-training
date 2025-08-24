const numberInput = document.getElementById("numberInput");
const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

function checkOddEven() {
    const num = Number(numberInput.value);
    if (isNaN(num)) {
        result.textContent = "Invalid Input";
        return;
    }
    if (num % 2 === 0) {
        result.textContent = `${num} is Even Number.`;
    }else {
        result.textContent = `${num} is Odd Number.`;
    }
}
function clearAll() {
    numberInput.value = "";
    result.textContent = "";
}
checkBtn.addEventListener("click", checkOddEven);
clearBtn.addEventListener("click", clearAll);
