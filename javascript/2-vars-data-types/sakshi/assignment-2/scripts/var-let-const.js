let result = "";
try {
    var a = 101;
    var a = 10;
    result += "var redeclaration successful<br>";
} catch (err) {
    result += "Error redeclaring var variable: " + err + "<br>";
}
try {
    var a2 = 101;
    a2 = 10;
    result += "var reassignment successful<br>";
} catch (err) {
    result += "Error reassigning var variable: " + err + "<br>";
}
try {
    eval("let b = 102; let b = 20;");
    result += "let redeclaration successful<br>";
} catch (err) {
    result += "Error redeclaring let variable: " + err + "<br>";
}
try {
    let b2 = 102;
    b2 = 20;
    result += "let reassignment successful<br>";
} catch (err) {
    result += "Error reassigning let variable: " + err + "<br>";
}
try {
    eval("const c = 103; const c = 30;");
    result += "const redeclaration successful<br>";
} catch (err) {
    result += "Error redeclaring const variable: " + err + "<br>";
}
try {
    const c2 = 103;
    c2 = 30;
    result += "const reassignment successful<br>";
} catch (err) {
    result += "Error reassigning const variable: " + err + "<br>";
}

document.getElementById("results").innerHTML = result;
