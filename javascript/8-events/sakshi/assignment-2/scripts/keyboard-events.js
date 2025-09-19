const keydownOutput = document.getElementById('keydownOutput');
const keyupOutput = document.getElementById('keyupOutput');

function formatKeys(event) {
  let keys = [];
  if (event.ctrlKey) keys.push('Ctrl');
  if (event.shiftKey) keys.push('Shift');
  if (event.altKey) keys.push('Alt');
  keys.push(event.key);
  return keys.join('+');
}

window.addEventListener('keydown', (event) => {
  keydownOutput.textContent = formatKeys(event);
});

window.addEventListener('keyup', (event) => {
  keyupOutput.textContent = formatKeys(event);
});
