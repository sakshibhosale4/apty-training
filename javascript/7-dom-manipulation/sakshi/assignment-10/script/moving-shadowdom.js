const host = document.getElementById("shadowHost");
const shadow = host.attachShadow({ mode: "open" });
shadow.innerHTML = `
  <style>
    table { border-collapse: collapse; width: 100%; }
    td { border: 1px solid black; padding: 8px; }
  </style>
  <table id="myTable">
    <tbody>
      ${Array.from({ length: 10 }, (_, i) => `
        <tr><td>Row ${i + 1}</td></tr>
      `).join("")}
    </tbody>
  </table>
`;
document.getElementById("up").addEventListener("click", () => moveRow("up"));
document.getElementById("down").addEventListener("click", () => moveRow("down"));
document.getElementById("top").addEventListener("click", () => moveRow("top"));
document.getElementById("bottom").addEventListener("click", () => moveRow("bottom"));

function moveRow(action) {
  const rowNumber = parseInt(document.getElementById("rowNumber").value, 10);
  if (!rowNumber || rowNumber < 1 || rowNumber > 10) return;

  const tbody = shadow.querySelector("#myTable tbody");
  const row = tbody.children[rowNumber - 1];

  if (!row) return;

  if (action === "up" && row.previousElementSibling) {
    tbody.insertBefore(row, row.previousElementSibling);
  } else if (action === "down" && row.nextElementSibling) {
    tbody.insertBefore(row.nextElementSibling, row);
  } else if (action === "top") {
    tbody.insertBefore(row, tbody.firstElementChild);
  } else if (action === "bottom") {
    tbody.appendChild(row);
  }
}
