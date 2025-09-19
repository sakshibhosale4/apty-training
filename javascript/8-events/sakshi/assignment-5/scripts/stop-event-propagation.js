const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  alert('Parent Div Clicked');
});

child.addEventListener('click', (event) => {
  event.stopPropagation();
  alert('Child Div Clicked - Event Stopped');
});
