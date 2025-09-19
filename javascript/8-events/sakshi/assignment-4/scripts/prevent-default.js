const form = document.getElementById('signupForm');

form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    alert('Please fill all fields correctly before submitting.');
  }
});
