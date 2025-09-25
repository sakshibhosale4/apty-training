let newTab = null;

const form = document.getElementById('urlForm');
const input = document.getElementById('urlInput');
const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');
const reloadBtn = document.getElementById('reloadBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = input.value.trim();
  if (url) {
    const fullUrl = (!url.startsWith('http://') && !url.startsWith('https://')) 
      ? 'https://' + url 
      : url;
    newTab = window.open(fullUrl, '_blank');
  }
});

backBtn.addEventListener('click', () => {
  if (newTab) {
    newTab.history.back();
  }
});

forwardBtn.addEventListener('click', () => {
  if (newTab) {
    newTab.history.forward();
  }
});

reloadBtn.addEventListener('click', () => {
  if (newTab) {
    newTab.location.reload();
  }
});
