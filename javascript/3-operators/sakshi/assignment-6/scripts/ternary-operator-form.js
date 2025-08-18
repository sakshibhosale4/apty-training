const form = document.querySelector("form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    if (!firstName || !lastName || isNaN(age)) {
        resultDiv.innerText = "Please fill in all fields correctly.";
        return;
    }
    if (age < 0) {
        resultDiv.innerText = "Age cannot be negative.";
        return;
    }
    const fullName = `${firstName} ${lastName}`;
    const message = age >= 18 ? `Hello ${fullName}, welcome to Apty!` : `Hello ${fullName}, comeback after ${18 - age} year${18 - age > 1 ? 's' : ''}.`;
    resultDiv.innerText = message;
});
