const output = document.getElementById('dimensions');

function printDimensions() {
  output.innerHTML = `
    <strong>Inner Width:</strong> ${window.innerWidth}<br>
    <strong>Inner Height:</strong> ${window.innerHeight}<br>
    <strong>Outer Width:</strong> ${window.outerWidth}<br>
    <strong>Outer Height:</strong> ${window.outerHeight}<br>
    <strong>Screen Width:</strong> ${screen.width}<br>
    <strong>Screen Height:</strong> ${screen.height}<br>
    <strong>Available Width:</strong> ${screen.availWidth}<br>
    <strong>Available Height:</strong> ${screen.availHeight}
  `;
}

window.addEventListener('resize', printDimensions);
printDimensions();
