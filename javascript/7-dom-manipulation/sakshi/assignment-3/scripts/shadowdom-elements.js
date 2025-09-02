const assignmentContent = `
  <style>
    h2 {
      font-family: Arial, sans-serif;
      color: #333;
      transition: color 0.3s ease;
      text-align: center;
      padding: 20px;
    }
  </style>
  <h2 id="heading">Hello from Assignment1!</h2>
`;

const host = document.getElementById("shadow-host");
const shadow = host.attachShadow({ mode: "open" });
shadow.innerHTML = assignmentContent;

const heading = shadow.querySelector("#heading");

document.getElementById("btnChangeText").addEventListener("click", () => {
  heading.textContent = "Text Changed from Outside!";
});

document.getElementById("btnChangeColor").addEventListener("click", () => {
  heading.style.color = "blue";
});

document.getElementById("btnReset").addEventListener("click", () => {
  heading.textContent = "Hello from Assignment1!";
  heading.style.color = "#333";
});
