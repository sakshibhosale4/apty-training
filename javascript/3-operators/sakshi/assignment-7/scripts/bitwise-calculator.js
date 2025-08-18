const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const display = document.getElementById("display");

function getValues() {
    let val1 = Number(input1.value);
    let val2 = Number(input2.value);
    return { val1, val2 };
}

function bitwiseAnd() {
    const { val1, val2 } = getValues();
    display.innerHTML = `${val1} & ${val2} = ${val1 & val2}`;
}

function bitwiseOr() {
    const { val1, val2 } = getValues();
    display.innerHTML = `${val1} | ${val2} = ${val1 | val2}`;
}

function bitwiseXor() {
    const { val1, val2 } = getValues();
    display.innerHTML = `${val1} ^ ${val2} = ${val1 ^ val2}`;
}

function bitwiseNot() {
    const { val1, val2 } = getValues();
    display.innerHTML = `~${val1} = ${~val1}<br>~${val2} = ${~val2}`;
}

function leftShift() {
    const { val1, val2 } = getValues();
    display.innerHTML = `${val1} << ${val2} = ${val1 << val2}`;
}

function rightShift() {
    const { val1, val2 } = getValues();
    display.innerHTML = `${val1} >> ${val2} = ${val1 >> val2}`;
}

function clearAll() {
    input1.value = "";
    input2.value = "";
    display.innerHTML = "";
}

document.getElementById("bitwise-and").addEventListener("click", bitwiseAnd);
document.getElementById("bitwise-or").addEventListener("click", bitwiseOr);
document.getElementById("bitwise-xor").addEventListener("click", bitwiseXor);
document.getElementById("bitwise-not").addEventListener("click", bitwiseNot);
document.getElementById("left-shift").addEventListener("click", leftShift);
document.getElementById("right-shift").addEventListener("click", rightShift);
document.getElementById("clear").addEventListener("click", clearAll);
