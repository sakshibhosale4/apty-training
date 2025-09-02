const assignmentContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Assignment1 Content</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }
    h2 {
      color: #333;
      transition: color 0.3s ease;
    }
  </style>
</head>
<body>
  <h2 id="heading">Hello from Assignment1!</h2>
</body>
</html>
`;
const frame = document.getElementById("myFrame");
window.addEventListener("DOMContentLoaded", () => {
  const doc = frame.contentDocument || frame.contentWindow.document;
  doc.open();
  doc.write(assignmentContent);
  doc.close();
  const heading = doc.getElementById("heading");
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
});
