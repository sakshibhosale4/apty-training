document.getElementById("countBtn").addEventListener("click", () => {
  const parents = document.querySelectorAll("main > section[id]");

  const resultList = document.getElementById("resultList");
  resultList.innerHTML = ""; 

  parents.forEach((parent, index) => {
    const nestedElements = parent.querySelectorAll("*").length;

    const li = document.createElement("li");
    li.textContent = `Parent ${index + 1} (${parent.id}): ${nestedElements} nested elements`;
    resultList.appendChild(li);
  });
});
