function outerFunction(a) {
    function middleFunction(b) {
        function innerFunction(c) {
            return `Concatenated Result: ${a} - ${b} - ${c}`;
        }
        return innerFunction;
    }
    return middleFunction;
}

document.getElementById("showBtn").addEventListener("click", () => {
    const val1 = document.getElementById("var1").value || "Default1";
    const val2 = document.getElementById("var2").value || "Default2";
    const val3 = document.getElementById("var3").value || "Default3";

    const result = outerFunction(val1)(val2)(val3);
    document.getElementById("output").textContent = result;
});

document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("var1").value = "";
    document.getElementById("var2").value = "";
    document.getElementById("var3").value = "";
    document.getElementById("output").textContent = "";
});
