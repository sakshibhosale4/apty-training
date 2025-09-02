document.getElementById("countBtn").addEventListener("click", () => {
  const elements = document.querySelectorAll("*");
  const counts = {};

  elements.forEach(el => {
    const tag = el.tagName.toLowerCase();
    counts[tag] = (counts[tag] || 0) + 1;
  });

  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "<strong>Element Counts:</strong>";

  for (const tag in counts) {
    const li = document.createElement("li");
    li.textContent = `${tag}: ${counts[tag]}`;
    resultList.appendChild(li);
  }
});
