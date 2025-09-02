const divs = [
  document.getElementById("div1"),
  document.getElementById("div2"),
  document.getElementById("div3")
];

let currentIndex = 0;

document.getElementById("toggleBtn").addEventListener("click", () => {
  divs[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % divs.length;
  divs[currentIndex].style.display = "block";
});
