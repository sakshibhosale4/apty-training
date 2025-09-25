const xInput = document.getElementById('xPos');
const yInput = document.getElementById('yPos');

document.getElementById('scrollToBtn').addEventListener('click', () => {
  const x = parseInt(xInput.value, 10) || 0;
  const y = parseInt(yInput.value, 10) || 0;
  window.scrollTo(x, y);
});

document.getElementById('scrollUpBtn').addEventListener('click', () => {
  window.scrollBy(0, -10);
});

document.getElementById('scrollDownBtn').addEventListener('click', () => {
  window.scrollBy(0, 10);
});
