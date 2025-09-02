function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById("btnId").onclick = () => {
  const ids = ["para1", "para2"];
  const el = document.getElementById(ids[Math.floor(Math.random() * ids.length)]);
  el.style.color = getRandomColor();
};

document.getElementById("btnClass").onclick = () => {
  document.querySelectorAll(".color-toggle").forEach(el => {
    el.style.backgroundColor = el.style.backgroundColor ? "" : "yellow";
  });
};

document.getElementById("btnTag").onclick = () => {
  document.querySelectorAll("span").forEach(span => span.textContent = "Updated Text");
};

document.getElementById("btnName").onclick = () => {
  document.querySelectorAll("input[name]").forEach(input => input.disabled = !input.disabled);
};

document.getElementById("btnAttr").onclick = () => {
  const el = document.querySelector("p[data-info='one']");
  el.setAttribute("data-new", "added");
  document.getElementById("attrResult").textContent = "Added: data-new='added'";
};
