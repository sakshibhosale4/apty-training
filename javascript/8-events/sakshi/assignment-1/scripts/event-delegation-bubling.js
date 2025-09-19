const table = document.getElementById('highlightTable');

function highlight(rowIndex, colIndex) {
  for (const cell of table.rows[rowIndex].cells) {
    cell.style.backgroundColor = 'yellow';
  }
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[colIndex].style.backgroundColor = 'yellow';
  }
}

function removeHighlight(rowIndex, colIndex) {
  for (const cell of table.rows[rowIndex].cells) {
    cell.style.backgroundColor = '';
  }
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[colIndex].style.backgroundColor = '';
  }
}

table.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'TD') {
    highlight(event.target.parentNode.rowIndex, event.target.cellIndex);
  }
});

table.addEventListener('mouseout', (event) => {
  if (event.target.tagName === 'TD') {
    removeHighlight(event.target.parentNode.rowIndex, event.target.cellIndex);
  }
});
