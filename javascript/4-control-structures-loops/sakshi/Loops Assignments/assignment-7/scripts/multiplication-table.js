const numberInput=document.getElementById("number");
const generateBtn=document.querySelector("#generate-btn");
const clearBtn=document.querySelector("#clear-btn")
const result=document.getElementById("results");
function generateTable() {
    const num = Number(numberInput.value);
    result.textContent = "";
    if (isNaN(num)) {
        result.textContent = "Please enter a valid number.";
        return;
    }
    for (let i = 1; i <= 10; i++) {
        const line = document.createElement("p");
        line.textContent = `${num} x ${i} = ${num * i}`;
        result.appendChild(line);
    }
}
function clearAll(){
    result.textContent="";
    numberInput.value="";
}
generateBtn.addEventListener("click",generateTable);
clearBtn.addEventListener("click",clearAll);