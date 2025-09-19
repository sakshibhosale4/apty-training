const target = document.querySelector('main');

const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.id === 'editable') {
        node.addEventListener('click', () => {
          const textarea = document.createElement('textarea');
          textarea.value = node.textContent.replace('✏️', '').trim();
          node.replaceWith(textarea);
          textarea.focus();

          textarea.addEventListener('blur', () => {
            const div = document.createElement('div');
            div.id = 'editable';
            div.style.border = '1px solid #000';
            div.style.padding = '10px';
            div.style.display = 'inline-block';
            div.style.cursor = 'pointer';
            div.textContent = textarea.value + ' ✏️';
            textarea.replaceWith(div);
          });
        });
      }
    });
  });
});

observer.observe(target, { childList: true, subtree: true });

document.getElementById('editable').click();
