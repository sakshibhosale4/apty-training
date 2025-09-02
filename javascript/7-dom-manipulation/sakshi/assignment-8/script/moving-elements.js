const table = document.getElementById("myTable");
const tbody = table.querySelector("tbody");

tbody.addEventListener("click", e => {
  if (e.target.tagName.toLowerCase() !== "button") return;

  const row = e.target.closest("tr");
  const action = e.target.className;

  if (action === "up" && row.previousElementSibling) {
    tbody.insertBefore(row, row.previousElementSibling);
  } else if (action === "down" && row.nextElementSibling) {
    tbody.insertBefore(row.nextElementSibling, row);
  } else if (action === "top") {
    tbody.insertBefore(row, tbody.firstElementChild);
  } else if (action === "bottom") {
    tbody.appendChild(row);
  }
});
